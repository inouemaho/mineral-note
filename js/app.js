// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 鉱物データの重複を排除し、最初に出現したレコードのみを使用
        const uniqueMinerals = {};
        MINERALS_DATA.minerals.forEach(mineral => {
            if (!uniqueMinerals[mineral.name_en]) {
                uniqueMinerals[mineral.name_en] = mineral;
            }
        });

        // 重複を排除したデータを配列に戻す
        MINERALS_DATA.minerals = Object.values(uniqueMinerals);

        // データベースの初期化
        await db.initialize();

        // アルファベット索引の生成
        const alphabetIndexContainer = document.getElementById('alphabet-index');
        modalManager.createAlphabetIndex(alphabetIndexContainer);

        // 鉱物リストの生成
        const mineralsListContainer = document.getElementById('minerals-list');
        await modalManager.createMineralsList(mineralsListContainer);

        // 詳細モーダルでのいいねボタンのイベント設定
        const detailLikeButton = document.querySelector('#modal-detail .detail-like-button');
        detailLikeButton.addEventListener('click', async () => {
            const nameEn = modalManager.currentMineralNameEn;
            if (nameEn) {
                const newLikes = await db.toggleLike(nameEn);
                detailLikeButton.classList.toggle('active', newLikes.has(nameEn));

                // リスト表示のいいねボタンも更新
                const listLikeButton = document.querySelector(`.minerals-list .like-button[data-mineral-name="${nameEn}"]`);
                if (listLikeButton) {
                    listLikeButton.classList.toggle('active', newLikes.has(nameEn));
                }
            }
        });

    } catch (error) {
        console.error('アプリケーションの初期化に失敗しました:', error);
        alert('アプリケーションの読み込みに失敗しました。ページを更新してください。');
    }
});

// スクロール位置の記憶と復元
let lastScrollPosition = 0;

document.addEventListener('modal-detail-before-open', () => {
    lastScrollPosition = document.querySelector('.minerals-list').scrollTop;
});

document.addEventListener('modal-detail-after-close', () => {
    document.querySelector('.minerals-list').scrollTop = lastScrollPosition;
});

// ブラウザの戻るボタン対応
window.addEventListener('popstate', () => {
    if (document.getElementById('modal-detail').getAttribute('aria-hidden') === 'false') {
        MicroModal.close('modal-detail');
    }
});

// モバイルデバイスでのスクロール改善
document.addEventListener('touchmove', (e) => {
    const modalContent = e.target.closest('.modal__content');
    if (modalContent && modalContent.scrollHeight > modalContent.clientHeight) {
        e.stopPropagation();
    }
}, { passive: true });

// エラーハンドリング
window.addEventListener('error', (event) => {
    console.error('アプリケーションエラー:', event.error);
    // エラーが発生した場合でもアプリケーションが動作し続けるように
    event.preventDefault();
});

// オフライン対応
window.addEventListener('offline', () => {
    console.log('オフラインモードに移行しました');
});

window.addEventListener('online', () => {
    console.log('オンラインモードに復帰しました');
});
