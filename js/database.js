// データベース操作
class MineralDatabase {
    constructor() {
        // localForageの設定
        localforage.config({
            name: 'mineral-note',
            storeName: 'minerals'
        });

        // いいね情報用のストア
        this.likesStore = localforage.createInstance({
            name: 'mineral-note',
            storeName: 'likes'
        });
    }

    // 初期データの読み込み
    async initialize() {
        try {
            // 鉱物データの保存
            await localforage.setItem('minerals', MINERALS_DATA.minerals);
            
            // いいね情報の初期化（存在しない場合のみ）
            const likes = await this.likesStore.getItem('likes');
            if (!likes) {
                await this.likesStore.setItem('likes', new Set());
            }
        } catch (error) {
            console.error('データベースの初期化に失敗しました:', error);
        }
    }

    // 鉱物データの取得
    async getMinerals() {
        try {
            return await localforage.getItem('minerals');
        } catch (error) {
            console.error('鉱物データの取得に失敗しました:', error);
            return [];
        }
    }

    // いいね情報の取得
    async getLikes() {
        try {
            const likes = await this.likesStore.getItem('likes');
            return likes || new Set();
        } catch (error) {
            console.error('いいね情報の取得に失敗しました:', error);
            return new Set();
        }
    }

    // いいねの追加/削除
    async toggleLike(mineralId) {
        try {
            const likes = await this.getLikes();
            const likeSet = new Set(likes);

            if (likeSet.has(mineralId)) {
                likeSet.delete(mineralId);
            } else {
                likeSet.add(mineralId);
            }

            await this.likesStore.setItem('likes', likeSet);
            return likeSet;
        } catch (error) {
            console.error('いいねの更新に失敗しました:', error);
            return new Set();
        }
    }

    // 特定の鉱物がいいね済みかチェック
    async isLiked(mineralId) {
        try {
            const likes = await this.getLikes();
            return likes.has(mineralId);
        } catch (error) {
            console.error('いいね状態の確認に失敗しました:', error);
            return false;
        }
    }
}

// データベースのインスタンスを作成
const db = new MineralDatabase();
