// モーダル管理
class ModalManager {
    constructor() {
        this.currentMineralNameEn = null;
        this.initializeModals();
    }

    // モーダルの初期化
    initializeModals() {
        // メインモーダルを表示状態に
        const mainModal = document.getElementById('modal-minerals');
        mainModal.classList.add('is-open');
        mainModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('has-modal');

        // 詳細モーダルの閉じるボタンの設定
        const closeButton = document.querySelector('#modal-detail .modal__close');
        closeButton.addEventListener('click', () => {
            const detailModal = document.getElementById('modal-detail');
            detailModal.style.display = 'none';
            detailModal.classList.remove('is-open');
            detailModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('has-modal');
        });
    }

    // メインモーダル（鉱物リスト）を表示
    showMineralsList() {
        MicroModal.show('modal-minerals');
    }

    // 詳細モーダルを表示
    async showMineralDetail(nameEn) {
        this.currentMineralNameEn = nameEn;
        const mineral = getMineralByNameEn(nameEn);
        if (!mineral) return;

        // 詳細情報を設定
        document.querySelector('#modal-detail .mineral-name-en').textContent = mineral.name_en;
        document.querySelector('#modal-detail .mineral-name-jp').textContent = mineral.name_jp;
        document.querySelector('#modal-detail .chemical-formula').innerHTML = mineral.chemical_formula_html;
        document.querySelector('#modal-detail .strunz').textContent = mineral.strunz_classification;
        document.querySelector('#modal-detail .description').textContent = mineral.description;
        document.querySelector('#modal-detail .symmetry').textContent = mineral.symmetry;
        document.querySelector('#modal-detail .crystal-structure').textContent = mineral.crystal_structure;
        document.querySelector('#modal-detail .habit').textContent = mineral.habit.join(', ');
        document.querySelector('#modal-detail .occurrence').textContent = mineral.occurrence.join(', ');

        // いいねボタンの状態を設定
        const isLiked = await db.isLiked(nameEn);
        const likeButton = document.querySelector('#modal-detail .detail-like-button');
        likeButton.classList.toggle('active', isLiked);

        // モーダルを表示
        const detailModal = document.getElementById('modal-detail');
        detailModal.style.display = 'block';
        detailModal.classList.add('is-open');
        detailModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('has-modal');

        // スワイプ処理の設定
        const container = detailModal.querySelector('.modal__container');
        let startY = 0;
        let currentY = 0;
        let startTime = 0;
        let isScrollingDown = false;
        let initialScrollTop = 0;

        const cleanup = () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
            container.removeEventListener('touchcancel', handleTouchEnd);
        };

        const handleTouchStart = (e) => {
            startY = e.touches[0].clientY;
            currentY = startY;
            startTime = Date.now();
            isScrollingDown = false;
            initialScrollTop = container.scrollTop;
            container.classList.add('swiping');
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 1) return; // マルチタッチを無視

            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;
            const scrollTop = container.scrollTop;

            // 上方向のスクロールは常に許可
            if (deltaY < 0) {
                container.classList.remove('swiping');
                return;
            }

            // 下方向のスワイプ判定
            if (scrollTop <= 0 && (initialScrollTop <= 0 || deltaY > 5)) {
                isScrollingDown = true;
                e.preventDefault();
                const resistance = Math.min(0.4, 1 / (1 + deltaY * 0.003)); // 抵抗値を距離に応じて調整
                const translatedY = deltaY * resistance;
                container.style.transform = `translateY(${translatedY}px)`;
                
                // オーバーレイの透明度も調整
                const opacity = Math.max(0.1, 1 - (translatedY / window.innerHeight));
                detailModal.querySelector('.modal__overlay').style.opacity = opacity;
            }
        };

        const handleTouchEnd = () => {
            const deltaY = currentY - startY;
            const deltaTime = Date.now() - startTime;
            const velocity = deltaY / deltaTime;

            container.classList.remove('swiping');
            container.classList.add('bounce-back');

            // スワイプでの閉じる判定
            if (isScrollingDown && (deltaY > 150 || (deltaY > 50 && velocity > 0.3))) {
                container.classList.add('swipe-close');
                const overlay = detailModal.querySelector('.modal__overlay');
                overlay.style.opacity = '0';
                
                setTimeout(() => {
                    cleanup();
                    detailModal.style.display = 'none';
                    detailModal.classList.remove('is-open');
                    detailModal.setAttribute('aria-hidden', 'true');
                    document.body.classList.remove('has-modal');
                    container.classList.remove('swipe-close', 'bounce-back');
                    container.style.transform = '';
                    overlay.style.opacity = '';
                }, 300);
            } else {
                container.style.transform = '';
                detailModal.querySelector('.modal__overlay').style.opacity = '';
                setTimeout(() => {
                    container.classList.remove('bounce-back');
                }, 200);
            }
        };

        cleanup(); // 既存のイベントリスナーを削除
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd);
        container.addEventListener('touchcancel', handleTouchEnd);
    }

    // アルファベット索引を生成
    createAlphabetIndex(container) {
        const letters = generateAlphabetIndex();
        container.innerHTML = letters.map(letter => `
            <button type="button" data-letter="${letter}">${letter}</button>
        `).join('');

        // クリックイベントの設定
        container.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const letter = e.target.dataset.letter;
                const element = document.querySelector(`[data-letter-section="${letter}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // 鉱物リストを生成
    async createMineralsList(container) {
        const minerals = await db.getMinerals();
        const likes = await db.getLikes();
        let currentLetter = '';
        let html = '';

        minerals.forEach(mineral => {
            const firstLetter = mineral.name_en.charAt(0);
            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                html += `
                    <div class="letter-section" data-letter-section="${currentLetter}">
                        <h3>${currentLetter}</h3>
                    </div>
                `;
            }

            html += `
                <div class="mineral-item" data-mineral-name="${mineral.name_en}">
                    <div class="mineral-names">
                        <div class="mineral-name-en">${mineral.name_en}</div>
                        <div class="mineral-name-jp">${mineral.name_jp}</div>
                    </div>
                    <button class="like-button ${likes.has(mineral.name_en) ? 'active' : ''}" 
                            data-mineral-name="${mineral.name_en}" 
                            aria-label="いいね">♥</button>
                </div>
            `;
        });

        container.innerHTML = html;

        // クリックイベントの設定
        container.addEventListener('click', async (e) => {
            const mineralItem = e.target.closest('.mineral-item');
            const likeButton = e.target.closest('.like-button');

            if (likeButton) {
                e.stopPropagation();
                const nameEn = likeButton.dataset.mineralName;
                const newLikes = await db.toggleLike(nameEn);
                likeButton.classList.toggle('active');

                // 詳細モーダルのいいねボタンも更新
                if (this.currentMineralNameEn === nameEn) {
                    const detailLikeButton = document.querySelector('#modal-detail .detail-like-button');
                    detailLikeButton.classList.toggle('active', newLikes.has(nameEn));
                }
            } else if (mineralItem) {
                const nameEn = mineralItem.dataset.mineralName;
                this.showMineralDetail(nameEn);
            }
        });
    }
}

// モーダルマネージャーのインスタンスを作成
const modalManager = new ModalManager();
