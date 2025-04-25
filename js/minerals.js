// アルファベット索引を生成
const generateAlphabetIndex = () => {
    const minerals = MINERALS_DATA.minerals;
    const letters = new Set(minerals.map(m => m.name_en.charAt(0)));
    return Array.from(letters).sort();
};

// 特定のアルファベットで始まる鉱物を取得
const getMineralsByLetter = (letter) => {
    return MINERALS_DATA.minerals.filter(m => m.name_en.startsWith(letter));
};

// name_enで鉱物を取得
const getMineralByNameEn = (nameEn) => {
    return MINERALS_DATA.minerals.find(m => m.name_en === nameEn);
};

// 鉱物データをソート
MINERALS_DATA.minerals.sort((a, b) => a.name_en.localeCompare(b.name_en));
