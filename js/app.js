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

        const alphabetIndexContainer = document.getElementById('alphabet-index');
        const mineralsListContainer = document.getElementById('minerals-list');

        modalManager.createAlphabetIndex(alphabetIndexContainer);
        await modalManager.createMineralsList(mineralsListContainer);

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

// トップスクロールボタンの機能
document.getElementById('scroll-top').addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal.is-open .modal__container');
    if (modalContainer) {
        modalContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
