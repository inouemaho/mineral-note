// 鉱物データ
const MINERALS_DATA = {
    minerals: [
        {
            id: 1,
            name_jp: "めのう",
            name_en: "AGATE",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Brazil"],
            description: "硬度6.5～7 潜晶質縞状の珪酸で岩石の空隙に層状に沈殿したもの。容易に人工着色が行われる。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 2,
            name_jp: "鉄ばんざくろ石",
            name_en: "ALMANDINE",
            chemical_formula_html: "Fe<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            origin: ["China"],
            description: "硬度7～7.5 鉄とアルミニウムを主成分とするガーネット。",
            symmetry: "等軸晶系",
            crystal_structure: "柘榴石グループ",
            habit: ["柱状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "09.A門 ネソ珪酸塩鉱物"
        },
        {
            id: 3,
            name_jp: "アマゾナイト",
            name_en: "AMAZONITE",
            chemical_formula_html: "K(AlSi<sub>3</sub>O<sub>8</sub>)",
            origin: ["Russia"],
            description: "微量な鉛を含有するため青緑色を呈す。微斜長石に属す。",
            symmetry: "三斜晶系",
            crystal_structure: "長石グループ",
            habit: ["板状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.F門 テクト珪酸塩鉱物"
        },
        {
            id: 4,
            name_jp: "紫水晶",
            name_en: "AMETHYST",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Brazil"],
            description: "有色の水晶。紫色は天然の放射能と微量の鉄イオンによる。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 5,
            name_jp: "燐灰石",
            name_en: "APATITE",
            chemical_formula_html: "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F",
            origin: ["Mexico"],
            description: "硬度5 燐酸カルシウムに弗素が加わったもの。",
            symmetry: "六方晶系",
            crystal_structure: "燐灰石グループ",
            habit: ["柱状"],
            occurrence: ["造岩鉱物", "接触鉱物"],
            strunz_classification: "08族 燐酸塩鉱物"
        },
        {
            id: 6,
            name_jp: "魚眼石",
            name_en: "APOPHYLLITE",
            chemical_formula_html: "KCa<sub>4</sub>(Si<sub>4</sub>O<sub>10</sub>)<sub>2</sub>(F,OH)·8H<sub>2</sub>O",
            origin: ["India"],
            description: "正方錐形または柱状の結晶。一方向に完全な劈開(ヘキカイ)を持つ。",
            symmetry: "正方晶系",
            crystal_structure: "層状珪酸塩グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["接触鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 7,
            name_jp: "アベンチュリン",
            name_en: "AVENTURINE",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Brazil"],
            description: "緑色の雲母を含むため緑色となった石英。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 8,
            name_jp: "藍銅鉱",
            name_en: "AZURITE",
            chemical_formula_html: "Cu<sub>3</sub>(OH)<sub>2</sub>(CO<sub>3</sub>)<sub>2</sub>",
            origin: ["Morocco"],
            description: "硬度3.5～4 銅鉱床酸化帯に孔雀石や褐鉄鉱に伴って産出する。",
            symmetry: "単斜晶系",
            crystal_structure: "炭酸塩グループ",
            habit: ["板状", "柱状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "05族 炭酸塩鉱物"
        },
        {
            id: 9,
            name_jp: "縞状鉄鉱",
            name_en: "BANDED IRON",
            chemical_formula_html: "FeCO<sub>3</sub>/HFeO<sub>2</sub>/Fe<sub>2</sub>O<sub>3</sub>/Fe<sub>3</sub>O<sub>4</sub>",
            origin: ["Australia"],
            description: "先カンブリア時代(約25億年前)、海水中の鉄分とシアノバクテリア(ラン藻類)が作り出した酸素が結びついて形成された鉄鉱石。",
            symmetry: "非晶質",
            crystal_structure: "酸化鉱物グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "04族 酸化鉱物"
        },
        {
            id: 10,
            name_jp: "黒雲母",
            name_en: "BIOTITE",
            chemical_formula_html: "K(Fe,Mg)<sub>3</sub>(AlSi<sub>3</sub>O<sub>10</sub>)(OH,F)<sub>2</sub>",
            origin: ["Canada"],
            description: "硬度2～3 オブラートのように薄く劈開(ヘキカイ)し10ミクロまで剥がせる。",
            symmetry: "単斜晶系",
            crystal_structure: "雲母グループ",
            habit: ["板状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 11,
            name_jp: "斑銅鉱",
            name_en: "BORNITE",
            chemical_formula_html: "Cu<sub>5</sub>FeS<sub>4</sub>",
            origin: ["Mexico"],
            description: "高品位の銅鉱で銅、鉄、硫黄からなる鉱物。",
            symmetry: "等軸晶系",
            crystal_structure: "硫化鉱物グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "02族 硫化鉱物"
        },
        {
            id: 12,
            name_jp: "方解石",
            name_en: "CALCITE(Iceland Spar)",
            chemical_formula_html: "CaCO<sub>3</sub>",
            origin: ["Mexico"],
            description: "硬度3 炭酸カルシウムの鉱物で最もポピュラーな脈石鉱物。複屈折によって石を透して物を見ると二重に見える。極めて完全な劈開(ヘキカイ)によりマッチ箱をつぶしたような形に割れる。",
            symmetry: "六方晶系",
            crystal_structure: "炭酸塩グループ",
            habit: ["柱状", "板状"],
            occurrence: ["造岩鉱物", "鉱石鉱物"],
            strunz_classification: "05族 炭酸塩鉱物"
        },
        {
            id: 17,
            name_jp: "黄銅鉱",
            name_en: "CHALCOPYRITE",
            chemical_formula_html: "CuFeS<sub>2</sub>",
            origin: ["Mexico"],
            description: "代表的な銅鉱石。黄鉄鉱についでポピュラーな硫化鉱物。",
            symmetry: "正方晶系",
            crystal_structure: "硫化鉱物グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "02族 硫化鉱物"
        },
        {
            id: 18,
            name_jp: "珪孔雀石",
            name_en: "CHRYSOCOLLA",
            chemical_formula_html: "(Cu,Al)<sub>2</sub>H<sub>2</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>·nH<sub>2</sub>O",
            origin: ["Arizona, U.S.A."],
            description: "硬度2.5 銅鉱床に産出。皮殻状、葡萄状をなす。",
            symmetry: "非晶質",
            crystal_structure: "珪酸塩グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 19,
            name_jp: "自然銅",
            name_en: "COPPER",
            chemical_formula_html: "Cu",
            origin: ["Michigan, U.S.A."],
            description: "硬度2.5～3 熱及び電気の良導体で展性、延性に富む。",
            symmetry: "等軸晶系",
            crystal_structure: "元素鉱物グループ",
            habit: ["塊状", "樹枝状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "01族 元素鉱物"
        },
        {
            id: 20,
            name_jp: "鋼玉(コランダム)",
            name_en: "CORUNDUM",
            chemical_formula_html: "Al<sub>2</sub>O<sub>3</sub>",
            origin: ["South Africa"],
            description: "硬度9 酸化アルミニウムの鉱物。",
            symmetry: "六方晶系",
            crystal_structure: "酸化鉱物グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["変成鉱物", "鉱石鉱物"],
            strunz_classification: "04族 酸化鉱物"
        },
        {
            id: 21,
            name_jp: "氷晶石",
            name_en: "CRYOLITE",
            chemical_formula_html: "Na<sub>3</sub>AlF<sub>6</sub>",
            origin: ["Greenland"],
            description: "「融けない氷」といわれ、白色塊状でグリーンランドに産する。",
            symmetry: "単斜晶系",
            crystal_structure: "ハロゲン化鉱物グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "03族 ハロゲン化鉱物"
        },
        {
            id: 22,
            name_jp: "苦灰石",
            name_en: "DOLOMITE",
            chemical_formula_html: "CaMg(CO<sub>3</sub>)<sub>2</sub>",
            origin: ["Morocco"],
            description: "和名は苦しそうな名前であるが苦はマグネシウム、灰は石灰を意味する。",
            symmetry: "六方晶系",
            crystal_structure: "炭酸塩グループ",
            habit: ["板状", "柱状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "05族 炭酸塩鉱物"
        },
        {
            id: 23,
            name_jp: "長石",
            name_en: "FELDSPAR",
            chemical_formula_html: "K(AlSi<sub>3</sub>O<sub>8</sub>)",
            origin: ["India"],
            description: "長石グループは地殻の重量の50％を占める鉱物。",
            symmetry: "三斜晶系",
            crystal_structure: "長石グループ",
            habit: ["板状", "柱状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.F門 テクト珪酸塩鉱物"
        },
        {
            id: 24,
            name_jp: "蛍石",
            name_en: "FLUORITE",
            chemical_formula_html: "CaF<sub>2</sub>",
            origin: ["Mexico", "China"],
            description: "熱すると蛍光を放つ。又、紫外線で蛍光を発するものもある。結晶は6面体、8面体、斜方12面体。",
            symmetry: "等軸晶系",
            crystal_structure: "ハロゲン化鉱物グループ",
            habit: ["立方体", "八面体"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "03族 ハロゲン化鉱物"
        },
        {
            id: 26,
            name_jp: "クロム白雲母",
            name_en: "FUCHSITE",
            chemical_formula_html: "KAl<sub>2</sub>(AlSi<sub>3</sub>O<sub>10</sub>)(OH,F)<sub>2</sub>",
            origin: ["Brazil"],
            description: "硬度2.5～3 クロムの酸化物の混入で緑色になった白雲母。",
            symmetry: "単斜晶系",
            crystal_structure: "雲母グループ",
            habit: ["板状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 27,
            name_jp: "方鉛鉱",
            name_en: "GALENA",
            chemical_formula_html: "PbS",
            origin: ["Missouri, U.S.A."],
            description: "硬度2.5～3 鉛の鉱石。",
            symmetry: "等軸晶系",
            crystal_structure: "硫化鉱物グループ",
            habit: ["立方体"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "02族 硫化鉱物"
        },
        {
            id: 28,
            name_jp: "石墨",
            name_en: "GRAPHITE",
            chemical_formula_html: "C",
            origin: ["China"],
            description: "硬度1 電導性にすぐれ電極や鉛筆の芯などに利用される。",
            symmetry: "六方晶系",
            crystal_structure: "元素鉱物グループ",
            habit: ["板状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "01族 元素鉱物"
        },
        {
            id: 29,
            name_jp: "灰ばん柘榴石",
            name_en: "GROSSULAR",
            chemical_formula_html: "Ca<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            origin: ["Mexico"],
            description: "アルミニウムを含む淡緑色のざくろ石。",
            symmetry: "等軸晶系",
            crystal_structure: "柘榴石グループ",
            habit: ["柱状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "09.A門 ネソ珪酸塩鉱物"
        },
        {
            id: 30,
            name_jp: "迪石膏(ジプサム)",
            name_en: "GYPSUM",
            chemical_formula_html: "CaSO<sub>4</sub>·2H<sub>2</sub>O",
            origin: ["Utah, U.S.A."],
            description: "硬度2 最も普通に産出する硫酸塩鉱物。石膏のうち透明度の高い柱状の結晶を成すものを迪石膏という。",
            symmetry: "単斜晶系",
            crystal_structure: "硫酸塩グループ",
            habit: ["柱状", "板状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "07族 硫酸塩鉱物"
        },
        {
            id: 31,
            name_jp: "ハックマン石",
            name_en: "HACKMANITE",
            chemical_formula_html: "Na<sub>8</sub>Al<sub>6</sub>Si<sub>6</sub>O<sub>24</sub>(Cl,S)<sub>2</sub>",
            origin: ["Canada"],
            description: "方ソーダ石に不純物として硫黄を含む鉱物。紫外線により蛍光を発する。",
            symmetry: "等軸晶系",
            crystal_structure: "長石グループ",
            habit: ["塊状"],
            occurrence: ["接触鉱物"],
            strunz_classification: "09.F門 テクト珪酸塩鉱物"
        },
        {
            id: 32,
            name_jp: "碧玉(へきぎょく)",
            name_en: "JASPER",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["South Africa"],
            description: "不純な玉髄質の塊状石英で酸化鉄により赤褐色を呈する。",
            symmetry: "非晶質",
            crystal_structure: "石英グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 33,
            name_jp: "藍晶石",
            name_en: "KYANITE",
            chemical_formula_html: "Al<sub>2</sub>SiO<sub>5</sub>",
            origin: ["Brazil"],
            description: "硬度4.5～7と方向によって硬度が異なる。",
            symmetry: "三斜晶系",
            crystal_structure: "珪酸塩グループ",
            habit: ["板状", "柱状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 34,
            name_jp: "青金石",
            name_en: "LAPIS-LAZULI",
            chemical_formula_html: "(Na,Ca)<sub>7～8</sub>(Al,Si)<sub>12</sub>(O,S)<sub>24</sub>[(SO<sub>4</sub>),Cl<sub>2</sub>,(OH)<sub>2</sub>]",
            origin: ["Afganistan"],
            description: "硬度5～5.5 群青色の顔料にもなる珪酸塩鉱物。",
            symmetry: "等軸晶系",
            crystal_structure: "長石グループ",
            habit: ["塊状"],
            occurrence: ["変成鉱物"],
            strunz_classification: "09.F門 テクト珪酸塩鉱物"
        },
        {
            id: 35,
            name_jp: "リチア雲母",
            name_en: "LEPIDOLITE",
            chemical_formula_html: "K(Li,Al)<sub>3</sub>(AlSi<sub>3</sub>O<sub>10</sub>)(OH,F)<sub>2</sub>",
            origin: ["Brazil"],
            description: "硬度2.5～4 リチウムの原料。",
            symmetry: "単斜晶系",
            crystal_structure: "雲母グループ",
            habit: ["板状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 36,
            name_jp: "磁鉄鉱",
            name_en: "LODESTONE",
            chemical_formula_html: "FeFe<sub>2</sub>O<sub>4</sub>",
            origin: ["Utah, U.S.A."],
            description: "硬度5.5～6.5 強い磁性があり鉄を引きつける天然磁石。",
            symmetry: "等軸晶系",
            crystal_structure: "スピネルグループ",
            habit: ["塊状", "八面体"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "04族 酸化鉱物"
        },
        {
            id: 37,
            name_jp: "孔雀石",
            name_en: "MALACHITE",
            chemical_formula_html: "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
            origin: ["D.R Congo"],
            description: "硬度3.5～4 銅の鉱床にできる鉱物。",
            symmetry: "単斜晶系",
            crystal_structure: "炭酸塩グループ",
            habit: ["針状", "塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "05族 炭酸塩鉱物"
        },
        {
            id: 38,
            name_jp: "白雲母",
            name_en: "MUSCOVITE",
            chemical_formula_html: "KAl<sub>2</sub>(AlSi<sub>3</sub>O<sub>10</sub>)(OH,F)<sub>2</sub>",
            origin: ["Brazil"],
            description: "硬度2.5～3 薄くはがれ、すぐれた絶縁性があり熱も伝えない。",
            symmetry: "単斜晶系",
            crystal_structure: "雲母グループ",
            habit: ["板状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 39,
            name_jp: "黒曜石",
            name_en: "OBSIDIAN",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Hokkaido,Japan", "Arizona, U.S.A."],
            description: "貝殻状断口が特徴。珪酸質マグマが急冷してできたガラス質の結晶。",
            symmetry: "非晶質",
            crystal_structure: "珪酸塩グループ",
            habit: ["塊状"],
            occurrence: ["火成岩"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 41,
            name_jp: "かんらん石",
            name_en: "OLIVINE",
            chemical_formula_html: "(Mg,Fe)<sub>2</sub>SiO<sub>4</sub>",
            origin: ["Arizona, U.S.A."],
            description: "主成分は珪酸マグネシウム。高温の火山岩中に誕生する。",
            symmetry: "斜方晶系",
            crystal_structure: "珪酸塩グループ",
            habit: ["粒状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.A門 ネソ珪酸塩鉱物"
        },
        {
            id: 42,
            name_jp: "蛋白石",
            name_en: "OPAL",
            chemical_formula_html: "SiO<sub>2</sub>・nH<sub>2</sub>O",
            origin: ["Oregon, U.S.A.", "Mexico"],
            description: "硬度5～6.5 珪酸鉱物、非晶質でSiO2(二酸化珪素)に水が加わった鉱物。美しい遊色を示すものがあり宝石として珍重される。",
            symmetry: "非晶質",
            crystal_structure: "珪酸塩グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 44,
            name_jp: "砂金",
            name_en: "PLACER-GOLD",
            chemical_formula_html: "Au",
            origin: ["Australia"],
            description: "硬度2.5～3 金の鉱床が風化し川へと流れ、砂と一緒に堆積した自然金。",
            symmetry: "等軸晶系",
            crystal_structure: "元素鉱物グループ",
            habit: ["粒状", "塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "01族 元素鉱物"
        },




        {
            id: 45,
            name_jp: "黄鉄鉱",
            name_en: "PYRITE",
            chemical_formula_html: "FeS<sub>2</sub>",
            origin: ["Peru"],
            description: "硬度6～6.5 最も普通に産出する硫化鉱物。",
            symmetry: "等軸晶系",
            crystal_structure: "硫化鉱物グループ",
            habit: ["立方体", "八面体"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "02族 硫化鉱物"
        },
        {
            id: 46,
            name_jp: "水晶",
            name_en: "QUARTZ-CRYSTAL",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Arkansas, U.S.A."],
            description: "一般的な六角柱状の石英の結晶。柱面は常に60度で交わる。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["造岩鉱物", "鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 47,
            name_jp: "石英",
            name_en: "QUARTZ",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Brazil"],
            description: "最もポピュラーな鉱物でガラスの原料ともなる。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["柱状", "塊状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 48,
            name_jp: "紅石英",
            name_en: "ROSE-QUARTZ",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["Brazil"],
            description: "ローズクォーツの名で親しまれるピンク色の石英。",
            symmetry: "六方晶系",
            crystal_structure: "石英グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 49,
            name_jp: "迪石膏(砂漠のバラ)",
            name_en: "SELENITE-ROSE",
            chemical_formula_html: "CaSO<sub>4</sub>·2H<sub>2</sub>O",
            origin: ["Mexico"],
            description: "硬度2 最も普通に産出する硫酸塩鉱物。石膏のうち透明度の高い柱状の結晶を成すものを迪石膏という。",
            symmetry: "単斜晶系",
            crystal_structure: "硫酸塩グループ",
            habit: ["板状", "花弁状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "07族 硫酸塩鉱物"
        },
        {
            id: 50,
            name_jp: "方ソーダ石",
            name_en: "SODALITE",
            chemical_formula_html: "Na<sub>4</sub>(SiAl<sub>3</sub>)O<sub>12</sub>Cl",
            origin: ["Namibia"],
            description: "硬度5.5～6 青金石(ラピスラズリ)を構成する鉱物のひとつ。",
            symmetry: "等軸晶系",
            crystal_structure: "長石グループ",
            habit: ["塊状"],
            occurrence: ["造岩鉱物"],
            strunz_classification: "09.F門 テクト珪酸塩鉱物"
        },
        {
            id: 51,
            name_jp: "輝安鉱",
            name_en: "STIBNITE",
            chemical_formula_html: "Sb<sub>2</sub>S<sub>3</sub>",
            origin: ["China"],
            description: "重要なアンチモニー鉱石。硬度2とやわらかい。",
            symmetry: "斜方晶系",
            crystal_structure: "硫化鉱物グループ",
            habit: ["針状", "柱状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "02族 硫化鉱物"
        },
        {
            id: 52,
            name_jp: "硫黄",
            name_en: "SULFUR",
            chemical_formula_html: "S",
            origin: ["Indonesia"],
            description: "硬度1.5～2.5 斜方結晶の集合体で燃やすと硫化水素を出す。",
            symmetry: "斜方晶系",
            crystal_structure: "元素鉱物グループ",
            habit: ["塊状", "粒状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "01族 元素鉱物"
        },
        {
            id: 53,
            name_jp: "滑石",
            name_en: "TALC",
            chemical_formula_html: "Mg<sub>3</sub>(SiO<sub>10</sub>)(OH)<sub>2</sub>",
            origin: ["Australia"],
            description: "モース硬度1 印材、薬品、製紙などで幅広く利用されている。",
            symmetry: "単斜晶系",
            crystal_structure: "層状珪酸塩グループ",
            habit: ["板状", "塊状"],
            occurrence: ["変成鉱物", "粘土鉱物"],
            strunz_classification: "09.E門 フィロ珪酸塩鉱物"
        },
        {
            id: 54,
            name_jp: "虎目石",
            name_en: "TIGER-EYE",
            chemical_formula_html: "SiO<sub>2</sub>",
            origin: ["South Africa"],
            description: "石綿と石英から成る。石に含まれる鉄分によって縞模様がつくられる。",
            symmetry: "非晶質",
            crystal_structure: "石英グループ",
            habit: ["繊維状", "塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 55,
            name_jp: "黄玉",
            name_en: "TOPAZ",
            chemical_formula_html: "Al<sub>2</sub>SiO<sub>4</sub>(F,OH)<sub>2</sub>",
            origin: ["Utah, U.S.A."],
            description: "硬度8 日本でも産出する宝石鉱物。",
            symmetry: "斜方晶系",
            crystal_structure: "珪酸塩グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09族 珪酸塩鉱物"
        },
        {
            id: 56,
            name_jp: "電気石",
            name_en: "TOURMALINE",
            chemical_formula_html: "NaFe<sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)Si<sub>6</sub>O<sub>18</sub>(OH)<sub>4</sub>",
            origin: ["Brazil"],
            description: "硬度7～7.5 火成岩、変成岩中に産出する。",
            symmetry: "六方晶系",
            crystal_structure: "環状珪酸塩グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["造岩鉱物", "接触鉱物"],
            strunz_classification: "09.C門 シクロ珪酸塩鉱物"
        },
        {
            id: 57,
            name_jp: "トルコ石",
            name_en: "TURQUOISE",
            chemical_formula_html: "CuAl<sub>6</sub>(PO<sub>4</sub>)<sub>4</sub>(OH)<sub>8</sub>·4H<sub>2</sub>O",
            origin: ["Nevada, U.S.A."],
            description: "硬度5～6 結晶することはまれで塊状ないし皮膜上に産出する。",
            symmetry: "三斜晶系",
            crystal_structure: "燐酸塩グループ",
            habit: ["塊状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "08族 燐酸塩鉱物"
        },
        {
            id: 58,
            name_jp: "曹灰硼石(テレビ石)",
            name_en: "ULEXITE",
            chemical_formula_html: "NaCaB<sub>5</sub>O<sub>9</sub>·8H<sub>2</sub>O",
            origin: ["California, U.S.A."],
            description: "硬度2.5 純白で絹糸光沢、繊維状結晶の集合体。グラスファイバーと同じ効果で下のものが浮き上がって見える。",
            symmetry: "三斜晶系",
            crystal_structure: "硼酸塩鉱物グループ",
            habit: ["繊維状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "06族 硼酸塩鉱物"
        },
        {
            id: 59,
            name_jp: "バナジン鉛鉱",
            name_en: "VANADINITE",
            chemical_formula_html: "Pb<sub>5</sub>(VO<sub>4</sub>)<sub>3</sub>Cl",
            origin: ["Morocco"],
            description: "元素バナジウムを主成分とする鉱物。6角柱状に結晶する。",
            symmetry: "六方晶系",
            crystal_structure: "燐灰石グループ",
            habit: ["柱状", "錐状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "08族 バナジン酸塩鉱物"
        },
        {
            id: 60,
            name_jp: "珪酸亜鉛鉱",
            name_en: "WILLEMITE",
            chemical_formula_html: "Zn<sub>2</sub>SiO<sub>4</sub>",
            origin: ["New Jersey, U.S.A."],
            description: "紫外線により鮮やかな輝緑色の蛍光を発する。",
            symmetry: "六方晶系",
            crystal_structure: "珪酸塩グループ",
            habit: ["柱状", "粒状"],
            occurrence: ["鉱石鉱物"],
            strunz_classification: "09.A門 ネソ珪酸塩鉱物"
        },
        {
            "id": 61,
            "name_jp": "アクロアイト",
            "name_en": "ACHROITE",
            "chemical_formula_html": "NaAlSiO<sub>4</sub>",
            "origin": [],
            "description": "無色または淡色のトルマリンの一種。",
            "symmetry": "六方晶系",
            "crystal_structure": "トルマリン・グループ",
            "habit": ["柱状", "針状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.CK.05",
            "images": ["images/minerals/achroite.png"]
        },
        {
            "id": 62,
            "name_jp": "緑閃石",
            "name_en": "ACTINOLITE",
            "chemical_formula_html": "Ca<sub>2</sub>(Mg,Fe)<sub>5</sub>Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
            "origin": [],
            "description": "角閃石グループに属する鉱物で、緑色を呈します。変成岩中に広く見られます。",
            "symmetry": "単斜晶系",
            "crystal_structure": "角閃石グループ",
            "habit": ["柱状", "針状", "繊維状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.DE.05"
        },
        {
            "id": null,
            "name_jp": "アダム石",
            "name_en": "ADAMITE",
            "chemical_formula_html": "Zn<sub>2</sub>AsO<sub>4</sub>(OH)",
            "origin": [],
            "description": "亜鉛と砒素を含む水酸化砒酸塩鉱物で、通常は黄色から緑色を呈します。二次鉱物として産出します。",
            "symmetry": "斜方晶系",
            "crystal_structure": "アダム石グループ",
            "habit": ["錐状", "扇状", "塊状", "球状"],
            "occurrence": ["二次鉱物"],
            "strunz_classification": "08.BB.20"
        },
        {
            "id": null,
            "name_jp": "エジリン輝石",
            "name_en": "AEGIRINE",
            "chemical_formula_html": "NaFe<sup>3+</sup>Si<sub>2</sub>O<sub>6</sub>",
            "origin": [],
            "description": "ナトリウムと鉄を含む単斜輝石の一種で、通常は緑色から黒色を呈します。火成岩やアルカリ岩中に見られます。",
            "symmetry": "単斜晶系",
            "crystal_structure": "輝石グループ",
            "habit": ["柱状", "針状"],
            "occurrence": ["火成岩"],
            "strunz_classification": "09.DA.25"
        },
        {
            "id": null,
            "name_jp": "アホーアイト",
            "name_en": "AJOITE",
            "chemical_formula_html": "(K,Na)Cu<sub>7</sub>AlSi<sub>9</sub>O<sub>24</sub>(OH)<sub>6</sub>·3H<sub>2</sub>O",
            "origin": [],
            "description": "水和したアルカリ銅アルミニウム珪酸塩鉱物で、鮮やかな青緑色を呈します。稀産鉱物です。",
            "symmetry": "六方晶系",
            "crystal_structure": "単鎖珪酸塩鉱物",
            "habit": ["繊維状", "放射状"],
            "occurrence": ["二次鉱物"],
            "strunz_classification": "09.DH.30"
        },
        {
            "id": 1,
            "name_jp": "曹長石",
            "name_en": "ALBITE",
            "chemical_formula_html": "NaAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": [
                "Japan",
                "USA",
                "Canada",
                "Norway",
                "Italy",
                "Switzerland"
            ],
            "description": "ナトリウムを主成分とする長石グループの鉱物。白色または灰色のことが多いが、無色、青色、緑色などを呈することもある。造岩鉱物として広く分布する。",
            "symmetry": "三斜晶系",
            "crystal_structure": "長石グループ",
            "habit": [
                "板状",
                "柱状",
                "塊状"
            ],
            "occurrence": [
                "造岩鉱物",
                "火成岩",
                "変成鉱物"
            ],
            "strunz_classification": "09.FA.35"
        },
        {
            "id": 2,
            "name_jp": "アレキサンドライト",
            "name_en": "ALEXANDRITE",
            "chemical_formula_html": "BeAl<sub>2</sub>O<sub>4</sub>",
            "origin": [
                "Russia",
                "Brazil",
                "Sri Lanka",
                "India",
                "East Africa"
            ],
            "description": "変色効果（アレキサンドライト効果）を示すことで有名なクリソベリルの一種。昼光下では緑色、白熱灯下では赤紫色に変化する。宝石として珍重される。",
            "symmetry": "斜方晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": [
                "柱状",
                "板状",
                "双晶"
            ],
            "occurrence": [
                "変成鉱物",
                "ペグマタイト"
            ],
            "strunz_classification": "04.BA.05"
        },
        {
            "id": 3,
            "name_jp": "鉄礬柘榴石",
            "name_en": "ALMANDINE",
            "chemical_formula_html": "Fe<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": [
                "India",
                "Sri Lanka",
                "USA",
                "Czech Republic",
                "Madagascar",
                "Brazil",
                "Austria",
                "Finland",
                "Japan"
            ],
            "description": "鉄とアルミニウムを主成分とするガーネット（柘榴石）グループの鉱物。深赤色から褐色の色合いを持つ。変成岩中に広く見られる。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": [
                "菱形十二面体",
                "正二十四面体",
                "塊状"
            ],
            "occurrence": [
                "変成鉱物"
            ],
            "strunz_classification": "09.AD.10"
        },
        {
            "id": 4,
            "name_jp": "アマゾナイト",
            "name_en": "AMAZONITE",
            "chemical_formula_html": "KAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": [
                "Brazil",
                "USA",
                "Russia",
                "Madagascar",
                "Canada",
                "Norway"
            ],
            "description": "緑色から青緑色の微斜長石（アルバイトのカリウム置換体）。美しい緑色が特徴で、装飾品や研磨材として利用される。",
            "symmetry": "三斜晶系",
            "crystal_structure": "長石グループ",
            "habit": [
                "塊状",
                "柱状",
                "板状",
                "正長石との連晶"
            ],
            "occurrence": [
                "ペグマタイト",
                "熱水鉱脈"
            ],
            "strunz_classification": "09.FA.30"
        },
        {
            "id": 5,
            "name_jp": "紫水晶",
            "name_en": "AMETHYST",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": [
                "Brazil",
                "Uruguay",
                "Zambia",
                "Canada",
                "USA",
                "South Korea",
                "Japan"
            ],
            "description": "紫色を呈する水晶（石英）の一種。微量の鉄イオンが放射線照射を受けることで発色すると考えられている。古くから装飾品やパワーストーンとして珍重されてきた。",
            "symmetry": "六方晶系",
            "crystal_structure": "石英グループ",
            "habit": [
                "柱状",
                "錐状",
                "ジオード"
            ],
            "occurrence": [
                "熱水鉱脈",
                "晶洞"
            ],
            "strunz_classification": "04.DA.05"
        },
        {
            "id": 1,
            "name_jp": "アメトリン",
            "name_en": "AMETRINE",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": [
                "Bolivia",
                "Brazil"
            ],
            "description": "アメシストとシトリンが一つの結晶になったバイカラーの水晶です。紫色の部分がアメシスト、黄色の部分がシトリンに相当します。",
            "symmetry": "六方晶系",
            "crystal_structure": "石英グループ",
            "habit": [
                "塊状",
                "柱状"
            ],
            "occurrence": [
                "熱水鉱脈",
                "ペグマタイト"
            ],
            "strunz_classification": "09.DA.03"
        },
        {
            "id": 2,
            "name_jp": "角閃石",
            "name_en": "AMPHIBOLE",
            "chemical_formula_html": "A<sub>0-1</sub>B<sub>2</sub>C<sub>5</sub>T<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
            "origin": [
                "Worldwide"
            ],
            "description": "角閃石は、ケイ酸塩鉱物の一群で、様々な化学組成と結晶構造を持ちます。主に火成岩や変成岩中に見られ、造岩鉱物として重要です。",
            "symmetry": "単斜晶系",
            "crystal_structure": "角閃石グループ",
            "habit": [
                "柱状",
                "針状",
                "繊維状",
                "塊状"
            ],
            "occurrence": [
                "火成岩",
                "変成鉱物",
                "造岩鉱物"
            ],
            "strunz_classification": "09.DE"
        },
        {
            "id": 3,
            "name_jp": "菱沸石",
            "name_en": "ANALCITE",
            "chemical_formula_html": "NaAlSi<sub>2</sub>O<sub>6</sub>·H<sub>2</sub>O",
            "origin": [
                "Worldwide"
            ],
            "description": "菱沸石は、沸石グループに属する含水アルミノケイ酸塩鉱物です。等軸晶系の結晶で、透明または半透明の無色、白色、灰色などを呈します。",
            "symmetry": "等軸晶系",
            "crystal_structure": "沸石グループ",
            "habit": [
                "等軸晶系",
                "塊状",
                "粒状"
            ],
            "occurrence": [
                "火成岩",
                "堆積岩",
                "熱水鉱脈"
            ],
            "strunz_classification": "09.GA.05"
        },
        {
            "id": 4,
            "name_jp": "鋭錐石",
            "name_en": "ANATASE",
            "chemical_formula_html": "TiO<sub>2</sub>",
            "origin": [
                "Worldwide"
            ],
            "description": "鋭錐石は、二酸化チタン（TiO<sub>2</sub>）の同質異像の一つで、正方晶系の結晶を形成します。一般的に小さな鋭い錐状の結晶で見られます。",
            "symmetry": "正方晶系",
            "crystal_structure": "ルチルグループ",
            "habit": [
                "錐状",
                "板状",
                "八面体"
            ],
            "occurrence": [
                "熱水鉱脈",
                "変成岩",
                "堆積岩"
            ],
            "strunz_classification": "04.DD.05"
        },
        {
            "id": 5,
            "name_jp": "灰鉄柘榴石",
            "name_en": "ANDRADITE",
            "chemical_formula_html": "Ca<sub>3</sub>Fe<sup>3+</sup><sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": [
                "Worldwide"
            ],
            "description": "灰鉄柘榴石は、ガーネットグループに属するケイ酸塩鉱物です。カルシウムと鉄を主成分とし、通常は等軸晶系の結晶で産出します。色は黄色、緑色、褐色、黒色など様々です。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": [
                "等軸晶系",
                "十二面体",
                "二十四面体",
                "塊状"
            ],
            "occurrence": [
                "スカルン",
                "接触変成岩",
                "蛇紋岩"
            ],
            "strunz_classification": "09.AD.20"
        },
        {
            "id": 1,
            "name_jp": "硫酸鉛鉱",
            "name_en": "ANGLESITE",
            "chemical_formula_html": "PbSO<sub>4</sub>",
            "origin": [],
            "description": "鉛の二次鉱物として、方鉛鉱などの硫化鉛鉱物の酸化帯に生成する。無色、白色、灰色、帯緑灰色などを呈し、ダイヤモンド光沢または樹脂光沢を持つ。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["柱状", "板状", "塊状", "粒状"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "07.AD.25"
        },
        {
            "id": 2,
            "name_jp": "硬石膏",
            "name_en": "ANHYDRITE",
            "chemical_formula_html": "CaSO<sub>4</sub>",
            "origin": [],
            "description": "石膏が脱水することで生成する。無色、白色、灰色、青色などを呈し、ガラス光沢または真珠光沢を持つ。水と反応して石膏に戻る。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["柱状", "板状", "塊状", "粒状", "繊維状"],
            "occurrence": ["蒸発岩", "堆積岩", "熱水鉱脈"],
            "strunz_classification": "07.AD.30"
        },
        {
            "id": 3,
            "name_jp": "燐灰石",
            "name_en": "APATITE",
            "chemical_formula_html": "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>(F,Cl,OH)",
            "origin": [],
            "description": "様々な色合いを持つリン酸塩鉱物グループの総称。フッ素燐灰石、塩素燐灰石、水酸燐灰石などを含む。歯や骨の主成分。",
            "symmetry": "六方晶系",
            "crystal_structure": "燐灰石グループ",
            "habit": ["柱状", "六角柱状", "塊状", "粒状"],
            "occurrence": ["火成岩", "変成岩", "堆積岩", "熱水鉱脈", "生物起源"],
            "strunz_classification": "08.BN.05"
        },
        {
            "id": 4,
            "name_jp": "魚眼石",
            "name_en": "APOPHYLLITE",
            "chemical_formula_html": "KCa<sub>4</sub>Si<sub>8</sub>O<sub>20</sub>(F,OH)·8H<sub>2</sub>O",
            "origin": [],
            "description": "主に玄武岩の晶洞中に産する含水ケイ酸塩鉱物。無色、白色、緑色、ピンク色などを呈し、真珠光沢を持つ。加熱すると魚の眼のような光沢を示すことからこの名がついた。",
            "symmetry": "正方晶系",
            "crystal_structure": "アポフィライトグループ",
            "habit": ["錐状", "正方柱状", "板状", "塊状"],
            "occurrence": ["火成岩", "熱水鉱脈"],
            "strunz_classification": "09.EA.15"
        },
        {
            "id": 2,
            "name_jp": "アクアマリン",
            "name_en": "AQUAMARINE",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "origin": ["Brazil", "Madagascar", "Russia", "Pakistan", "USA"],
            "description": "アクアマリンは、緑柱石（ベリル）という鉱物の一種で、薄い青色から緑がかった青色の宝石です。名前はラテン語の「aqua marina」（海の水の意味）に由来します。六方柱状の結晶で産出することが多く、透明度が高く美しい光沢を持つものが宝飾品として珍重されます。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリルグループ",
            "habit": ["柱状", "六角柱状"],
            "occurrence": ["ペグマタイト", "花崗岩"],
            "strunz_classification": "09.CJ.05"
        },
        {
            "id": null,
            "name_jp": "霰石",
            "name_en": "ARAGONITE",
            "chemical_formula_html": "CaCO<sub>3</sub>",
            "origin": [],
            "description": "",
            "symmetry": "斜方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": [],
            "occurrence": [],
            "strunz_classification": "05族 炭酸塩鉱物"
        },
        {
            "id": null,
            "name_jp": "硫砒鉄鉱",
            "name_en": "ARSENOPYRITE",
            "chemical_formula_html": "FeAsS",
            "origin": [],
            "description": "",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": [],
            "occurrence": [],
            "strunz_classification": "02族 硫化鉱物"
        },
        {
            "id": null,
            "name_jp": "アウゲライト",
            "name_en": "AUGELITE",
            "chemical_formula_html": "Al<sub>2</sub>(PO<sub>4</sub>)(OH)<sub>3</sub>",
            "origin": [],
            "description": "",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩グループ",
            "habit": [],
            "occurrence": [],
            "strunz_classification": "08族 リン酸塩鉱物"
        },
        {
            "id": null,
            "name_jp": "藍銅鉱",
            "name_en": "AZURITE",
            "chemical_formula_html": "Cu<sub>3</sub>(CO<sub>3</sub>)<sub>2</sub>(OH)<sub>2</sub>",
            "origin": [],
            "description": "",
            "symmetry": "単斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": [],
            "occurrence": [],
            "strunz_classification": "05族 炭酸塩鉱物"
        },
        {
            "id": 1,
            "name_jp": "重晶石",
            "name_en": "BARYTE",
            "chemical_formula_html": "BaSO<sub>4</sub>",
            "origin": ["Japan", "USA", "Germany"],
            "description": "硫酸バリウムを主成分とする鉱物。比重が大きく、白色または淡色を呈する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["板状", "柱状", "塊状"],
            "occurrence": ["鉱脈", "堆積岩", "温泉沈殿物"],
            "strunz_classification": "07.A門 硫酸塩、クロム酸塩、モリブデン酸塩"
        },
        {
            "id": 2,
            "name_jp": "緑柱石",
            "name_en": "BERYL",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "origin": ["Japan", "Brazil", "Colombia"],
            "description": "ベリリウムとアルミニウムの珪酸塩鉱物。エメラルドやアクアマリンなどの宝石を含む。",
            "symmetry": "六方晶系",
            "crystal_structure": "珪酸塩鉱物",
            "habit": ["柱状", "六角柱状"],
            "occurrence": ["ペグマタイト", "花崗岩", "変成岩"],
            "strunz_classification": "09族 珪酸塩鉱物"
        },
        {
            "id": 3,
            "name_jp": "ベニト石",
            "name_en": "BENITOITE",
            "chemical_formula_html": "BaTiSi<sub>3</sub>O<sub>9</sub>",
            "origin": ["USA"],
            "description": "バリウムとチタンの環状珪酸塩鉱物。青色の美しい結晶で知られる。",
            "symmetry": "六方晶系",
            "crystal_structure": "珪酸塩鉱物（環状珪酸塩）",
            "habit": ["錐状", "板状"],
            "occurrence": ["変成岩中の空隙"],
            "strunz_classification": "09.CA門 環状珪酸塩鉱物"
        },
        {
            "id": 1,
            "name_jp": "ビューダン鉱",
            "name_en": "BEUDANTITE",
            "chemical_formula_html": "PbFe<sup>3+</sup><sub>3</sub>(AsO<sub>4</sub>)(SO<sub>4</sub>)(OH)<sub>6</sub>",
            "origin": ["Germany", "USA", "France", "England", "Australia"],
            "description": "鉛と鉄を含む硫酸塩砒酸塩鉱物。黄褐色から褐色を呈し、塊状、粒状、または小さな菱面体状の結晶で産出する。",
            "symmetry": "三斜晶系",
            "crystal_structure": "明礬石グループ",
            "habit": ["塊状", "粒状", "菱面体"],
            "occurrence": ["鉱石鉱物", "二次鉱物"],
            "strunz_classification": "08.BL.05"
        },
        {
            "id": 2,
            "name_jp": "ビクスビー鉱",
            "name_en": "BIXBYITE",
            "chemical_formula_html": "(Mn<sup>3+</sup>,Fe<sup>3+</sup>)<sub>2</sub>O<sub>3</sub>",
            "origin": ["USA", "Brazil", "India", "Madagascar", "Norway"],
            "description": "マンガンと鉄を主成分とする酸化鉱物。黒色または暗赤色を呈し、立方体または八面体の結晶で産出する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "コランダムグループ",
            "habit": ["立方体", "八面体", "仮八面体"],
            "occurrence": ["火成岩", "変成岩", "ペグマタイト"],
            "strunz_classification": "04.CB.10"
        },
        {
            "id": 1,
            "name_jp": "ボレアイト",
            "name_en": "BOLEITE",
            "chemical_formula_html": "Pb<sub>26</sub>Cu<sub>24</sub>Ag<sub>9</sub>Cl<sub>62</sub>(OH)<sub>48</sub>",
            "origin": ["Mexico", "Chile", "England", "Germany"],
            "description": "青色の珍しい塩化鉱物。立方体の結晶や、それらが組み合わさった八面体状の結晶で産出する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "ハロゲン化鉱物グループ",
            "habit": ["立方体", "八面体"],
            "occurrence": ["鉱石鉱物", "二次鉱物"],
            "strunz_classification": "03.DD.20"
        },
        {
            "id": 2,
            "name_jp": "車骨鉱",
            "name_en": "BOURNONITE",
            "chemical_formula_html": "CuPbSbS<sub>3</sub>",
            "origin": ["Romania", "Germany", "England", "USA", "Japan"],
            "description": "灰色がかった黒色の硫化鉱物。短柱状、厚板状、または擬立方体の結晶で産出する。双晶もよく見られる。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["柱状", "板状", "擬立方体"],
            "occurrence": ["鉱石鉱物", "熱水鉱床"],
            "strunz_classification": "02.GB.15"
        },
        {
            "id": 3,
            "name_jp": "ブラジル石",
            "name_en": "BRAZILIANITE",
            "chemical_formula_html": "NaAl<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(OH)<sub>4</sub>",
            "origin": ["Brazil", "USA", "Canada"],
            "description": "黄色から緑色のリン酸塩鉱物。劈開が完全で、ガラス光沢を持つ。柱状またはプリズム状の結晶で産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩鉱物グループ",
            "habit": ["柱状", "プリズム状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "08.DC.05"
        },
        {
            "id": 4,
            "name_jp": "ブロシャン銅鉱",
            "name_en": "BROCHANTITE",
            "chemical_formula_html": "Cu<sub>4</sub>(SO<sub>4</sub>)(OH)<sub>6</sub>",
            "origin": ["Germany", "Slovakia", "USA", "Chile"],
            "description": "鮮やかな緑色の硫酸塩鉱物。針状、柱状、または板状の結晶で産出する。塊状や粉末状の集合体としても見られる。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["針状", "柱状", "板状", "塊状", "粉末状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "銅鉱床の酸化帯"],
            "strunz_classification": "07.BB.55"
        },
        {
            "id": 5,
            "name_jp": "板チタン石",
            "name_en": "BROOKITE",
            "chemical_formula_html": "TiO<sub>2</sub>",
            "origin": ["USA", "Switzerland", "Wales", "Brazil"],
            "description": "褐色、赤褐色、または黒色の酸化チタン鉱物。鋭い稜を持つ板状または短柱状の結晶で産出する。ルチルやアナテースの同質異像。",
            "symmetry": "斜方晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["板状", "短柱状"],
            "occurrence": ["変成岩", "堆積岩", "熱水鉱脈"],
            "strunz_classification": "04.DD.05"
        },              
        {
            "id": 1,
            "name_jp": "ボレアイト",
            "name_en": "BOLEITE",
            "chemical_formula_html": "Pb<sub>26</sub>Cu<sub>24</sub>Ag<sub>9</sub>Cl<sub>62</sub>(OH)<sub>48</sub>",
            "origin": ["Mexico", "Chile", "England", "Germany"],
            "description": "青色の珍しい塩化鉱物。立方体の結晶や、それらが組み合わさった八面体状の結晶で産出する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "ハロゲン化鉱物グループ",
            "habit": ["立方体", "八面体"],
            "occurrence": ["鉱石鉱物", "二次鉱物"],
            "strunz_classification": "03.DD.20"
        },
        {
            "id": 2,
            "name_jp": "車骨鉱",
            "name_en": "BOURNONITE",
            "chemical_formula_html": "CuPbSbS<sub>3</sub>",
            "origin": ["Romania", "Germany", "England", "USA", "Japan"],
            "description": "灰色がかった黒色の硫化鉱物。短柱状、厚板状、または擬立方体の結晶で産出する。双晶もよく見られる。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["柱状", "板状", "擬立方体"],
            "occurrence": ["鉱石鉱物", "熱水鉱床"],
            "strunz_classification": "02.GB.15"
        },
        {
            "id": 3,
            "name_jp": "ブラジル石",
            "name_en": "BRAZILIANITE",
            "chemical_formula_html": "NaAl<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(OH)<sub>4</sub>",
            "origin": ["Brazil", "USA", "Canada"],
            "description": "黄色から緑色のリン酸塩鉱物。劈開が完全で、ガラス光沢を持つ。柱状またはプリズム状の結晶で産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩鉱物グループ",
            "habit": ["柱状", "プリズム状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "08.DC.05"
        },
        {
            "id": 4,
            "name_jp": "ブロシャン銅鉱",
            "name_en": "BROCHANTITE",
            "chemical_formula_html": "Cu<sub>4</sub>(SO<sub>4</sub>)(OH)<sub>6</sub>",
            "origin": ["Germany", "Slovakia", "USA", "Chile"],
            "description": "鮮やかな緑色の硫酸塩鉱物。針状、柱状、または板状の結晶で産出する。塊状や粉末状の集合体としても見られる。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["針状", "柱状", "板状", "塊状", "粉末状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "銅鉱床の酸化帯"],
            "strunz_classification": "07.BB.55"
        },
        {
            "id": 5,
            "name_jp": "板チタン石",
            "name_en": "BROOKITE",
            "chemical_formula_html": "TiO<sub>2</sub>",
            "origin": ["USA", "Switzerland", "Wales", "Brazil"],
            "description": "褐色、赤褐色、または黒色の酸化チタン鉱物。鋭い稜を持つ板状または短柱状の結晶で産出する。ルチルやアナテースの同質異像。",
            "symmetry": "斜方晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["板状", "短柱状"],
            "occurrence": ["変成岩", "堆積岩", "熱水鉱脈"],
            "strunz_classification": "04.DD.05"
        },
        {
            "id": null,
            "name_jp": "カロール鉱",
            "name_en": "CARROLLITE",
            "chemical_formula_html": "CuFe<sub>2</sub>S<sub>4</sub>",
            "origin": [],
            "description": "銅と鉄の硫化鉱物。",
            "symmetry": "等軸晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["粒状"],
            "occurrence": ["鉱石鉱物"],
            "strunz_classification": "02族 硫化物および硫化鉱物"
        },
        {
            "id": null,
            "name_jp": "カバンシ石",
            "name_en": "CAVANSITE",
            "chemical_formula_html": "Ca(VO)Si<sub>4</sub>O<sub>10</sub>・4H<sub>2</sub>O",
            "origin": [],
            "description": "バナジウムを含む珍しい珪酸塩鉱物。",
            "symmetry": "斜方晶系",
            "crystal_structure": "珪酸塩鉱物グループ",
            "habit": ["柱状", "球状"],
            "occurrence": ["鉱石鉱物"],
            "strunz_classification": "09族 珪酸塩鉱物"
        },
        {
            "id": null,
            "name_jp": "白鉛鉱",
            "name_en": "CERUSSITE",
            "chemical_formula_html": "PbCO<sub>3</sub>",
            "origin": [],
            "description": "鉛の炭酸塩鉱物。",
            "symmetry": "斜方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["柱状", "板状", "双晶"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "05族 炭酸塩鉱物および硝酸塩鉱物"
        },
        {
            "id": null,
            "name_jp": "玉髄",
            "name_en": "CHALCEDONY",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": [],
            "description": "微細な石英の集合体。",
            "symmetry": "六方晶系（潜晶質）",
            "crystal_structure": "石英グループ",
            "habit": ["塊状", "球状", "鍾乳状"],
            "occurrence": ["鉱石鉱物"],
            "strunz_classification": "04族 酸化物および水酸化物"
        },
        {
            "id": null,
            "name_jp": "黄銅鉱",
            "name_en": "CHALCOPYRITE",
            "chemical_formula_html": "CuFeS<sub>2</sub>",
            "origin": ["Japan", "USA", "Canada", "Germany", "Peru", "Mexico"],
            "description": "銅と鉄の硫化鉱物で、黄色の金属光沢を持つ。主要な銅の鉱石鉱物の一つ。",
            "symmetry": "正方晶系",
            "crystal_structure": "黄銅鉱グループ",
            "habit": ["塊状", "粒状", "正四面体", "双晶"],
            "occurrence": ["鉱石鉱物", "熱水鉱床", "スカルン鉱床", "堆積岩"],
            "strunz_classification": "02.CB.10"
        },
        {
            "id": null,
            "name_jp": "千代子鉱",
            "name_en": "CHIYOKOITE",
            "chemical_formula_html": "Ag<sub>2</sub>CuPbBiS<sub>4</sub>",
            "origin": ["Japan (Chiba Prefecture)"],
            "description": "千葉県で発見された比較的稀な硫化鉱物。鉛、ビスマス、銅、銀を含む。",
            "symmetry": "単斜晶系",
            "crystal_structure": "不明 (記載が見当たらないため)",
            "habit": ["針状"],
            "occurrence": ["熱水鉱床"],
            "strunz_classification": "02.JB.35"
        },
        {
            "id": null,
            "name_jp": "緑泥石",
            "name_en": "CHLORITE GROUP",
            "chemical_formula_html": "(Mg,Fe,Al)<sub>6</sub>(Si,Al)<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
            "origin": ["Worldwide"],
            "description": "マグネシウム、鉄、アルミニウムを含む含水珪酸塩鉱物のグループ名。緑色を呈し、劈開が完全。",
            "symmetry": "単斜晶系",
            "crystal_structure": "緑泥石グループ",
            "habit": ["葉片状", "鱗片状", "塊状", "土状"],
            "occurrence": ["変成岩", "熱水変質", "堆積岩"],
            "strunz_classification": "09.EC.05"
        },
        {
            "id": null,
            "name_jp": "金緑石",
            "name_en": "CHRYSOBERYL",
            "chemical_formula_html": "BeAl<sub>2</sub>O<sub>4</sub>",
            "origin": ["Brazil", "Russia", "Sri Lanka", "Madagascar", "USA", "Japan"],
            "description": "ベリリウムとアルミニウムの酸化鉱物。硬度が高く、黄色、緑色、褐色などを呈する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "スピネルグループ (逆スピネル構造)",
            "habit": ["柱状", "板状", "短柱状", "双晶"],
            "occurrence": ["ペグマタイト", "変成岩", "砂鉱床"],
            "strunz_classification": "04.AA.08"
        },
        {
            "id": null,
            "name_jp": "珪孔雀石",
            "name_en": "CHRYSOCOLLA",
            "chemical_formula_html": "(Cu,Al)<sub>2</sub>H<sub>2</sub>Si<sub>2</sub>O<sub>5</sub>(OH,O)<sub>4</sub>・nH<sub>2</sub>O",
            "origin": ["USA", "Chile", "Peru", "Democratic Republic of the Congo", "Israel", "UK"],
            "description": "含水珪酸銅鉱物で、美しい青緑色を呈する。二次鉱物として銅鉱床の酸化帯に産出する。",
            "symmetry": "非晶質 (または隠微晶質)",
            "crystal_structure": "層状珪酸塩グループ (構造は議論中)",
            "habit": ["塊状", "皮膜状", "腎臓状", "球状", "土状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "銅鉱床酸化帯"],
            "strunz_classification": "09.ED.20"
        },
        {
            "id": 1,
            "name_jp": "辰砂",
            "name_en": "CINNABAR",
            "chemical_formula_html": "HgS",
            "origin": ["Japan", "China", "Spain", "Italy", "USA"],
            "description": "硫化水銀(II)からなる鉱物。鮮やかな赤色が特徴で、古くから顔料や水銀の原料として利用されてきた。",
            "symmetry": "三方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["塊状", "粒状", "柱状", "菱面体"],
            "occurrence": ["鉱石鉱物", "熱水鉱床"],
            "strunz_classification": "02.CD.05"
        },
        {
            "id": 5,
            "name_jp": "コランダム",
            "name_en": "CORUNDUM",
            "chemical_formula_html": "Al<sub>2</sub>O<sub>3</sub>",
            "origin": ["Myanmar", "Sri Lanka", "Thailand", "Australia", "USA"],
            "description": "酸化アルミニウムの結晶。硬度が非常に高く、ルビーやサファイアといった宝石としても知られる。",
            "symmetry": "三方晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["柱状", "樽型", "板状", "粒状"],
            "occurrence": ["変成岩", "火成岩", "漂砂鉱床"],
            "strunz_classification": "04.CB.05"
        },
        {
            "id": null,
            "name_jp": "クリノクローゼ",
            "name_en": "CLINOCLASE",
            "chemical_formula_html": "Cu<sub>3</sub>(AsO<sub>4</sub>)(OH)<sub>3</sub>",
            "origin": ["Germany", "England", "USA"],
            "description": "濃い青色から緑青色の単斜晶系の希産鉱物。銅の二次鉱物として、酸化帯で見られる。",
            "symmetry": "単斜晶系",
            "crystal_structure": null,
            "habit": ["針状", "板状", "繊維状", "塊状"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "08.BE.10"
        },
        {
            "id": null,
            "name_jp": "コールマン石",
            "name_en": "COLEMANITE",
            "chemical_formula_html": "Ca<sub>2</sub>B<sub>6</sub>O<sub>11</sub>·5H<sub>2</sub>O",
            "origin": ["USA", "Turkey", "Argentina"],
            "description": "無色または白色の単斜晶系のホウ酸塩鉱物。堆積岩中の蒸発岩鉱床で形成される。",
            "symmetry": "単斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["柱状", "短柱状", "粒状", "塊状"],
            "occurrence": ["堆積岩"],
            "strunz_classification": "06.CB.10"
        },
        {
            "id": null,
            "name_jp": "銅",
            "name_en": "COPPER",
            "chemical_formula_html": "Cu",
            "origin": ["USA", "Chile", "Zambia"],
            "description": "赤みを帯びた金属光沢を持つ等軸晶系の元素鉱物。熱と電気の良導体として広く利用される。",
            "symmetry": "等軸晶系",
            "crystal_structure": "元素鉱物グループ",
            "habit": ["立方体", "八面体", "樹枝状", "塊状", "粒状"],
            "occurrence": ["火成岩", "変成鉱物", "鉱脈"],
            "strunz_classification": "01.AA.05"
        },
        {
            "id": 1,
            "name_jp": "クリード石",
            "name_en": "CREEDITE",
            "chemical_formula_html": "Ca<sub>3</sub>Al<sub>2</sub>F<sub>4</sub>(OH,F)<sub>6</sub>(SO<sub>4</sub>)・2H<sub>2</sub>O",
            "origin": ["USA", "Mexico", "Kazakhstan"],
            "description": "フッ化物と硫酸塩を含む珍しい鉱物。透明または半透明で、無色、白色、紫色などを呈します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "独立四面体型",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["熱水鉱床の酸化帯"],
            "strunz_classification": "07.D門 硫酸塩・クロム酸塩・モリブデン酸塩鉱物"
            },
            {
            "id": 2,
            "name_jp": "クリストバル石",
            "name_en": "CRISTOBALITE",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": ["USA", "Mexico", "Japan"],
            "description": "高温型の二酸化ケイ素（シリカ）鉱物の一種。準安定相であり、低温では徐々に石英に転移します。火山岩や隕石中に見られます。",
            "symmetry": "正方晶系",
            "crystal_structure": "石英グループ",
            "habit": ["球状", "放射状", "微細な結晶の集合"],
            "occurrence": ["火成岩", "変成岩", "隕石"],
            "strunz_classification": "04.DA門 酸化物鉱物"
            },
            {
            "id": 3,
            "name_jp": "曹長石",
            "name_en": "CLEAVELANDITE",
            "chemical_formula_html": "NaAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": ["USA", "Brazil", "Italy"],
            "description": "アルバイト（曹長石）の板状または葉片状の形態を示す変種。白色で真珠光沢を持ちます。",
            "symmetry": "三斜晶系",
            "crystal_structure": "長石グループ",
            "habit": ["板状", "葉片状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.FA門 テクト珪酸塩鉱物"
            },
            {
            "id": 4,
            "name_jp": "斜緑泥石",
            "name_en": "CLINOCHLORE",
            "chemical_formula_html": "(Mg,Fe)<sub>5</sub>Al(Si<sub>3</sub>Al)O<sub>10</sub>(OH)<sub>8</sub>",
            "origin": ["USA", "Canada", "Switzerland"],
            "description": "緑泥石グループに属するマグネシウムとアルミニウムを主成分とする含水珪酸塩鉱物。葉片状または繊維状で、緑色を呈します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "緑泥石グループ",
            "habit": ["葉片状", "板状", "繊維状"],
            "occurrence": ["変成岩", "熱水変質鉱床"],
            "strunz_classification": "09.EC門 層状珪酸塩鉱物"
            },
            {
            "id": 5,
            "name_jp": "赤銅鉱",
            "name_en": "CUPRITE",
            "chemical_formula_html": "Cu<sub>2</sub>O",
            "origin": ["USA", "Namibia", "England"],
            "description": "酸化銅(I)からなる鉱物で、深赤色から暗赤色を呈します。しばしば八面体や立方体の結晶として産出します。",
            "symmetry": "等軸晶系",
            "crystal_structure": "立方晶系",
            "habit": ["立方体", "八面体", "塊状", "繊維状"],
            "occurrence": ["銅鉱床の酸化帯"],
            "strunz_classification": "04.AA門 単純酸化物"
            },
            {
            "id": 1,
            "name_jp": "ダンブリ石",
            "name_en": "DANBURITE",
            "chemical_formula_html": "CaB<sub>2</sub>(SiO<sub>4</sub>)<sub>2</sub>",
            "origin": ["Japan", "Mexico", "USA"],
            "description": "ダンブリ石は、カルシウムとホウ素のケイ酸塩鉱物です。通常は無色または白色ですが、黄色やピンク色を帯びることもあります。正方柱状の結晶や塊状で産出します。",
            "symmetry": "斜方晶系",
            "crystal_structure": "珪酸塩鉱物",
            "habit": ["柱状", "塊状"],
            "occurrence": ["接触鉱物", "熱水鉱床"],
            "strunz_classification": "08.AA門 テクトホウ酸塩"
        },
        {
            "id": 3,
            "name_jp": "ダイヤモンド/金剛石",
            "name_en": "DIAMOND",
            "chemical_formula_html": "C",
            "origin": ["South Africa", "Russia", "Botswana", "Canada", "Australia"],
            "description": "ダイヤモンドは、炭素の同素体の一つであり、非常に高い硬度と光沢を持つことで知られています。通常は八面体または立方体の結晶で産出します。",
            "symmetry": "等軸晶系",
            "crystal_structure": "元素鉱物",
            "habit": ["八面体", "立方体", "十二面体"],
            "occurrence": ["キンバーライト", "ランプロアイト", "変成岩"],
            "strunz_classification": "01.CB門 金属炭化物・窒化物・リン化物"
        },
        {
            "id": 4,
            "name_jp": "ダイアスポア",
            "name_en": "DIASPORE",
            "chemical_formula_html": "AlO(OH)",
            "origin": ["Turkey", "Russia", "South Africa", "Greece", "USA"],
            "description": "ダイアスポアは、アルミニウムの酸化水酸化鉱物です。通常は無色、白色、灰色、黄色、緑色、ピンク色などを呈し、板状、柱状、鱗片状などの結晶で産出します。強い劈開を持つことが特徴です。",
            "symmetry": "斜方晶系",
            "crystal_structure": "水酸化鉱物",
            "habit": ["板状", "柱状", "鱗片状"],
            "occurrence": ["ボーキサイト鉱床", "変成岩"],
            "strunz_classification": "04.FD門 酸化水酸化物"
        },
        {
            "id": 5,
            "name_jp": "透輝石",
            "name_en": "DIOPSIDE",
            "chemical_formula_html": "CaMgSi<sub>2</sub>O<sub>6</sub>",
            "origin": ["Italy", "Canada", "Russia", "Finland", "USA"],
            "description": "透輝石は、カルシウムとマグネシウムのイノケイ酸塩鉱物（単鎖状珪酸塩鉱物）です。通常は無色、白色、灰色、緑色などを呈し、柱状、粒状、塊状などの結晶で産出します。劈開は二方向に明瞭です。",
            "symmetry": "単斜晶系",
            "crystal_structure": "輝石グループ",
            "habit": ["柱状", "粒状", "塊状"],
            "occurrence": ["変成岩", "火成岩", "スカルン"],
            "strunz_classification": "09.DA門 単鎖イノ珪酸塩"
        },
        {
            "id": 1,
            "name_jp": "デマントイド",
            "name_en": "DEMANTOID",
            "chemical_formula_html": "Ca<sub>3</sub>Fe<sup>3+</sup><sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": [
            "Russia",
            "Italy",
            "Iran",
            "Namibia",
            "Madagascar"
            ],
            "description": "緑色の透明なアンドラダイト（灰鉄柘榴石）の変種で、宝石として珍重されます。ダイヤモンドのような強い分散光を示すことからこの名が付けられました。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": [
            "菱形十二面体",
            "正二十四面体",
            "塊状"
            ],
            "occurrence": [
            "変成鉱物",
            "接触鉱物"
            ],
            "strunz_classification": "09.AD.25"
        },
        {
            "id": 1,
            "name_jp": "翠銅鉱",
            "name_en": "DIOPTASE",
            "chemical_formula_html": "CuSiO<sub>3</sub>&#183;H<sub>2</sub>O",
            "origin": ["Namibia", "Congo (DRC)", "USA"],
            "description": "濃い緑色の美しい結晶を形成する含水珪酸銅鉱物。主に酸化帯の銅鉱床で二次鉱物として産出する。",
            "symmetry": "三方晶系",
            "crystal_structure": "環状珪酸塩鉱物",
            "habit": ["柱状", "錐状", "板状", "塊状"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": 2,
            "name_jp": "ドラバイト",
            "name_en": "DRAVITE",
            "chemical_formula_html": "NaMg<sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>Si<sub>6</sub>O<sub>18</sub>(OH)<sub>4</sub>",
            "origin": ["Slovenia", "Brazil", "USA"],
            "description": "ナトリウムとマグネシウムを主成分とするトルマリンの一種。褐色から黄色、緑色などの色を示す。",
            "symmetry": "三方晶系",
            "crystal_structure": "トルマリン・グループ",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["変成鉱物", "接触鉱物"],
            "strunz_classification": "09.CK.05"
          },
          {
            "id": 3,
            "name_jp": "苦灰石",
            "name_en": "DOLOMITE",
            "chemical_formula_html": "CaMg(CO<sub>3</sub>)<sub>2</sub>",
            "origin": ["Italy", "Switzerland", "USA"],
            "description": "カルシウムとマグネシウムの複炭酸塩鉱物。菱面体状の結晶や塊状で産出し、ドロマイト岩の主成分。",
            "symmetry": "三方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["菱面体", "塊状", "粒状"],
            "occurrence": ["造岩鉱物", "変成鉱物", "堆積岩"],
            "strunz_classification": "05.AB.10"
          },
          {
            "id": 4,
            "name_jp": "ドロストーン",
            "name_en": "DOLOSTONE",
            "chemical_formula_html": "CaMg(CO<sub>3</sub>)<sub>2</sub> (主要鉱物)",
            "origin": ["Worldwide"],
            "description": "主に苦灰石（ドロマイト）から構成される堆積岩。石灰岩と似ているが、塩酸に溶けにくい性質を持つ。",
            "symmetry": "三方晶系 (構成鉱物の苦灰石に準拠)",
            "crystal_structure": "炭酸塩岩",
            "habit": ["塊状"],
            "occurrence": ["堆積岩"],
            "strunz_classification": "該当なし (岩石)"
          },
          {
            "id": 5,
            "name_jp": "デュフタイト",
            "name_en": "DUFTITE",
            "chemical_formula_html": "PbCu(AsO<sub>4</sub>)(OH)",
            "origin": ["Namibia", "Germany", "Czech Republic"],
            "description": "鮮やかな緑色の水和砒酸塩鉱物。酸化帯の鉛・銅鉱床で二次鉱物として産出する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "リン酸塩グループ",
            "habit": ["塊状", "球状", "腎臓状", "針状"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "08.BH.40"
          },
          {
            "id": 1,
            "name_jp": "エルバイト",
            "name_en": "ELBAITE",
            "chemical_formula_html": "Na(Li<sub>1.5</sub>Al<sub>1.5</sub>)Al<sub>6</sub>(Si<sub>6</sub>O<sub>18</sub>)(BO<sub>3</sub>)<sub>3</sub>(OH)<sub>4</sub>",
            "origin": [
              "Italy",
              "Brazil",
              "Afghanistan",
              "USA"
            ],
            "description": "リチウムを主成分とするトルマリンの一種で、様々な色を示す美しい宝石としても知られています。",
            "symmetry": "三方晶系",
            "crystal_structure": "トルマリン・グループ",
            "habit": [
              "柱状",
              "針状",
              "塊状"
            ],
            "occurrence": [
              "ペグマタイト",
              "熱水鉱脈"
            ],
            "strunz_classification": "09.CK.05"
          },
          {
            "id": 2,
            "name_jp": "エメラルド",
            "name_en": "EMERALD",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>(SiO<sub>6</sub>)<sub>6</sub>",
            "origin": [
              "Colombia",
              "Zambia",
              "Brazil",
              "Afghanistan"
            ],
            "description": "緑色の美しい宝石で、ベリルの一種です。その鮮やかな緑色は微量のクロムやバナジウムによって発色します。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリル・グループ",
            "habit": [
              "柱状",
              "六角柱状"
            ],
            "occurrence": [
              "ペグマタイト",
              "変成岩",
              "堆積岩"
            ],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": 3,
            "name_jp": "緑簾石",
            "name_en": "EPIDOTE",
            "chemical_formula_html": "Ca<sub>2</sub>Fe<sup>3+</sup>Al<sub>2</sub>(Si<sub>2</sub>O<sub>7</sub>)(SiO<sub>4</sub>)O(OH)",
            "origin": [
              "Austria",
              "Norway",
              "USA",
              "Japan"
            ],
            "description": "黄緑色から緑色の単斜晶系の鉱物で、変成岩や火成岩中に広く見られます。",
            "symmetry": "単斜晶系",
            "crystal_structure": "緑簾石グループ",
            "habit": [
              "柱状",
              "粒状",
              "繊維状"
            ],
            "occurrence": [
              "変成鉱物",
              "接触鉱物",
              "火成岩"
            ],
            "strunz_classification": "09.BG.05"
          },
          {
            "id": 4,
            "name_jp": "剥沸石",
            "name_en": "EPISTILBITE",
            "chemical_formula_html": "(Ca,Na<sub>2</sub>)[Al<sub>2</sub>Si<sub>4</sub>O<sub>12</sub>]・4H<sub>2</sub>O",
            "origin": [
              "Scotland",
              "Iceland",
              "India",
              "Japan"
            ],
            "description": "無色または白色の単斜晶系の沸石鉱物です。板状または放射状の集合体として産出することが多いです。",
            "symmetry": "単斜晶系",
            "crystal_structure": "沸石グループ",
            "habit": [
              "板状",
              "柱状",
              "放射状"
            ],
            "occurrence": [
              "玄武岩の晶洞",
              "熱水鉱脈"
            ],
            "strunz_classification": "09.GE.10"
          },
          {
            "id": 5,
            "name_jp": "コバルト華",
            "name_en": "ERYTHRITE",
            "chemical_formula_html": "Co<sub>3</sub>(AsO<sub>4</sub>)<sub>2</sub>・8H<sub>2</sub>O",
            "origin": [
              "Germany",
              "Morocco",
              "Canada",
              "USA"
            ],
            "description": "深紅色から桃色の美しい単斜晶系の含水ヒ酸コバルト鉱物で、コバルト鉱床の酸化帯に二次鉱物として生成します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "コバルト華グループ",
            "habit": [
              "柱状",
              "板状",
              "放射状",
              "土状"
            ],
            "occurrence": [
              "コバルト鉱床の酸化帯",
              "熱水鉱脈"
            ],
            "strunz_classification": "08.CE.40"
          },
          {
            "id": 1,
            "name_jp": "ユークレース",
            "name_en": "EUCLASE",
            "chemical_formula_html": "BeAlSiO<sub>4</sub>(OH)",
            "origin": [
              "Brazil",
              "Tanzania",
              "Austria"
            ],
            "description": "ベリリウムとアルミニウムの珪酸塩水酸化鉱物。美しい結晶を形成し、宝石としても扱われる。",
            "symmetry": "単斜晶系",
            "crystal_structure": "ネソ珪酸塩鉱物",
            "habit": [
              "柱状",
              "板状",
              "錐状"
            ],
            "occurrence": [
              "ペグマタイト",
              "熱水鉱脈"
            ],
            "strunz_classification": "09.AE.05"
          },
          {
            "id": 2,
            "name_jp": "長石",
            "name_en": "FELDSPAR",
            "chemical_formula_html": "(K,Na,Ca)Al(Si,Al)<sub>3</sub>O<sub>8</sub>",
            "origin": [
              "Worldwide"
            ],
            "description": "地殻中に最も豊富に存在する造岩鉱物グループ。カリウム、ナトリウム、カルシウムを主成分とし、様々な種類がある。",
            "symmetry": "単斜晶系、三斜晶系",
            "crystal_structure": "テクト珪酸塩鉱物",
            "habit": [
              "柱状",
              "板状",
              "塊状"
            ],
            "occurrence": [
              "火成岩",
              "変成鉱物",
              "造岩鉱物"
            ],
            "strunz_classification": "09.FA"
          },
          {
            "id": 3,
            "name_jp": "鉄重石",
            "name_en": "FERBERITE",
            "chemical_formula_html": "FeWO<sub>4</sub>",
            "origin": [
              "Czech Republic",
              "Portugal",
              "Bolivia"
            ],
            "description": "鉄とタングステンからなるタングステン酸塩鉱物。灰重石（Scheelite, CaWO₄）と固溶体を形成する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "タングステン酸塩鉱物",
            "habit": [
              "柱状",
              "板状",
              "錐状"
            ],
            "occurrence": [
              "熱水鉱脈",
              "ペグマタイト"
            ],
            "strunz_classification": "04.DB.30"
          },
          {
            "id": 4,
            "name_jp": "フッ素燐灰石",
            "name_en": "FLUORAPATITE",
            "chemical_formula_html": "Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>F",
            "origin": [
              "Mexico",
              "Canada",
              "Germany"
            ],
            "description": "リン酸カルシウム鉱物の一種で、ハロゲン元素としてフッ素を含む。リン酸塩鉱物グループの重要なメンバー。",
            "symmetry": "六方晶系",
            "crystal_structure": "燐灰石グループ",
            "habit": [
              "柱状",
              "六角柱状",
              "塊状",
              "粒状"
            ],
            "occurrence": [
              "火成岩",
              "変成鉱物",
              "堆積岩",
              "熱水鉱脈"
            ],
            "strunz_classification": "08.BN.05"
          },
          {
            "id": 5,
            "name_jp": "蛍石",
            "name_en": "FLUORITE",
            "chemical_formula_html": "CaF<sub>2</sub>",
            "origin": [
              "China",
              "Mexico",
              "South Africa"
            ],
            "description": "カルシウムとフッ素からなるハロゲン化鉱物。劈開が完全で、様々な色を示す。",
            "symmetry": "等軸晶系",
            "crystal_structure": "蛍石グループ",
            "habit": [
              "立方体",
              "八面体",
              "十二面体",
              "塊状",
              "粒状"
            ],
            "occurrence": [
              "熱水鉱脈",
              "堆積岩",
              "ペグマタイト"
            ],
            "strunz_classification": "03.AA.20"
          },
          {
            "id": 1,
            "name_jp": "苦土橄欖石",
            "name_en": "FORSTERITE",
            "chemical_formula_html": "Mg<sub>2</sub>SiO<sub>4</sub>",
            "origin": ["Japan", "Italy", "USA"],
            "description": "マントルの主要な構成鉱物の一つ。ペリドットの主要な成分。",
            "symmetry": "斜方晶系",
            "crystal_structure": "橄欖石グループ",
            "habit": ["柱状", "粒状"],
            "occurrence": ["造岩鉱物", "火成岩", "変成鉱物"],
            "strunz_classification": "09.AC門 ネソ珪酸塩鉱物"
          },
          {
            "id": 2,
            "name_jp": "方鉛鉱",
            "name_en": "GALENA",
            "chemical_formula_html": "PbS",
            "origin": ["Japan", "USA", "Germany"],
            "description": "鉛の主要な鉱石鉱物。劈開が完全で、比重が大きい。",
            "symmetry": "等軸晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["立方体", "八面体", "塊状"],
            "occurrence": ["鉱石鉱物", "熱水鉱床"],
            "strunz_classification": "02.CD門 硫化物鉱物"
          },
          {
            "id": 3,
            "name_jp": "柘榴石",
            "name_en": "GARNET",
            "chemical_formula_html": "A<sub>3</sub>B<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": ["Japan", "India", "Brazil"],
            "description": "様々な種類があり、色や化学組成が大きく異なる。宝石としても利用される。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": ["菱形十二面体", "正二十四面体", "塊状"],
            "occurrence": ["変成鉱物", "火成岩"],
            "strunz_classification": "09.AD門 ネソ珪酸塩鉱物"
          },
          {
            "id": 4,
            "name_jp": "針鉄鉱",
            "name_en": "GOETHITE",
            "chemical_formula_html": "FeO(OH)",
            "origin": ["Japan", "Germany", "USA"],
            "description": "鉄の重要な水酸化鉱物。黄褐色から褐色を呈し、針状の結晶をなすことが多い。",
            "symmetry": "斜方晶系",
            "crystal_structure": "水酸化鉱物グループ",
            "habit": ["針状", "繊維状", "塊状", "土状"],
            "occurrence": ["鉱石鉱物", "風化生成物"],
            "strunz_classification": "04.FD門 水酸化物"
          },
          {
            "id": 5,
            "name_jp": "ゴシェナイト",
            "name_en": "GOSHENITE",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>(SiO<sub>6</sub>)<sub>6</sub>",
            "origin": ["Brazil", "USA", "Namibia"],
            "description": "ベリルの一種で、無色透明なもの。宝石として扱われる。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリルグループ",
            "habit": ["柱状", "六角柱状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.CJ門 環状珪酸塩鉱物"
          },
          {
            "id": null,
            "name_jp": "金",
            "name_en": "GOLD",
            "chemical_formula_html": "Au",
            "origin": ["Japan", "Canada", "South Africa"],
            "description": "貴金属の一つ。元素記号はAu。比重が大きい黄色の金属で、展性・延性に富む。古くから装飾品や貨幣として利用されてきた。",
            "symmetry": "等軸晶系",
            "crystal_structure": "元素鉱物グループ",
            "habit": ["塊状", "粒状", "樹枝状"],
            "occurrence": ["鉱石鉱物", "火成岩"],
            "strunz_classification": "01族 金属元素鉱物"
          },
          {
            "id": null,
            "name_jp": "石墨",
            "name_en": "GRAPHITE",
            "chemical_formula_html": "C",
            "origin": ["Japan", "China", "Brazil"],
            "description": "炭素の同素体の一つ。六方晶系の層状構造を持ち、電気伝導性を示す。鉛筆の芯や工業材料として利用される。",
            "symmetry": "六方晶系",
            "crystal_structure": "元素鉱物グループ",
            "habit": ["鱗片状", "塊状", "柱状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "01族 非金属元素鉱物"
          },
          {
            "id": null,
            "name_jp": "灰礬柘榴石",
            "name_en": "GROSSULAR",
            "chemical_formula_html": "Ca<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": ["Japan", "Canada", "Russia"],
            "description": "カルシウムとアルミニウムを主成分とする柘榴石（ガーネット）の一種。様々な色合いを持つ。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": ["菱形十二面体", "正二十四面体", "塊状"],
            "occurrence": ["変成鉱物", "接触鉱物"],
            "strunz_classification": "09.AD門 ネソ珪酸塩鉱物"
          },
          {
            "id": null,
            "name_jp": "石膏",
            "name_en": "GYPSUM",
            "chemical_formula_html": "CaSO<sub>4</sub>・2H<sub>2</sub>O",
            "origin": ["Japan", "USA", "Spain"],
            "description": "水を含む硫酸カルシウムの鉱物。柔らかく、剥片状や柱状の結晶をなす。建材や美術工芸品に利用される。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["板状", "柱状", "繊維状", "塊状"],
            "occurrence": ["堆積岩", "蒸発岩"],
            "strunz_classification": "07.CD門 含水硫酸塩"
          },
          {
            "id": null,
            "name_jp": "ハウイン",
            "name_en": "HAUYNE",
            "chemical_formula_html": "Na<sub>3</sub>Ca(Si<sub>3</sub>Al<sub>3</sub>)O<sub>12</sub>(SO<sub>4</sub>)",
            "origin": ["Germany", "Italy", "USA"],
            "description": "ラピスラズリの主要な構成鉱物の一つ。濃青色の美しい宝石としても扱われる。",
            "symmetry": "等軸晶系",
            "crystal_structure": "長石グループ",
            "habit": ["十二面体", "塊状", "粒状"],
            "occurrence": ["火成岩", "火山岩"],
            "strunz_classification": "09.FB門 テクト珪酸塩鉱物"
          },
          {
            "id": 1,
            "name_jp": "灰鉄輝石",
            "name_en": "HEDENBERGITE",
            "chemical_formula_html": "CaFeSi<sub>2</sub>O<sub>6</sub>",
            "origin": [],
            "description": "単斜輝石グループに属する鉱物で、カルシウムと鉄を主成分とする珪酸塩鉱物です。",
            "symmetry": "単斜晶系",
            "crystal_structure": "単斜輝石グループ",
            "habit": ["柱状", "塊状"],
            "occurrence": ["接触鉱物", "変成鉱物", "火成岩"],
            "strunz_classification": "09.DA.15"
          },
          {
            "id": 2,
            "name_jp": null,
            "name_en": "HELIODOR",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "origin": [],
            "description": "ベリルの一種で、鉄によって黄色に発色したものです。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリルグループ",
            "habit": ["柱状", "六角柱状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": 3,
            "name_jp": "赤鉄鉱",
            "name_en": "HEMATITE",
            "chemical_formula_html": "Fe<sub>2</sub>O<sub>3</sub>",
            "origin": [],
            "description": "鉄の酸化鉱物で、主要な鉄鉱石の一つです。様々な形態で産出します。",
            "symmetry": "三方晶系",
            "crystal_structure": "コランダムグループ",
            "habit": ["板状", "鱗片状", "塊状", "粒状", "腎臓状"],
            "occurrence": ["鉱石鉱物", "熱水鉱床", "堆積鉱床", "変成鉱床"],
            "strunz_classification": "04.CB.05"
          },
          {
            "id": 4,
            "name_jp": "異極鉱",
            "name_en": "HEMIMORPHITE",
            "chemical_formula_html": "Zn<sub>4</sub>Si<sub>2</sub>O<sub>7</sub>(OH)<sub>2</sub>・H<sub>2</sub>O",
            "origin": [],
            "description": "亜鉛の珪酸塩水和物で、柱状や板状の結晶、または腎臓状や鍾乳石状の集合体で産出します。結晶の両端で異なる形態を示すことが特徴です。",
            "symmetry": "斜方晶系",
            "crystal_structure": "異極鉱グループ",
            "habit": ["柱状", "板状", "錐状", "腎臓状", "鍾乳石状"],
            "occurrence": ["鉱石鉱物", "酸化帯"],
            "strunz_classification": "09.BD.10"
          },
          {
            "id": 5,
            "name_jp": "逸見石",
            "name_en": "HENMILITE",
            "chemical_formula_html": "Ca<sub>2</sub>Cu[B(OH)<sub>4</sub>]<sub>2</sub>(OH)<sub>4</sub>",
            "origin": ["Japan"],
            "description": "日本の岡山県で発見された珍しい銅とカルシウムのホウ酸塩鉱物です。淡青色をしています。",
            "symmetry": "三斜晶系",
            "crystal_structure": "ホウ酸塩鉱物",
            "habit": ["板状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "06.DA.15"
          },
          {
            "id": null,
            "name_jp": "ヒューランダイト",
            "name_en": "HEULANDITE",
            "chemical_formula_html": "(Ca, Na, K)<sub>x</sub>(Al, Si)<sub>5</sub>Si<sub>13</sub>O<sub>36</sub>・12H<sub>2</sub>O",
            "origin": [],
            "description": "沸石の一種で、カルシウム、ナトリウム、カリウムを主成分とする含水アルミノ珪酸塩鉱物。",
            "symmetry": "単斜晶系",
            "crystal_structure": "沸石グループ",
            "habit": ["板状", "柱状", "塊状"],
            "occurrence": ["火成岩", "変成岩"],
            "strunz_classification": "09.GE.05"
          },
          {
            "id": null,
            "name_jp": "フベイ石",
            "name_en": "HUBEITE",
            "chemical_formula_html": "Ca<sub>2</sub>Mn<sup>2+</sup><sub>7</sub>Si<sub>10</sub>O<sub>28</sub>(OH)<sub>2</sub>・5H<sub>2</sub>O",
            "origin": [],
            "description": "マンガンを主成分とする珍しい珪酸塩鉱物で、ピンク色の針状結晶を形成します。",
            "symmetry": "三斜晶系",
            "crystal_structure": "イネス石グループ (推定)",
            "habit": ["針状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.DK.15"
          },
          {
            "id": null,
            "name_jp": "玉滴石",
            "name_en": "HYALITE",
            "chemical_formula_html": "SiO<sub>2</sub>・nH<sub>2</sub>O",
            "origin": [],
            "description": "非晶質の二酸化ケイ素で、水を含み、ガラス光沢を持つことが多い。",
            "symmetry": "非晶質",
            "crystal_structure": "石英グループ",
            "habit": ["塊状", "滴状", "被膜状"],
            "occurrence": ["火成岩", "温泉沈殿物"],
            "strunz_classification": "04.DA.05"
          },
          {
            "id": null,
            "name_jp": "インディゴライト",
            "name_en": "INDICOLITE",
            "chemical_formula_html": "Na(Mg,Fe)<sub>3</sub>Al<sub>6</sub>Si<sub>6</sub>O<sub>18</sub>(BO<sub>3</sub>)<sub>3</sub>(OH)<sub>4</sub>",
            "origin": [],
            "description": "青色のトルマリンの一種で、宝石としても扱われます。",
            "symmetry": "六方晶系",
            "crystal_structure": "トルマリン・グループ",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["ペグマタイト", "変成岩"],
            "strunz_classification": "09.CK.05"
          },
          {
            "id": null,
            "name_jp": "イネス石",
            "name_en": "INESITE",
            "chemical_formula_html": "Ca<sub>2</sub>Mn<sup>2+</sup><sub>7</sub>Si<sub>10</sub>O<sub>28</sub>(OH)<sub>2</sub>・5H<sub>2</sub>O",
            "origin": [],
            "description": "カルシウムとマンガンを主成分とするピンク色の三斜晶系の珪酸塩鉱物。",
            "symmetry": "三斜晶系",
            "crystal_structure": "イネス石グループ",
            "habit": ["板状", "柱状", "繊維状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.DK.15"
          },
          {
            "id": null,
            "name_jp": "毛鉱",
            "name_en": "JAMESONITE",
            "chemical_formula_html": "Pb<sub>4</sub>FeSb<sub>6</sub>S<sub>14</sub>",
            "origin": [],
            "description": "針状または毛髪状の結晶で産出する硫化鉱物。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["針状", "毛髪状"],
            "occurrence": ["鉱石鉱物"],
            "strunz_classification": "02族 硫化鉱物"
          },
          {
            "id": null,
            "name_jp": null,
            "name_en": "JOAQUINITE",
            "chemical_formula_html": "NaBa₂Fe<sup>2+</sup>(Ti,Nb)₄Si₄O₁₂[O,OH]₄",
            "origin": [],
            "description": "褐色から赤褐色の比較的稀なチタン珪酸塩鉱物。",
            "symmetry": "斜方晶系",
            "crystal_structure": "珪酸塩グループ",
            "habit": ["板状", "柱状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.CE門 フィロ珪酸塩（層状珪酸塩）"
          },
          {
            "id": null,
            "name_jp": null,
            "name_en": "KAMMERERITE",
            "chemical_formula_html": "Mg₅Cr(AlSi₃O₁₀)(OH)₈",
            "origin": [],
            "description": "鮮やかなピンク色から赤紫色のクロムを含む雲母。",
            "symmetry": "単斜晶系",
            "crystal_structure": "雲母グループ",
            "habit": ["板状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.EC門 フィロ珪酸塩（層状珪酸塩）"
          },
          {
            "id": null,
            "name_jp": null,
            "name_en": "KUNZITE",
            "chemical_formula_html": "LiAlSi₂O₆",
            "origin": [],
            "description": "ライラックピンク色から紫ピンク色の透明なリチウムアルミニウム珪酸塩鉱物（スポジュメンの変種）。",
            "symmetry": "単斜晶系",
            "crystal_structure": "輝石グループ",
            "habit": ["柱状", "板状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.DA門 イノ珪酸塩（単鎖珪酸塩）"
          },
          {
            "id": null,
            "name_jp": "藍晶石",
            "name_en": "KYANITE",
            "chemical_formula_html": "Al₂SiO₅",
            "origin": [],
            "description": "青色、白色、灰色の柱状または板状の結晶で産出する珪酸塩鉱物。",
            "symmetry": "三斜晶系",
            "crystal_structure": "珪線石グループ",
            "habit": ["柱状", "板状"],
            "occurrence": ["変成鉱物"],
            "strunz_classification": "09.AF門 ネソ珪酸塩"
          },
          {
            "id": null,
            "name_jp": "ラリマー",
            "name_en": "LARIMAR",
            "chemical_formula_html": "NaCa<sub>2</sub>Si<sub>3</sub>O<sub>8</sub>(OH)",
            "origin": [
              "Dominican Republic"
            ],
            "description": "ペクトライトの一種で、カリブ海のドミニカ共和国でのみ産出される青色の美しい宝石。正式名称はブルーペクトライト。",
            "symmetry": "三斜晶系",
            "crystal_structure": "鎖状珪酸塩鉱物",
            "habit": [
              "塊状",
              "球状"
            ],
            "occurrence": [
              "変成鉱物",
              "熱水鉱床"
            ],
            "strunz_classification": "09.DH.10"
          },
          {
            "id": null,
            "name_jp": "天藍石",
            "name_en": "LAZULITE",
            "chemical_formula_html": "MgAl<sub>2</sub>(PO<sub>4</sub>)<sub>2</sub>(OH)<sub>2</sub>",
            "origin": [
              "Austria",
              "Sweden",
              "Brazil",
              "USA",
              "Canada"
              // 他の産地も存在しますが、主要なものを記載
            ],
            "description": "濃い青色から空青色を呈する燐酸塩鉱物。美しい結晶は宝石としても扱われる。",
            "symmetry": "単斜晶系",
            "crystal_structure": "燐酸塩鉱物",
            "habit": [
              "錐状",
              "短柱状",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "変成鉱物",
              "ペグマタイト"
            ],
            "strunz_classification": "08.BB.40"
          },
          {
            "id": null,
            "name_jp": "レグランダイト",
            "name_en": "LEGRANDITE",
            "chemical_formula_html": "Zn<sub>2</sub>(AsO<sub>4</sub>)(OH)·H<sub>2</sub>O",
            "origin": [
              "Mexico",
              "USA",
              "Namibia",
              "France"
              // 他の産地も存在しますが、主要なものを記載
            ],
            "description": "鮮やかな黄色から黄橙色を呈する砒酸塩鉱物。特徴的な楔形の結晶が美しい。",
            "symmetry": "単斜晶系",
            "crystal_structure": "砒酸塩鉱物",
            "habit": [
              "柱状",
              "針状",
              "楔状"
            ],
            "occurrence": [
              "酸化帯"
            ],
            "strunz_classification": "08.DC.15"
          },
          {
            "id": null,
            "name_jp": "リチア雲母",
            "name_en": "LEPIDOLITE",
            "chemical_formula_html": "K(Li,Al)<sub>3</sub>(Si,Al)<sub>4</sub>O<sub>10</sub>(F,OH)<sub>2</sub>",
            "origin": [
              "Czech Republic",
              "USA",
              "Brazil",
              "Russia",
              "Canada"
              // 他の産地も存在しますが、主要なものを記載
            ],
            "description": "リチウムを主成分とする雲母グループの鉱物。淡紅色、紫色、灰色などを呈し、鱗片状の結晶が特徴。",
            "symmetry": "単斜晶系",
            "crystal_structure": "雲母グループ",
            "habit": [
              "板状",
              "鱗片状",
              "塊状",
              "六角板状"
            ],
            "occurrence": [
              "ペグマタイト",
              "高温熱水鉱床",
              "花崗岩"
            ],
            "strunz_classification": "09.EC.20"
          },
          {
            "id": null,
            "name_jp": "リディコータイト",
            "name_en": "LIDDICOATITE",
            "chemical_formula_html": "Ca(Li,Al)<sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>Si<sub>6</sub>O<sub>18</sub>(O,OH,F)<sub>4</sub>",
            "origin": [
              "Madagascar"
              // 主な産地
            ],
            "description": "トルマリングループに属する鉱物で、複雑な化学組成を持つ。多色性を示し、美しい色帯構造を持つ結晶が特徴。",
            "symmetry": "三方晶系",
            "crystal_structure": "トルマリングループ",
            "habit": [
              "柱状",
              "錐状",
              "塊状"
            ],
            "occurrence": [
              "ペグマタイト"
            ],
            "strunz_classification": "09.CK.05"
          },
          {
            "id": 1,
            "name_jp": "青鉛鉱",
            "name_en": "LINARITE",
            "chemical_formula_html": "PbCu(SO<sub>4</sub>)(OH)<sub>2</sub>",
            "origin": [],
            "description": "鮮やかな青色が特徴的な二次鉱物で、銅と鉛の硫化鉱床の酸化帯に生成します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": [
              "柱状",
              "板状",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "変成鉱物"
            ],
            "strunz_classification": "07.B門 硫酸塩、クロム酸塩、モリブデン酸塩"
          },
          {
            "id": 2,
            "name_jp": "リロコナイト",
            "name_en": "LIROCONITE",
            "chemical_formula_html": "Cu<sub>2</sub>Al(AsO<sub>4</sub>)(OH)<sub>4</sub>·4H<sub>2</sub>O",
            "origin": [],
            "description": "鮮やかな緑色または青緑色の珍しい二次鉱物で、銅鉱床の酸化帯に産出します。特徴的なレンズ状またはくさび形の結晶を形成することがあります。",
            "symmetry": "単斜晶系",
            "crystal_structure": "砒酸塩グループ",
            "habit": [
              "レンズ状",
              "くさび形",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "変成鉱物"
            ],
            "strunz_classification": "08.DD門 含水砒酸塩、リン酸塩、バナジン酸塩"
          },
          {
            "id": 3,
            "name_jp": "ラドラム石",
            "name_en": "LUDLAMITE",
            "chemical_formula_html": "(Mg,Fe<sup>2+</sup>,Mn)<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>·4H<sub>2</sub>O",
            "origin": [],
            "description": "黄色、緑黄色、または赤褐色の単斜晶系のリン酸塩鉱物で、鉄、マグネシウム、マンガンに富む熱水鉱脈やペグマタイトに二次鉱物として生成します。板状または柱状の結晶を形成します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩グループ",
            "habit": [
              "板状",
              "柱状",
              "粒状",
              "放射状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "ペグマタイト",
              "熱水鉱脈"
            ],
            "strunz_classification": "08.CD門 無水リン酸塩（その他の陰イオンを含むもの）"
          },
          {
            "id": 4,
            "name_jp": "孔雀石",
            "name_en": "MALACHITE",
            "chemical_formula_html": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
            "origin": [],
            "description": "鮮やかな緑色が特徴的な二次鉱物で、銅鉱床の酸化帯に広く産出します。塊状、皮膜状、繊維状、または放射状の集合体として見られます。",
            "symmetry": "単斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": [
              "塊状",
              "皮膜状",
              "繊維状",
              "放射状",
              "鍾乳状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "変成鉱物"
            ],
            "strunz_classification": "05.BA門 炭酸塩（硝酸塩とホウ酸塩を除く）"
          },
          {
            "id": 5,
            "name_jp": "マンナード鉱",
            "name_en": "MANNARDITE",
            "chemical_formula_html": "Ba(Ti<sup>4+</sup><sub>6</sub>V<sup>3+</sup><sub>2</sub>)O<sub>16</sub>",
            "origin": [],
            "description": "黒色または暗褐色の比較的稀な酸化鉱物で、変成したマンガン鉱床中に産出します。正方晶系に属し、小さな柱状または針状の結晶を形成することがあります。",
            "symmetry": "正方晶系",
            "crystal_structure": "ホランダイトグループ",
            "habit": [
              "柱状",
              "針状",
              "粒状"
            ],
            "occurrence": [
              "変成鉱物"
            ],
            "strunz_classification": "04.DK門 酸化物（UO2型構造および関連構造）"
          },
          {
            "id": 1,
            "name_jp": "白鉄鉱",
            "name_en": "MARCASITE",
            "chemical_formula_html": "FeS<sub>2</sub>",
            "origin": ["Japan", "USA", "Germany"],
            "description": "黄鉄鉱と同質異像の鉱物。黄鉄鉱よりも低温で酸性条件下で生成しやすい。しばしば放射状や鶏冠状の集合体となる。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["柱状", "板状", "鶏冠状", "放射状"],
            "occurrence": ["鉱石鉱物", "堆積鉱床の続成作用"],
            "strunz_classification": "02.EB.05"
          },
          {
            "id": 2,
            "name_jp": "雲母",
            "name_en": "MICA",
            "chemical_formula_html": "X<sub>2</sub>Y<sub>4-6</sub>Z<sub>8</sub>O<sub>20</sub>(OH, F)<sub>4</sub>",
            "origin": ["Worldwide"],
            "description": "劈開が著しく、薄い板状に剥がれる鉱物のグループ名。多様な化学組成と種類が存在する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "雲母グループ",
            "habit": ["板状", "鱗片状"],
            "occurrence": ["造岩鉱物", "変成鉱物", "火成岩"],
            "strunz_classification": "09.EC"
          },
          {
            "id": 3,
            "name_jp": "ミメット鉱",
            "name_en": "MIMETITE",
            "chemical_formula_html": "Pb<sub>5</sub>(AsO<sub>4</sub>)<sub>3</sub>Cl",
            "origin": ["Mexico", "USA", "Germany"],
            "description": "燐酸塩鉱物であるアパタイトグループに属する砒酸塩鉱物。しばしば六角柱状の結晶や球状の集合体で産出する。黄色、橙黄色、褐色などを呈する。",
            "symmetry": "六方晶系",
            "crystal_structure": "燐灰石グループ",
            "habit": ["柱状", "六角柱状", "球状", "腎臓状", "塊状"],
            "occurrence": ["鉱石鉱物", "鉛鉱床の酸化帯"],
            "strunz_classification": "08.BN.05"
          },
          {
            "id": 4,
            "name_jp": "微斜長石",
            "name_en": "MICROCLINE",
            "chemical_formula_html": "KAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": ["Worldwide"],
            "description": "カリウム長石の一種。三斜晶系に属し、格子双晶による微細な縞模様（アルバイト双晶とペリクリン双晶の複合）を示すことがある。ペルスの輝きを持つものはアマゾナイトと呼ばれる。",
            "symmetry": "三斜晶系",
            "crystal_structure": "長石グループ",
            "habit": ["柱状", "塊状", "板状"],
            "occurrence": ["造岩鉱物", "火成岩", "ペグマタイト"],
            "strunz_classification": "09.FA.30"
          },
          {
            "id": 5,
            "name_jp": "モルガナイト",
            "name_en": "MORGANITE",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>(SiO<sub>6</sub>)<sub>3</sub>",
            "origin": ["Brazil", "Madagascar", "USA"],
            "description": "ピンク色から橙色のベリルの一種。マンガンによって発色する。柱状または板状の結晶で産出する。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリルグループ",
            "habit": ["柱状", "板状"],
            "occurrence": ["ペグマタイト", "グライゼン"],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": null,
            "name_jp": "モットラム石",
            "name_en": "MOTTRAMITE",
            "chemical_formula_html": "PbCu(VO<sub>4</sub>)(OH)",
            "origin": [
              "Namibia",
              "United Kingdom",
              "USA"
            ],
            "description": "バナジン酸塩鉱物の一種で、鮮やかな緑色を示すことが多い。孔雀石などと共産することがある。",
            "symmetry": "斜方晶系",
            "crystal_structure": null,
            "habit": [
              "針状",
              "繊維状",
              "塊状",
              "鍾乳状"
            ],
            "occurrence": [
              "二次鉱物",
              "酸化帯"
            ],
            "strunz_classification": "08.BH.40"
          },
          {
            "id": null,
            "name_jp": "白雲母",
            "name_en": "MUSCOVITE",
            "chemical_formula_html": "KAl<sub>2</sub>(AlSi<sub>3</sub>)O<sub>10</sub>(OH)<sub>2</sub>",
            "origin": [
              "Japan",
              "Brazil",
              "Russia",
              "USA"
            ],
            "description": "劈開が完全な板状結晶となる雲母の一種。無色透明または淡い色を呈し、絶縁材などに利用される。",
            "symmetry": "単斜晶系",
            "crystal_structure": "雲母グループ",
            "habit": [
              "板状",
              "鱗片状",
              "柱状"
            ],
            "occurrence": [
              "造岩鉱物",
              "変成鉱物",
              "火成岩"
            ],
            "strunz_classification": "09.EC.15"
          },
          {
            "id": null,
            "name_jp": "ネプチュナイト",
            "name_en": "NEPTUNITE",
            "chemical_formula_html": "KNa<sub>2</sub>Li(Fe<sup>2+</sup>,Mn<sup>2+</sup>)<sub>2</sub>Ti<sub>2</sub>Si<sub>8</sub>O<sub>24</sub>",
            "origin": [
              "Greenland",
              "Russia",
              "USA",
              "Canada"
            ],
            "description": "赤褐色から黒色の柱状結晶をなす比較的稀な珪酸塩鉱物。アルカリ岩中に産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": null,
            "habit": [
              "柱状",
              "錐状"
            ],
            "occurrence": [
              "火成岩",
              "アルカリ岩"
            ],
            "strunz_classification": "09.EH.05"
          },
          {
            "id": null,
            "name_jp": "オーケン石",
            "name_en": "OKENITE",
            "chemical_formula_html": "Ca<sub>10</sub>Si<sub>18</sub>O<sub>46</sub>・18H<sub>2</sub>O",
            "origin": [
              "India",
              "Greenland",
              "Ireland",
              "South Africa"
            ],
            "description": "白色の放射状または球状の集合体をなす含水珪酸カルシウム鉱物。しばしば綿毛のような外観を示す。",
            "symmetry": "三斜晶系",
            "crystal_structure": null,
            "habit": [
              "球状",
              "放射状",
              "繊維状",
              "針状"
            ],
            "occurrence": [
              "熱水鉱脈",
              "玄武岩の晶洞"
            ],
            "strunz_classification": "09.HA.05"
          },
          {
            "id": null,
            "name_jp": "オルミ石",
            "name_en": "OLMIITE",
            "chemical_formula_html": "Ca(Mn<sup>2+</sup>,Mg)(CO<sub>3</sub>)<sub>2</sub>",
            "origin": [
              "South Africa"
            ],
            "description": "比較的稀な炭酸塩鉱物で、ピンク色や白色を呈する。菱面体状の結晶や塊状で産出する。",
            "symmetry": "三方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": [
              "菱面体状",
              "塊状"
            ],
            "occurrence": [
              "変成岩"
            ],
            "strunz_classification": "05.AB.60"
          },
          {
            "id": null,
            "name_jp": "橄欖銅鉱",
            "name_en": "OLIVENITE",
            "chemical_formula_html": "Cu<sub>2</sub>AsO<sub>4</sub>(OH)",
            "origin": ["イギリス", "ザイール", "アメリカ合衆国"],
            "description": "オリーブ緑色を帯びた、銅と砒素の含水酸化物。針状、繊維状、または塊状で産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": null,
            "habit": ["針状", "繊維状", "塊状"],
            "occurrence": ["鉱石鉱物"],
            "strunz_classification": "08.AD.45"
          },
          {
            "id": null,
            "name_jp": "蛋白石",
            "name_en": "OPAL",
            "chemical_formula_html": "SiO<sub>2</sub>・n<small>H</small><sub>2</sub>O",
            "origin": ["オーストラリア", "メキシコ", "ブラジル"],
            "description": "非晶質の含水二酸化ケイ素。遊色効果を示すプレシャスオパールと、示さないコモンオパールに分けられる。",
            "symmetry": "非晶質",
            "crystal_structure": "石英グループ",
            "habit": ["塊状", "腎臓状", "滴状"],
            "occurrence": ["鉱石鉱物", "熱水鉱床", "堆積岩中"],
            "strunz_classification": "04.DA.10"
          },
          {
            "id": null,
            "name_jp": "正長石",
            "name_en": "ORTHOCLASE",
            "chemical_formula_html": "KAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": ["ドイツ", "マダガスカル", "ブラジル"],
            "description": "カリウムを主成分とする単斜晶系の長石。造岩鉱物として広く分布する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "長石グループ",
            "habit": ["柱状", "板状", "塊状"],
            "occurrence": ["造岩鉱物", "火成岩", "変成岩"],
            "strunz_classification": "09.FA.30"
          },
          {
            "id": null,
            "name_jp": "パパゴアイト",
            "name_en": "PAPAGOITE",
            "chemical_formula_html": "CaCuAlSi<sub>2</sub>O<sub>6</sub>(OH)",
            "origin": ["アメリカ合衆国 (アリゾナ州)"],
            "description": "鮮やかな青色の、比較的稀な含水珪酸塩鉱物。主に銅鉱床の酸化帯で見られる。",
            "symmetry": "単斜晶系",
            "crystal_structure": null,
            "habit": ["柱状", "繊維状", "塊状", "放射状"],
            "occurrence": ["変成鉱物", "酸化帯"],
            "strunz_classification": "09.DH.30"
          },
          {
            "id": null,
            "name_jp": "パーガス閃石",
            "name_en": "PARGASITE",
            "chemical_formula_html": "NaCa<sub>2</sub>(Mg,Fe<sup>2+</sup>)<sub>4</sub>AlSi<sub>6</sub>Al<sub>2</sub>O<sub>22</sub>(OH)<sub>2</sub>",
            "origin": ["フィンランド", "カナダ", "アメリカ合衆国"],
            "description": "ナトリウムとカルシウムを含む、複雑な組成の単斜晶系の角閃石グループの鉱物。緑色から暗緑色を呈する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "角閃石グループ",
            "habit": ["柱状", "板状", "粒状", "放射状"],
            "occurrence": ["変成岩", "火成岩"],
            "strunz_classification": "09.DE.15"
          },
          {
            "id": 1,
            "name_jp": "ペクトライト",
            "name_en": "PECTOLITE",
            "chemical_formula_html": "Ca<sub>2</sub>NaSi<sub>3</sub>O<sub>8</sub>(OH)",
            "origin": [
              "Japan",
              "USA",
              "Canada",
              "Italy"
            ],
            "description": "針状または放射状の結晶、塊状で産出する。白色、灰色、緑色などを呈する。",
            "symmetry": "三斜晶系",
            "crystal_structure": "鎖状珪酸塩",
            "habit": [
              "針状",
              "放射状",
              "塊状"
            ],
            "occurrence": [
              "変成鉱物",
              "火成岩"
            ],
            "strunz_classification": "09.DG.05"
          },
          {
            "id": 2,
            "name_jp": "ペリドット",
            "name_en": "PERIDOT",
            "chemical_formula_html": "(Mg, Fe)<sub>2</sub>SiO<sub>4</sub>",
            "origin": [
              "USA",
              "Myanmar",
              "Pakistan",
              "Egypt",
              "China"
            ],
            "description": "橄欖石（かんらんせき）のうち、宝石として扱われるもの。黄緑色から緑色を呈する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "ネソ珪酸塩",
            "habit": [
              "柱状",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "火成岩",
              "変成鉱物"
            ],
            "strunz_classification": "09.AC.09"
          },
          {
            "id": 3,
            "name_jp": "ペッツォッタイト",
            "name_en": "PEZZOTTAITE",
            "chemical_formula_html": "Cs(Be<sub>2</sub>Li)Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "origin": [
              "Madagascar",
              "Afghanistan"
            ],
            "description": "ベリルの一種で、セシウムとリチウムを含むピンク色の希少な鉱物。",
            "symmetry": "六方晶系",
            "crystal_structure": "環状珪酸塩",
            "habit": [
              "柱状",
              "板状"
            ],
            "occurrence": [
              "ペグマタイト"
            ],
            "strunz_classification": "09.CJ.08"
          },
          {
            "id": 4,
            "name_jp": "ホスホフィライト",
            "name_en": "PHOSPHOPHYLLITE",
            "chemical_formula_html": "Zn<sub>2</sub>(Fe, Mn)(PO<sub>4</sub>)<sub>2</sub> · 4H<sub>2</sub>O",
            "origin": [
              "Germany",
              "USA",
              "Bolivia"
            ],
            "description": "美しい青緑色の希少な鉱物。劈開が完全で脆い。",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩鉱物",
            "habit": [
              "板状",
              "柱状",
              "双晶"
            ],
            "occurrence": [
              "ペグマタイト",
              "熱水鉱脈"
            ],
            "strunz_classification": "08.CB.40"
          },
          {
            "id": 5,
            "name_jp": "プランシェ石",
            "name_en": "PLANCHEITE",
            "chemical_formula_html": "Cu<sub>8</sub>Si<sub>8</sub>O<sub>22</sub>(OH)<sub>4</sub> · H<sub>2</sub>O",
            "origin": [
              "Congo",
              "USA",
              "Namibia"
            ],
            "description": "青色から青緑色の繊維状または放射状の結晶で産出する。マラカイトなどと共産することが多い。",
            "symmetry": "斜方晶系",
            "crystal_structure": "鎖状珪酸塩",
            "habit": [
              "繊維状",
              "放射状",
              "塊状"
            ],
            "occurrence": [
              "酸化帯"
            ],
            "strunz_classification": "09.DB.35"
          },
          {
            "id": null,
            "name_jp": "プラムボガム石",
            "name_en": "PLUMBOGUMMITE",
            "chemical_formula_html": "PbAl<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(OH)<sub>5</sub>·H<sub>2</sub>O",
            "origin": [],
            "description": "リン酸塩鉱物の一種。鉛とアルミニウムを含む二次鉱物として、鉛鉱床の酸化帯に産出する。",
            "symmetry": "六方晶系",
            "crystal_structure": null,
            "habit": ["塊状", "球状"],
            "occurrence": ["鉱石鉱物", "変成鉱物"],
            "strunz_classification": "08.DH.15"
          },
          {
            "id": null,
            "name_jp": "ポルックス石",
            "name_en": "POLLUCITE",
            "chemical_formula_html": "(Cs,Na)[AlSi<sub>2</sub>O<sub>6</sub>]·nH<sub>2</sub>O, where (Cs+n)=1",
            "origin": [],
            "description": "セシウムを主成分とするテクト珪酸塩鉱物。ペグマタイト中に産出する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "ゼオライトグループ",
            "habit": ["塊状", "粒状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.GB.05"
          },
          {
            "id": null,
            "name_jp": "葡萄石",
            "name_en": "PREHNITE",
            "chemical_formula_html": "Ca<sub>2</sub>AlAlSi<sub>3</sub>O<sub>10</sub>(OH)<sub>2</sub>",
            "origin": [],
            "description": "フィロ珪酸塩鉱物の一種。ブドウのような球状集合を示すことが多い。",
            "symmetry": "斜方晶系",
            "crystal_structure": "プレナイトグループ",
            "habit": ["塊状", "球状", "柱状", "板状"],
            "occurrence": ["変成鉱物", "火成岩"],
            "strunz_classification": "09.DP.20"
          },
          {
            "id": null,
            "name_jp": "淡紅銀鉱",
            "name_en": "PROUSTITE",
            "chemical_formula_html": "Ag<sub>3</sub>AsS<sub>3</sub>",
            "origin": [],
            "description": "硫化鉱物の一種。ルビーのような赤い色合いを持つ銀鉱石。",
            "symmetry": "三方晶系",
            "crystal_structure": "淡紅銀鉱グループ",
            "habit": ["柱状", "錐状", "塊状", "粒状"],
            "occurrence": ["鉱石鉱物", "熱水鉱床"],
            "strunz_classification": "02.GA.05"
          },
          {
            "id": null,
            "name_jp": "黄鉄鉱",
            "name_en": "PYRITE",
            "chemical_formula_html": "FeS<sub>2</sub>",
            "origin": [],
            "description": "硫化鉱物の一種。「愚者の金」としても知られる一般的な鉱物。",
            "symmetry": "等軸晶系",
            "crystal_structure": "黄鉄鉱グループ",
            "habit": ["立方体", "八面体", "十二面体", "塊状", "粒状"],
            "occurrence": ["鉱石鉱物", "変成鉱物", "火成岩", "堆積岩"],
            "strunz_classification": "02.EB.05a"
          },
          {
            "id": 1,
            "name_jp": "緑鉛鉱",
            "name_en": "PYROMORPHITE",
            "chemical_formula_html": "Pb<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>Cl",
            "origin": [
              "Japan",
              "Germany",
              "USA"
            ],
            "description": "鉛の二次鉱物として生成し、一般的に緑色を呈するリン酸塩鉱物です。六角柱状の結晶や塊状、球状などの形態で見られます。",
            "symmetry": "六方晶系",
            "crystal_structure": "燐灰石グループ",
            "habit": [
              "柱状",
              "塊状",
              "球状"
            ],
            "occurrence": [
              "鉱石鉱物"
            ],
            "strunz_classification": "08.BN.05"
          },
          {
            "id": 2,
            "name_jp": "パイロクスマンガン石",
            "name_en": "PYROXMANGITE",
            "chemical_formula_html": "(Mn,Fe)<sub>7</sub>Si<sub>7</sub>O<sub>21</sub>",
            "origin": [
              "USA",
              "Sweden",
              "Japan"
            ],
            "description": "マンガンを主成分とする鎖状珪酸塩鉱物で、ピンク色から赤褐色を呈します。三斜晶系の劈開を持つ柱状や板状の結晶、または粒状や塊状で産出します。",
            "symmetry": "三斜晶系",
            "crystal_structure": "パイロクスマンガン輝石グループ",
            "habit": [
              "柱状",
              "板状",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "変成鉱物"
            ],
            "strunz_classification": "09.DO.02"
          },
          {
            "id": 3,
            "name_jp": "磁硫鉄鉱",
            "name_en": "PYRRHOTITE",
            "chemical_formula_html": "Fe<sub>1-x</sub>S",
            "origin": [
              "Canada",
              "Sweden",
              "Japan"
            ],
            "description": "鉄と硫黄からなる硫化鉱物で、組成式はFe₁-xSで表されます。単斜晶系と六方晶系の多形を持ち、金属光沢のある褐色から黒色の塊状や粒状、板状などで産出します。磁性を持つことが特徴です。",
            "symmetry": "単斜晶系・六方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": [
              "塊状",
              "粒状",
              "板状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "火成岩",
              "変成鉱物"
            ],
            "strunz_classification": "02.CC.10"
          },
          {
            "id": 4,
            "name_jp": "石英",
            "name_en": "QUARTZ",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": [
              "Worldwide"
            ],
            "description": "二酸化ケイ素（SiO₂）からなる鉱物で、非常に多様な変種が存在します。一般的に無色透明ですが、不純物により様々な色を呈します。三方晶系の結晶や塊状、粒状などで広く産出する造岩鉱物です。",
            "symmetry": "三方晶系",
            "crystal_structure": "石英グループ",
            "habit": [
              "柱状",
              "錐状",
              "塊状",
              "粒状"
            ],
            "occurrence": [
              "造岩鉱物",
              "鉱石鉱物",
              "変成鉱物",
              "火成岩"
            ],
            "strunz_classification": "04.DA.05"
          },
          {
            "id": 5,
            "name_jp": "レッドベリル",
            "name_en": "RED_BERYL",
            "chemical_formula_html": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
            "origin": [
              "USA (Utah)"
            ],
            "description": "マンガンによって赤色に発色するベリルの変種で、非常に希少な宝石です。六方晶系の柱状結晶として産出します。",
            "symmetry": "六方晶系",
            "crystal_structure": "ベリルグループ",
            "habit": [
              "柱状"
            ],
            "occurrence": [
              "ペグマタイト",
              "流紋岩質溶岩の晶洞"
            ],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": 1,
            "name_jp": "菱マンガン鉱",
            "name_en": "RHODOCHROSITE",
            "chemical_formula_html": "MnCO<sub>3</sub>",
            "origin": ["Japan", "Argentina", "USA"],
            "description": "淡紅色から褐色の炭酸塩鉱物。美しいものは研磨され装飾品となる。",
            "symmetry": "三方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["塊状", "菱面体", "犬牙状"],
            "occurrence": ["鉱石鉱物", "熱水鉱脈"],
            "strunz_classification": "05.AB.07"
          },
          {
            "id": 2,
            "name_jp": "ばら輝石",
            "name_en": "RHODONITE",
            "chemical_formula_html": "(Mn,Ca)<sub>5</sub>Si<sub>5</sub>O<sub>15</sub>",
            "origin": ["Japan", "Australia", "Brazil"],
            "description": "ピンク色または赤色の連鎖状珪酸塩鉱物。マンガンの重要な鉱石鉱物の一つ。",
            "symmetry": "三斜晶系",
            "crystal_structure": "連鎖状珪酸塩鉱物",
            "habit": ["柱状", "板状", "塊状", "粒状"],
            "occurrence": ["変成鉱物", "熱水鉱脈", "スカルン鉱床"],
            "strunz_classification": "09.DK.03"
          },
          {
            "id": 3,
            "name_jp": "褐簾石",
            "name_en": "ROMANECHITE",
            "chemical_formula_html": "(Ba,H<sub>2</sub>O)<sub>2</sub>Mn<sub>5</sub>O<sub>10</sub>",
            "origin": ["Germany", "USA", "Japan"],
            "description": "黒色または暗褐色の酸化鉱物。マンガンの重要な鉱石鉱物。",
            "symmetry": "単斜晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["腎臓状", "塊状", "樹枝状"],
            "occurrence": ["堆積鉱床", "風化帯"],
            "strunz_classification": "04.DK.05"
          },
          {
            "id": 4,
            "name_jp": "ローザ石",
            "name_en": "ROSASITE",
            "chemical_formula_html": "(Cu,Zn)<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
            "origin": ["Chile", "Mexico", "USA"],
            "description": "緑色から青緑色の炭酸塩鉱物。孔雀石やアズライトと共産することが多い。",
            "symmetry": "単斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["球状", "腎臓状", "鍾乳石状", "薄片状"],
            "occurrence": ["酸化帯", "二次鉱物"],
            "strunz_classification": "05.BA.10"
          },
          {
            "id": 5,
            "name_jp": "紅水晶",
            "name_en": "ROSE QUARTZ",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": ["Brazil", "USA", "South Africa"],
            "description": "淡いピンク色から濃いピンク色の石英。微量のチタンやマンガンにより発色すると考えられている。",
            "symmetry": "三方晶系",
            "crystal_structure": "石英グループ",
            "habit": ["塊状", "柱状（稀）"],
            "occurrence": ["ペグマタイト", "熱水鉱脈"],
            "strunz_classification": "04.DA.05"
          },
          {
            "id": null,
            "name_jp": "ルベライト",
            "name_en": "RUBELLITE",
            "chemical_formula_html": "LiAlSiO<sub>3</sub>(OH,F)<sub>3</sub>",
            "origin": ["Brazil", "Madagascar", "Myanmar", "Nigeria", "USA"],
            "description": "ピンク色から赤色のリチウム電気石（トルマリン）の変種です。宝石として珍重されます。",
            "symmetry": "三方晶系",
            "crystal_structure": "トルマリングループ",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["ペグマタイト", "熱水鉱脈"],
            "strunz_classification": "09.CK門 環状珪酸塩鉱物"
          },
          {
            "id": null,
            "name_jp": "ルビー",
            "name_en": "RUBY",
            "chemical_formula_html": "Al<sub>2</sub>O<sub>3</sub>",
            "origin": ["Myanmar", "Thailand", "Sri Lanka", "Mozambique", "Vietnam"],
            "description": "コランダム（酸化アルミニウム）の変種で、クロムによって赤色を呈します。ダイヤモンドに次ぐ硬度を持ち、貴重な宝石です。",
            "symmetry": "三方晶系",
            "crystal_structure": "コランダムグループ",
            "habit": ["柱状", "板状", "菱面体"],
            "occurrence": ["変成岩", "火成岩（玄武岩質）", "砂鉱床"],
            "strunz_classification": "04.CB門 酸化鉱物"
          },
          {
            "id": null,
            "name_jp": "ルチル",
            "name_en": "RUTILE",
            "chemical_formula_html": "TiO<sub>2</sub>",
            "origin": ["Australia", "Brazil", "South Africa", "India", "USA"],
            "description": "酸化チタン(TiO₂)の主要な鉱物の一つです。多くの場合、金色の針状結晶として産出し、他の鉱物（水晶など）に内包されることもあります。",
            "symmetry": "正方晶系",
            "crystal_structure": "ルチルグループ",
            "habit": ["柱状", "針状", "双晶"],
            "occurrence": ["火成岩", "変成岩", "堆積岩", "砂鉱床"],
            "strunz_classification": "04.DB門 酸化鉱物"
          },
          {
            "id": null,
            "name_jp": "塩化アンモン石",
            "name_en": "SALAMMONIAC",
            "chemical_formula_html": "NH<sub>4</sub>Cl",
            "origin": ["火山地帯の噴気孔", "堆積鉱床"],
            "description": "塩化アンモニウム (NH₄Cl) の天然に産する鉱物です。火山活動や一部の堆積環境で形成されます。潮解性があります。",
            "symmetry": "等軸晶系",
            "crystal_structure": "塩化ナトリウム型構造",
            "habit": ["等軸晶", "粒状", "皮膜状"],
            "occurrence": ["火山性噴気孔", "石炭層の燃焼による昇華物", "一部の湖や乾燥地の堆積物"],
            "strunz_classification": "03.AA門 ハロゲン化物"
          },
          {
            "id": null,
            "name_jp": "サファイア",
            "name_en": "SAPPHIRE",
            "chemical_formula_html": "Al<sub>2</sub>O<sub>3</sub>",
            "origin": ["Myanmar", "Sri Lanka", "Kashmir (India)", "Thailand", "Australia", "Madagascar"],
            "description": "コランダム（酸化アルミニウム）の変種で、ルビー以外のすべての色のものを指します。微量の遷移金属によって様々な色を呈し、宝石として非常に価値があります。",
            "symmetry": "三方晶系",
            "crystal_structure": "コランダムグループ",
            "habit": ["柱状", "樽型", "板状", "菱面体"],
            "occurrence": ["変成岩", "火成岩（玄武岩質）", "砂鉱床"],
            "strunz_classification": "04.CB門 酸化鉱物"
          },
          {
            "id": null,
            "name_jp": "苦土電気石",
            "name_en": "SCHORL",
            "chemical_formula_html": "NaFe<sup>2+</sup><sub>3</sub>Al<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>Si<sub>6</sub>O<sub>18</sub>(OH)<sub>4</sub>",
            "origin": ["Brazil", "Sri Lanka", "USA"],
            "description": "黒色の電気石（トルマリン）の一種。鉄を主成分とし、柱状または針状の結晶で産出することが多い。",
            "symmetry": "六方晶系",
            "crystal_structure": "電気石グループ",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["ペグマタイト", "熱水鉱脈", "変成岩"],
            "strunz_classification": "09.CK.05"
          },
          {
            "id": null,
            "name_jp": "スコレス沸石",
            "name_en": "SCOLECITE",
            "chemical_formula_html": "CaAl<sub>2</sub>Si<sub>3</sub>O<sub>10</sub>·3H<sub>2</sub>O",
            "origin": ["India", "Iceland", "Brazil"],
            "description": "白色または無色の針状、繊維状の結晶で産出する沸石の一種。加熱すると曲がる性質を持つ。",
            "symmetry": "単斜晶系",
            "crystal_structure": "沸石グループ",
            "habit": ["針状", "繊維状", "放射状"],
            "occurrence": ["玄武岩の晶洞", "熱水鉱脈"],
            "strunz_classification": "09.GA.05"
          },
          {
            "id": null,
            "name_jp": "透石膏",
            "name_en": "SELENITE",
            "chemical_formula_html": "CaSO<sub>4</sub>·2H<sub>2</sub>O",
            "origin": ["Mexico", "USA", "Morocco"],
            "description": "石膏（ジプサム）の透明で劈開が完全な結晶の変種。板状、柱状、繊維状など多様な形態を示す。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": ["板状", "柱状", "繊維状", "塊状"],
            "occurrence": ["蒸発岩鉱床", "堆積岩中"],
            "strunz_classification": "07.CD.40"
          },
          {
            "id": null,
            "name_jp": "シャタック石",
            "name_en": "SHATTUCKITE",
            "chemical_formula_html": "Cu<sub>5</sub>(SiO<sub>3</sub>)<sub>4</sub>(OH)<sub>2</sub>",
            "origin": ["USA (Arizona)", "Congo (Kinshasa)", "Namibia"],
            "description": "鮮やかな青色の珪酸塩鉱物。孔雀石やクリソコラなどと共産することが多い。",
            "symmetry": "斜方晶系",
            "crystal_structure": "鎖状珪酸塩鉱物",
            "habit": ["針状", "繊維状", "放射状", "塊状"],
            "occurrence": ["銅鉱床の酸化帯"],
            "strunz_classification": "09.DH.10"
          },
          {
            "id": null,
            "name_jp": "菱鉄鉱",
            "name_en": "SIDERITE",
            "chemical_formula_html": "FeCO<sub>3</sub>",
            "origin": ["Germany", "UK", "USA"],
            "description": "鉄の炭酸塩鉱物。通常、菱面体または塊状で産出し、酸化すると褐鉄鉱に変化しやすい。",
            "symmetry": "三方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["菱面体", "塊状", "粒状", "球状"],
            "occurrence": ["熱水鉱脈", "堆積岩", "変成岩"],
            "strunz_classification": "05.AB.05"
          },
          {
            "id": 1,
            "name_jp": "菱亜鉛鉱",
            "name_en": "SMITHSONITE",
            "chemical_formula_html": "ZnCO<sub>3</sub>",
            "origin": ["Japan", "USA", "Mexico", "Namibia"],
            "description": "炭酸亜鉛からなる鉱物。通常は塊状や土状で産出し、ガラス光沢を持つ。",
            "symmetry": "三方晶系",
            "crystal_structure": "方解石グループ",
            "habit": ["塊状", "土状", "球状", "ブドウ状"],
            "occurrence": ["鉱石鉱物", "二次鉱物"],
            "strunz_classification": "05.AB.05"
          },
          {
            "id": 2,
            "name_jp": "煙水晶",
            "name_en": "SMOKY QUARTZ",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": ["Brazil", "Switzerland", "USA", "Japan"],
            "description": "水晶の一種で、遊色効果のない透明または半透明の灰色から黒色のものを指す。色は自然の放射線照射による。",
            "symmetry": "六方晶系",
            "crystal_structure": "石英グループ",
            "habit": ["柱状", "両錐状"],
            "occurrence": ["火成岩", "熱水鉱脈", "ペグマタイト"],
            "strunz_classification": "04.DA.05"
          },
          {
            "id": 3,
            "name_jp": "鏡鉄鉱",
            "name_en": "SPECULARITE",
            "chemical_formula_html": "Fe<sub>2</sub>O<sub>3</sub>",
            "origin": ["Brazil", "England", "USA", "Italy"],
            "description": "赤鉄鉱（ヘマタイト）の板状または鱗片状の結晶を示す変種。金属光沢が強く、鏡のように見える。",
            "symmetry": "三方晶系",
            "crystal_structure": "コランダムグループ",
            "habit": ["板状", "鱗片状", "バラ状"],
            "occurrence": ["変成鉱物", "熱水鉱脈", "堆積岩"],
            "strunz_classification": "04.CB.05"
          },
          {
            "id": 4,
            "name_jp": "満礬柘榴石",
            "name_en": "SPESSARTINE",
            "chemical_formula_html": "Mn<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": ["Brazil", "Sri Lanka", "USA", "Madagascar"],
            "description": "マンガンとアルミニウムを主成分とする柘榴石（ガーネット）の一種。通常、褐色から赤色の透明な結晶で産出する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": ["菱形十二面体", "正二十四面体", "塊状"],
            "occurrence": ["ペグマタイト", "変成岩", "熱水鉱脈"],
            "strunz_classification": "09.AD.20"
          },
          {
            "id": 5,
            "name_jp": "閃亜鉛鉱",
            "name_en": "SPHALERITE",
            "chemical_formula_html": "ZnS",
            "origin": ["USA", "Canada", "Mexico", "Peru", "Japan"],
            "description": "硫化亜鉛からなる鉱物。亜鉛の重要な鉱石鉱物であり、鉄の含有量により色や光沢が変化する。",
            "symmetry": "等軸晶系",
            "crystal_structure": "閃亜鉛鉱グループ",
            "habit": ["正四面体", "菱形十二面体", "立方体", "塊状"],
            "occurrence": ["鉱石鉱物", "熱水鉱脈", "スカルン"],
            "strunz_classification": "02.CB.05"
          },
          {
            "id": 1,
            "name_jp": "リシア輝石",
            "name_en": "SPODUMENE",
            "chemical_formula_html": "LiAlSi<sub>2</sub>O<sub>6</sub>",
            "origin": ["Afghanistan", "Australia", "Brazil", "Madagascar", "USA"],
            "description": "リチウムの重要な鉱石鉱物の一つ。ペグマタイト中に大きな柱状または板状の結晶として産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "輝石グループ",
            "habit": ["柱状", "板状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "09.DA.05"
          },
          {
            "id": 2,
            "name_jp": "スピネル",
            "name_en": "SPINEL",
            "chemical_formula_html": "MgAl<sub>2</sub>O<sub>4</sub>",
            "origin": ["Sri Lanka", "Myanmar", "Thailand", "Vietnam", "Madagascar"],
            "description": "マグネシウムとアルミニウムの酸化物からなる鉱物。美しい色合いのものが宝石として扱われる。",
            "symmetry": "等軸晶系",
            "crystal_structure": "スピネルグループ",
            "habit": ["八面体", "立方体", "塊状", "粒状"],
            "occurrence": ["変成岩", "火成岩", "砂鉱床"],
            "strunz_classification": "04.BB.05"
          },
          {
            "id": 3,
            "name_jp": "輝安鉱",
            "name_en": "STIBNITE",
            "chemical_formula_html": "Sb<sub>2</sub>S<sub>3</sub>",
            "origin": ["Japan", "China", "Romania", "Peru", "USA"],
            "description": "アンチモンの重要な鉱石鉱物。金属光沢を持つ柱状または針状の結晶として産出する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["柱状", "針状", "塊状", "放射状"],
            "occurrence": ["熱水鉱床"],
            "strunz_classification": "02.DB.05"
          },
          {
            "id": 4,
            "name_jp": "スティルバイト",
            "name_en": "STILBITE",
            "chemical_formula_html": "NaCa<sub>2</sub>Al<sub>5</sub>Si<sub>13</sub>O<sub>36</sub>·14H<sub>2</sub>O (代表的な組成)",
            "origin": ["India", "Iceland", "Scotland", "Brazil", "USA"],
            "description": "沸石グループに属する鉱物で、束状または放射状の集合体として産出することが多い。劈開が完全で真珠光沢を持つ。",
            "symmetry": "単斜晶系",
            "crystal_structure": "沸石グループ",
            "habit": ["束状", "放射状", "板状"],
            "occurrence": ["玄武岩の晶洞", "熱水鉱脈"],
            "strunz_classification": "09.GE.10"
          },
          {
            "id": 5,
            "name_jp": "ストロンチアン石",
            "name_en": "STRONTIANITE",
            "chemical_formula_html": "SrCO<sub>3</sub>",
            "origin": ["Germany", "UK", "Russia", "USA", "Mexico"],
            "description": "ストロンチウムの主要な鉱石鉱物の一つ。柱状、針状、または塊状で産出する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["柱状", "針状", "塊状", "放射状"],
            "occurrence": ["低温熱水鉱脈", "堆積岩中の空隙"],
            "strunz_classification": "05.AB.15"
          },
          {
            "id": 1,
            "name_jp": "硫黄",
            "name_en": "SULFUR",
            "chemical_formula_html": "S<sub>8</sub>",
            "origin": [
              "Japan",
              "Italy",
              "USA"
            ],
            "description": "特有の刺激臭を持つ黄色の非金属元素。火山地帯や温泉地帯で産出するほか、硫化鉱物の酸化によっても生成される。",
            "symmetry": "斜方晶系",
            "crystal_structure": "元素鉱物グループ",
            "habit": [
              "塊状",
              "柱状",
              "錐状"
            ],
            "occurrence": [
              "火山",
              "温泉",
              "鉱石鉱物"
            ],
            "strunz_classification": "01族 元素鉱物"
          },
          {
            "id": 2,
            "name_jp": "タンザナイト",
            "name_en": "TANZANITE",
            "chemical_formula_html": "Ca<sub>2</sub>Al<sub>3</sub>(SiO<sub>4</sub>)<sub>3</sub>(OH)",
            "origin": [
              "Tanzania (Merelani Hills)"
            ],
            "description": "青色から青紫色を呈するゾイサイト（灰簾石）の変種。多色性を示し、見る角度によって色が変わる。タンザニアのメレラニ鉱山でのみ産出する希少な宝石。",
            "symmetry": "斜方晶系",
            "crystal_structure": "珪酸塩鉱物グループ (ゾイサイト)",
            "habit": [
              "柱状",
              "塊状"
            ],
            "occurrence": [
              "変成鉱物"
            ],
            "strunz_classification": "09族 珪酸塩鉱物"
          },
          {
            "id": 3,
            "name_jp": "タンタライト",
            "name_en": "TANTALITE",
            "chemical_formula_html": "(Fe,Mn)Ta<sub>2</sub>O<sub>6</sub>",
            "origin": [
              "Australia",
              "Brazil",
              "Canada"
            ],
            "description": "タンタルを主成分とする酸化鉱物。ニオブを含むとコロンバイトと連続固溶体を形成する。重要なレアメタル資源。",
            "symmetry": "斜方晶系",
            "crystal_structure": "酸化鉱物グループ (コロンバイト-タンタライト)",
            "habit": [
              "柱状",
              "板状",
              "塊状"
            ],
            "occurrence": [
              "ペグマタイト"
            ],
            "strunz_classification": "04族 酸化鉱物"
          },
          {
            "id": 4,
            "name_jp": "安四面銅鉱",
            "name_en": "TETRAHEDRITE",
            "chemical_formula_html": "Cu<sub>12</sub>Sb<sub>4</sub>S<sub>13</sub>",
            "origin": [
              "Germany",
              "Peru",
              "Japan"
            ],
            "description": "硫化鉱物の一種で、銅とアンチモンを主成分とする。しばしば銀や鉄、亜鉛などを含む。正四面体状の結晶をすることが名前の由来。",
            "symmetry": "等軸晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": [
              "正四面体",
              "塊状",
              "粒状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "熱水鉱床"
            ],
            "strunz_classification": "02族 硫化鉱物"
          },
          {
            "id": 5,
            "name_jp": "チタン石",
            "name_en": "TITANITE",
            "chemical_formula_html": "CaTiSiO<sub>5</sub>",
            "origin": [
              "Canada",
              "Brazil",
              "USA"
            ],
            "description": "くさび形の結晶をすることが多い珪酸塩鉱物。ダイヤモンドに匹敵する分散率を持ち、美しい光沢を示す。スフェーンという別名も持つ。",
            "symmetry": "単斜晶系",
            "crystal_structure": "ネソ珪酸塩鉱物グループ",
            "habit": [
              "くさび形",
              "板状",
              "粒状"
            ],
            "occurrence": [
              "火成岩",
              "変成岩",
              "接触鉱物"
            ],
            "strunz_classification": "09族 珪酸塩鉱物"
          },
          {
            "id": 1,
            "name_jp": "トパーズ",
            "name_en": "TOPAZ",
            "chemical_formula_html": "Al<sub>2</sub>SiO<sub>4</sub>(F,OH)<sub>2</sub>",
            "origin": ["Brazil", "Pakistan", "Russia", "USA"],
            "description": "フルオロ珪酸アルミニウムの鉱物。美しい結晶を産出し、宝石としても人気が高い。和名は黄玉（おうぎょく）だが、実際には黄色だけでなく、無色、青色、ピンク色など様々な色合いのものがある。",
            "symmetry": "斜方晶系",
            "crystal_structure": "ネソ珪酸塩鉱物",
            "habit": ["柱状", "錐状", "板状", "塊状"],
            "occurrence": ["ペグマタイト", "高温熱水鉱脈", "気成鉱床"],
            "strunz_classification": "09.AF門 ネソ珪酸塩鉱物(独立したSiO4四面体)"
          },
          {
            "id": 3,
            "name_jp": "ツァボライト",
            "name_en": "TSAVORITE",
            "chemical_formula_html": "Ca<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": ["Kenya", "Tanzania", "Madagascar"],
            "description": "グロッシュラーガーネット（灰礬柘榴石）の鮮やかな緑色の変種。バナジウムやクロムによって発色する。宝石として高い価値を持つ。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": ["塊状", "粒状", "自形結晶（菱形十二面体、正二十四面体など）"],
            "occurrence": ["変成岩", "接触変成鉱床"],
            "strunz_classification": "09.AD門 ネソ珪酸塩鉱物(独立したSiO4四面体)"
          },
          {
            "id": 4,
            "name_jp": "灰クロム柘榴石",
            "name_en": "UVAROVITE",
            "chemical_formula_html": "Ca<sub>3</sub>Cr<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
            "origin": ["Russia", "Finland", "Canada", "South Africa"],
            "description": "カルシウムとクロムを主成分とする鮮やかな緑色のガーネット。美しい結晶を産出し、宝石としても扱われることがあるが、産出は比較的少ない。",
            "symmetry": "等軸晶系",
            "crystal_structure": "柘榴石グループ",
            "habit": ["塊状", "粒状", "自形結晶（菱形十二面体など）"],
            "occurrence": ["蛇紋岩", "変成岩"],
            "strunz_classification": "09.AD門 ネソ珪酸塩鉱物(独立したSiO4四面体)"
          },
          {
            "id": 5,
            "name_jp": "ウバイト",
            "name_en": "UVITE",
            "chemical_formula_html": "CaMg<sub>3</sub>(MgAl)<sub>6</sub>(BO<sub>3</sub>)<sub>3</sub>(Si<sub>6</sub>O<sub>18</sub>)(OH)<sub>4</sub>",
            "origin": ["Sri Lanka", "Myanmar", "Italy", "USA", "Canada"],
            "description": "トルマリンの一種。比較的マグネシウムに富み、典型的な色は褐色、緑色、黒色など。電気石グループの中では比較的珍しい。",
            "symmetry": "三方晶系",
            "crystal_structure": "環状珪酸塩鉱物（トルマリン・グループ）",
            "habit": ["柱状", "針状", "塊状"],
            "occurrence": ["変成岩", "接触変成鉱床", "マグネシウムに富む岩石中"],
            "strunz_classification": "09.CK門 環状珪酸塩鉱物(Si6O18環を持つ)"
          },
          {
            "id": 1,
            "name_jp": "電気石",
            "name_en": "TOURMALINE",
            "chemical_formula_html": "XY<sub>3</sub>Z<sub>6</sub>(T<sub>6</sub>O<sub>18</sub>)(BO<sub>3</sub>)<sub>3</sub>V<sub>3</sub>W",
            "origin": [
              "Japan",
              "Brazil",
              "United States",
              "Sri Lanka",
              "Madagascar",
              "Afghanistan",
              "Australia",
              "Myanmar",
              "Russia",
              "Africa"
            ],
            "description": "多様な色を示すホウケイ酸鉱物グループ。圧電性や焦電性を持つことで知られる。",
            "symmetry": "三斜晶系",
            "crystal_structure": "トルマリングループ",
            "habit": [
              "柱状",
              "針状",
              "塊状",
              "錐状"
            ],
            "occurrence": [
              "ペグマタイト",
              "熱水鉱脈",
              "変成岩"
            ],
            "strunz_classification": "09.CK門 環状珪酸塩鉱物"
          },
          {
            "id": 1,
            "name_jp": "バナジン鉛鉱",
            "name_en": "VANADINITE",
            "chemical_formula_html": "Pb<sub>5</sub>(VO<sub>4</sub>)<sub>3</sub>Cl",
            "origin": ["Morocco", "USA", "Mexico"],
            "description": "鮮やかな赤色やオレンジ色を呈する鉱物で、鉛とバナジウムを含むリン酸塩鉱物の一種です。六方柱状の結晶や、塊状、粒状などで産出します。",
            "symmetry": "六方晶系",
            "crystal_structure": "燐酸塩グループ",
            "habit": ["柱状", "塊状", "粒状", "錐状"],
            "occurrence": ["鉱石鉱物", "二次鉱物"],
            "strunz_classification": "08.BN.05"
          },
          {
            "id": 2,
            "name_jp": "ヴァウルネン石",
            "name_en": "VÄYRYNENITE",
            "chemical_formula_html": "BeMn<sup>2+</sup>(PO<sub>4</sub>)(OH)",
            "origin": ["Finland", "USA", "Brazil"],
            "description": "ベリリウムとマンガンを含む比較的稀なリン酸塩鉱物です。単斜晶系の柱状または板状の結晶で産出することが多いです。",
            "symmetry": "単斜晶系",
            "crystal_structure": "燐酸塩グループ",
            "habit": ["柱状", "板状", "粒状"],
            "occurrence": ["ペグマタイト"],
            "strunz_classification": "08.BA.05"
          },
          {
            "id": 3,
            "name_jp": "ウェロガン石",
            "name_en": "WELOGANITE",
            "chemical_formula_html": "Sr₃Zr(CO₃)₃(OH)₂·2H₂O",
            "origin": ["Canada"],
            "description": "ストロンチウムとジルコニウムを含む珍しい炭酸塩鉱物です。三斜晶系の比較的複雑な結晶形を示すことで知られています。",
            "symmetry": "三斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["両錐状", "複雑な結晶形"],
            "occurrence": ["堆積岩"],
            "strunz_classification": "05.CC.05"
          },
          {
            "id": 4,
            "name_jp": "ベスブ石",
            "name_en": "VESUVIANITE",
            "chemical_formula_html": "Ca<sub>19</sub>(Fe,Mn)(Al,Mg,Fe)<sub>8</sub>Al<sub>4</sub>(F,OH)<sub>2</sub>(OH,F,O)<sub>8</sub>(SiO<sub>4</sub>)<sub>10</sub>(Si<sub>2</sub>O<sub>7</sub>)<sub>4</sub>",
            "origin": ["Italy", "Canada", "USA"],
            "description": "組成が複雑な珪酸塩鉱物で、正方晶系の柱状や錐状の結晶で産出します。緑色、褐色、黄色など様々な色を呈します。",
            "symmetry": "正方晶系",
            "crystal_structure": "珪酸塩グループ",
            "habit": ["柱状", "錐状", "塊状", "粒状"],
            "occurrence": ["接触変成岩", "スカルン"],
            "strunz_classification": "09.BG.25"
          },
          {
            "id": 5,
            "name_jp": "ベゼリ石",
            "name_en": "VESZELYITE",
            "chemical_formula_html": "(Cu,Zn)<sub>3</sub>(PO<sub>4</sub>)(OH)<sub>3</sub>·2H<sub>2</sub>O",
            "origin": ["Romania", "USA", "Germany"],
            "description": "銅や亜鉛を含む水和リン酸塩鉱物です。単斜晶系の小さな柱状または針状の結晶、球状集合などで産出します。美しい青緑色を呈することが多いです。",
            "symmetry": "単斜晶系",
            "crystal_structure": "燐酸塩グループ",
            "habit": ["柱状", "針状", "球状", "放射状"],
            "occurrence": ["鉱脈の酸化帯"],
            "strunz_classification": "08.DD.15"
          },
          
          {
           "id": 1,
            "name_jp": "藍鉄鉱",
            "name_en": "VIVIANITE",
            "chemical_formula_html": "Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>・8H<sub>2</sub>O",
            "origin": [
              "Japan",
              "Germany",
              "USA"
            ],
            "description": "藍鉄鉱(らんてっこう、vivianite)は、含水リン酸鉄の鉱物。美しい青緑色から濃い青色を呈する。空気中で酸化すると色が濃くなり、最終的には暗青色から黒色になる。",
            "symmetry": "単斜晶系",
            "crystal_structure": "藍鉄鉱グループ",
            "habit": [
             "柱状",
              "板状",
              "放射状",
              "塊状"
            ],
            "occurrence": [
              "鉱脈",
              "洞窟",
              "湖底堆積物",
              "化石"
            ],
            "strunz_classification": "08.CE.40"
          },
          {
            "id": 2,
            "name_jp": "珪亜鉛鉱",
            "name_en": "WILLEMITE",
            "chemical_formula_html": "Zn<sub>2</sub>SiO<sub>4</sub>",
            "origin": [
              "USA",
              "Namibia",
              "DR Congo"
            ],
            "description": "珪亜鉛鉱(けいあえんこう、willemite)は、亜鉛の珪酸塩鉱物。多様な色を示すが、マンガンを含むと赤色やオレンジ色になることが多い。紫外線下で強い緑色の蛍光を示す。",
            "symmetry": "三方晶系",
            "crystal_structure": "フェナカイトグループ",
            "habit": [
              "柱状",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "熱水鉱床",
              "接触変成鉱床"
            ],
            "strunz_classification": "09.AA.05"
          },
          {
            "id": 3,
            "name_jp": "モリブデン鉛鉱",
            "name_en": "WULFENITE",
            "chemical_formula_html": "PbMoO<sub>4</sub>",
            "origin": [
              "USA",
              "Mexico",
              "Morocco"
            ],
            "description": "モリブデン鉛鉱(もりぶでんなまりこう、wulfenite)は、鉛のモリブデン酸塩鉱物。鮮やかな黄色からオレンジ色、赤色などを呈する。正方晶系の板状または錐状の結晶を形成する。",
            "symmetry": "正方晶系",
            "crystal_structure": "灰クロム鉛鉱グループ",
            "habit": [
              "板状",
              "錐状",
              "粒状"
            ],
            "occurrence": [
              "酸化帯"
            ],
            "strunz_classification": "07.GA.05"
          },
          {
            "id": 4,
            "name_jp": "ゼノタイム",
            "name_en": "XENOTIME",
            "chemical_formula_html": "YPO<sub>4</sub>",
            "origin": [
              "Norway",
              "Brazil",
              "Madagascar"
            ],
            "description": "ゼノタイム（希土族燐酸塩鉱物）は、イットリウムを主成分とするリン酸塩鉱物。褐色、黄色、緑色など様々な色を示す。正方晶系の柱状または板状の結晶を形成する。",
            "symmetry": "正方晶系",
            "crystal_structure": "ジルコングループ",
            "habit": [
              "柱状",
              "板状",
              "粒状"
            ],
            "occurrence": [
              "ペグマタイト",
              "花崗岩",
              "砂鉱床"
            ],
            "strunz_classification": "08.AD.35"
          },
          {
            "id": 5,
            "name_jp": "湯河原沸石",
            "name_en": "YUGAWARALITE",
            "chemical_formula_html": "Ca[Al<sub>2</sub>Si<sub>6</sub>O<sub>16</sub>]・4H<sub>2</sub>O",
            "origin": [
              "Japan",
              "Iceland",
              "New Zealand"
            ],
            "description": "湯河原沸石(ゆがわらふっせき、yugawaralite)は、カルシウムを主成分とする沸石の一種。無色または白色の透明感のある結晶で、単斜晶系または三斜晶系に属する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "沸石グループ",
            "habit": [
              "柱状",
              "板状"
            ],
            "occurrence": [
              "熱水変質した火山岩中の空隙"
            ],
            "strunz_classification": "09.GB.10"
          },
          {
            "id": 1,
             "name_jp": "ジンコオリーブ石",
             "name_en": "ZINCOLIVENITE",
            "chemical_formula_html": "(Zn,Cu)<sub>2</sub>(AsO<sub>4</sub>)(OH)",
            "origin": [
              "Namibia",
              "USA"
            ],
            "description": "亜鉛と銅を含む含水砒酸塩鉱物。オリーブ石グループに属する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "オリーブ石グループ",
            "habit": [
              "針状",
              "繊維状",
              "放射状集合"
            ],
            "occurrence": [
              "二次鉱物",
              "酸化帯"
            ],
            "strunz_classification": "08.BE.55"
          },
          {
            "id": 2,
            "name_jp": "ジルコン",
            "name_en": "ZIRCON",
            "chemical_formula_html": "ZrSiO<sub>4</sub>",
            "origin": [
              "Australia",
              "Sri Lanka",
              "Japan"
            ],
            "description": "ジルコニウムの珪酸塩鉱物。非常に安定した鉱物で、地質年代測定に用いられる。",
            "symmetry": "正方晶系",
            "crystal_structure": "ジルコングループ",
            "habit": [
              "柱状",
              "錐状",
              "双錐状"
            ],
            "occurrence": [
              "火成岩",
              "変成岩",
              "堆積岩"
            ],
            "strunz_classification": "09.AD.30"
          },
          {
            "id": 3,
            "name_jp": "灰簾石",
            "name_en": "ZOISITE",
            "chemical_formula_html": "Ca<sub>2</sub>AlAl<sub>2</sub>(SiO<sub>4</sub>)(Si<sub>2</sub>O<sub>7</sub>)O(OH)",
            "origin": [
              "Austria",
              "Tanzania",
              "USA"
            ],
            "description": "カルシウムとアルミニウムの珪酸塩鉱物。多色性を示すことがあり、宝石としても扱われる。",
            "symmetry": "斜方晶系",
            "crystal_structure": "緑簾石グループ",
            "habit": [
              "柱状",
              "板状",
              "塊状"
            ],
            "occurrence": [
              "変成岩",
              "接触変成岩"
            ],
            "strunz_classification": "09.B.10"
          },
          {
            "id": 4,
            "name_jp": "ズニ石",
            "name_en": "ZUNYITE",
            "chemical_formula_html": "Al<sub>13</sub>Si<sub>5</sub>O<sub>20</sub>(OH,F)<sub>18</sub>Cl",
            "origin": [
              "USA",
              "Switzerland",
              "South Africa"
            ],
            "description": "複雑な組成を持つ含水フッ素塩素珪酸塩鉱物。正四面体状の結晶が特徴的。",
            "symmetry": "等軸晶系",
            "crystal_structure": "ズニ石グループ（単独種）",
            "habit": [
              "正四面体",
              "八面体",
              "十二面体"
            ],
            "occurrence": [
              "熱水変質鉱床",
              "酸性火成岩中の空隙"
            ],
            "strunz_classification": "09.HH.10"
          },
          {
            "id": 5,
            "name_jp": "スコロド石",
            "name_en": "SCORODITE",
            "chemical_formula_html": "Fe<sup>3+</sup>AsO<sub>4</sub>・2H<sub>2</sub>O",
            "origin": [
              "Germany",
              "Czech Republic",
              "USA"
            ],
            "description": "鉄の含水砒酸塩鉱物。しばしばニンニク臭がする。",
            "symmetry": "斜方晶系",
            "crystal_structure": "スコロド石グループ",
            "habit": [
              "錐状",
              "板状",
              "土状"
            ],
            "occurrence": [
              "硫化鉱物の酸化帯",
              "熱水鉱脈"
            ],
            "strunz_classification": "08.CD.10"
          },
          {
            "id": null,
            "name_jp": "エトリンガイト",
            "name_en": "ETTRINGITE",
            "chemical_formula_html": "Ca<sub>6</sub>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>(OH)<sub>12</sub>&#x20;26H<sub>2</sub>O",
            "origin": [
              "Germany",
              "USA",
              "France",
              "South Africa"
            ],
            "description": "セメントの水和反応によって生成する代表的な水和物の一つ。針状または柱状の結晶として産出する。",
            "symmetry": "六方晶系",
            "crystal_structure": "硫酸塩グループ",
            "habit": [
              "針状",
              "柱状"
            ],
            "occurrence": [
              "変成鉱物",
              "接触鉱物"
            ],
            "strunz_classification": "07.D門 硫酸塩、クロム酸塩、モリブデン酸塩"
          },
          {
            "id": null,
            "name_jp": "灰重石",
            "name_en": "SCHEELITE",
            "chemical_formula_html": "CaWO<sub>4</sub>",
            "origin": [
              "China",
              "USA",
              "Austria",
              "Australia",
              "South Korea",
              "Japan"
            ],
            "description": "重要なタングステン鉱石の一つ。正八面体または双錐の結晶、粒状や塊状で産出する。紫外線下で強い青白色の蛍光を示す。",
            "symmetry": "正方晶系",
            "crystal_structure": "タングステン酸塩鉱物",
            "habit": [
              "八面体",
              "双錐",
              "粒状",
              "塊状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "接触鉱物",
              "熱水鉱床"
            ],
            "strunz_classification": "07.GA門 モリブデン酸塩とタングステン酸塩"
          },
          {
            "id": null,
            "name_jp": "グランディディエ石",
            "name_en": "GRANDIDIERITE",
            "chemical_formula_html": "(Mg,Fe)Al<sub>3</sub>(BO<sub>3</sub>)(SiO<sub>4</sub>)O<sub>2</sub>",
            "origin": [
              "Madagascar",
              "Sri Lanka",
              "Malawi",
              "Namibia"
            ],
            "description": "極めて稀なホウ素と珪素を含むアルミニウムの硼珪酸塩鉱物。青緑色から緑青色の柱状、板状、または塊状で産出する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "硼珪酸塩鉱物",
            "habit": [
              "柱状",
              "板状",
              "塊状"
            ],
            "occurrence": [
              "変成鉱物"
            ],
            "strunz_classification": "09.AJ門 ホウ素を含むネソ珪酸塩"
          },
          {
            "id": null,
            "name_jp": "トリプライト",
            "name_en": "TRIPLITE",
            "chemical_formula_html": "(Mn,Fe)<sub>2</sub>(PO<sub>4</sub>)F",
            "origin": [
              "USA",
              "Germany",
              "France",
              "Finland",
              "Brazil"
            ],
            "description": "リン酸塩鉱物の一種。褐色から黒色の塊状、粒状、または短柱状の結晶で産出する。",
            "symmetry": "単斜晶系",
            "crystal_structure": "リン酸塩グループ",
            "habit": [
              "塊状",
              "粒状",
              "短柱状"
            ],
            "occurrence": [
              "ペグマタイト"
            ],
            "strunz_classification": "08.BB門 無水リン酸塩、ハロゲン化物または水酸化物を含む"
          },
          {
            "id": null,
            "name_jp": "コニカルコ石",
            "name_en": "CONICHALCITE",
            "chemical_formula_html": "CaCu(AsO<sub>4</sub>)(OH)",
            "origin": [
              "USA",
              "Chile",
              "Germany",
              "Greece",
              "Namibia"
            ],
            "description": "ヒ素酸塩鉱物の一種。緑色系の色合いを持ち、鍾乳状、腎臓状、または球状の集合体として産出する。",
            "symmetry": "斜方晶系",
            "crystal_structure": "ヒ素酸塩グループ",
            "habit": [
              "鍾乳状",
              "腎臓状",
              "球状"
            ],
            "occurrence": [
              "鉱石鉱物",
              "二次鉱物"
            ],
            "strunz_classification": "08.BH門 リン酸塩、ヒ酸塩、バナジン酸塩"
          },
          {
            "id": 1,
            "name_jp": "水亜鉛銅鉱",
            "name_en": "AURICHALCITE",
            "chemical_formula_html": "(Zn,Cu)<sub>5</sub>(CO<sub>3</sub>)<sub>2</sub>(OH)<sub>6</sub>",
            "origin": ["ギリシャ", "イタリア", "アメリカ合衆国", "メキシコ"],
            "description": "淡い緑色から青緑色の美しい鉱物で、二次鉱物として亜鉛や銅の鉱床の酸化帯に産出します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "炭酸塩グループ",
            "habit": ["針状", "板状", "花弁状", "塊状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "酸化帯"],
            "strunz_classification": "05.BA.15"
          },
          {
            "id": 2,
            "name_jp": "硫銅鉱",
            "name_en": "CHALCOTRICHITE",
            "chemical_formula_html": "Cu<sub>2</sub>O",
            "origin": ["イギリス", "フランス", "アメリカ合衆国", "ナミビア"],
            "description": "赤銅鉱の毛状の結晶集合体で、美しい赤色をしています。銅鉱床の酸化帯に産出します。",
            "symmetry": "等軸晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["針状", "毛状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "酸化帯"],
            "strunz_classification": "04.AA.09"
          },
          {
            "id": 3,
            "name_jp": "マンガン重石",
            "name_en": "HÜBNERITE",
            "chemical_formula_html": "MnWO<sub>4</sub>",
            "origin": ["アメリカ合衆国", "中国", "ミャンマー", "ポルトガル"],
            "description": "鉄重石（フェルベルジャイト）と連続固溶体を形成する鉱物で、マンガンのタングステン酸塩鉱物です。高温熱水鉱脈やペグマタイトに産出します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "タングステン酸塩グループ",
            "habit": ["柱状", "板状", "錐状"],
            "occurrence": ["鉱石鉱物", "熱水鉱脈", "ペグマタイト"],
            "strunz_classification": "07.GB.05"
          },
          {
            "id": 4,
            "name_jp": "デスクロアイト",
            "name_en": "DESCLOIZITE",
            "chemical_formula_html": "PbZn(VO<sub>4</sub>)(OH)",
            "origin": ["メキシコ", "ナミビア", "ザンビア", "アメリカ合衆国"],
            "description": "バナジン酸塩鉱物で、鉛と亜鉛を含みます。二次鉱物として、鉛亜鉛鉱床の酸化帯に産出します。しばしば美しい結晶を形成します。",
            "symmetry": "斜方晶系",
            "crystal_structure": "リン酸塩グループ",
            "habit": ["錐状", "柱状", "塊状", "繊維状"],
            "occurrence": ["鉱石鉱物", "二次鉱物", "酸化帯"],
            "strunz_classification": "08.BH.14"
          },
          {
            "id": 1,
            "name_jp": "碧玉（へきぎょく）",
            "name_en": "JASPER",
            "chemical_formula_html": "SiO<sub>2</sub>",
            "origin": ["Worldwide"],
            "description": "不透明な微晶質(潜晶質)の石英(SiO₂)の変種で、通常は赤、黄、茶色、緑の色合いを示す。模様を持つものもある。",
            "symmetry": "六方晶系",
            "crystal_structure": "石英グループ",
            "habit": ["塊状", "粒状"],
            "occurrence": ["鉱石鉱物", "堆積岩"],
            "strunz_classification": "09.DA.03"
          },
          {
            "id": 2,
            "name_jp": "ハウスマン鉱",
            "name_en": "HAUSMANNITE",
            "chemical_formula_html": "Mn<sup>2+</sup>Mn<sup>3+</sup><sub>2</sub>O<sub>4</sub>",
            "origin": ["Germany", "Sweden", "Brazil", "Japan"],
            "description": "マンガンの酸化鉱物で、通常は黒色または暗褐色をしています。正方晶系の結晶を形成します。",
            "symmetry": "正方晶系",
            "crystal_structure": "スピネルグループ",
            "habit": ["正八面体", "菱形十二面体", "塊状", "粒状"],
            "occurrence": ["変成鉱物", "熱水鉱脈"],
            "strunz_classification": "04.BB.07"
          },
          {
            "id": 3,
            "name_jp": "菫青石（きんせいせき）/コーディエライト",
            "name_en": "CORDIERITE",
            "chemical_formula_html": "Mg<sub>2</sub>Al<sub>4</sub>Si<sub>5</sub>O<sub>18</sub>・n<0xE2><0x82><0x82>O",
            "origin": ["Finland", "Sri Lanka", "Madagascar", "Brazil", "Japan"],
            "description": "マグネシウム、アルミニウム、ケイ素を主成分とする珪酸塩鉱物。強い多色性を示すことで知られています。直方晶系の結晶を形成します。",
            "symmetry": "直方晶系",
            "crystal_structure": "コーディエライトグループ",
            "habit": ["柱状", "短柱状", "粒状", "塊状"],
            "occurrence": ["変成岩", "接触変成岩", "火成岩"],
            "strunz_classification": "09.CJ.05"
          },
          {
            "id": 4,
            "name_jp": "銀（ぎん）",
            "name_en": "SILVER",
            "chemical_formula_html": "Ag",
            "origin": ["Mexico", "Peru", "Canada", "Australia", "Japan"],
            "description": "貴金属元素の一つ。白色光沢を持ち、電気伝導性や熱伝導性が高い。自然銀として産出するほか、硫化鉱物などにも含まれる。等軸晶系の結晶を形成することがある。",
            "symmetry": "等軸晶系",
            "crystal_structure": "元素鉱物グループ",
            "habit": ["塊状", "樹枝状", "板状", "針状", "立方体", "八面体"],
            "occurrence": ["熱水鉱脈", "変成鉱床"],
            "strunz_classification": "01.AA.01"
          },
          {
            "id": 5,
            "name_jp": "針銀鉱（しんぎんこう）",
            "name_en": "ACANTHITE",
            "chemical_formula_html": "Ag<sub>2</sub>S",
            "origin": ["Czech Republic", "Germany", "Mexico", "Chile", "Japan"],
            "description": "硫化銀鉱物で、通常は黒色または暗灰色をしています。低温条件下では単斜晶系の結晶を形成しますが、高温条件下では等軸晶系の輝銀鉱（Argentite）に変化します。",
            "symmetry": "単斜晶系",
            "crystal_structure": "硫化鉱物グループ",
            "habit": ["柱状", "針状", "板状", "塊状", "樹枝状"],
            "occurrence": ["熱水鉱脈"],
            "strunz_classification": "02.BA.05",
            "images": ["./images/minerals/acanthite.png"]
          },
          {
            "id": 1,
            "name_jp": "ラドロック鉱",
            "name_en": "LUDLOCKITE",
            "chemical_formula_html": "PbFeAs<sub>2</sub>",
            "origin": ["ドイツ", "スウェーデン"],
            "description": "ラドロック鉱は、化学組成が PbFeAs<sub>2</sub> の比較的稀な砒化鉱物です。正方晶系の擬六方晶を示すことが知られています。",
            "symmetry": "斜方晶系",
            "crystal_structure": null,
            "habit": ["塊状", "粒状"],
            "occurrence": ["熱水鉱脈"],
            "strunz_classification": "02.AA.55"
          },
          {
            "id": 2,
            "name_jp": "紅鉛鉱",
            "name_en": "CROCOITE",
            "chemical_formula_html": "PbCrO<sub>4</sub>",
            "origin": ["ロシア", "オーストラリア", "アメリカ合衆国"],
            "description": "紅鉛鉱は、鮮やかな赤い色が特徴的なクロム酸鉛の鉱物です。美しい結晶を形成し、コレクターの間で人気があります。",
            "symmetry": "単斜晶系",
            "crystal_structure": null,
            "habit": ["柱状", "針状"],
            "occurrence": ["二次鉱物", "酸化帯"],
            "strunz_classification": "07.AD.30"
          },
          {
            "id": 3,
            "name_jp": "アロワ石",
            "name_en": "HALLOYSITE",
            "chemical_formula_html": "Al<sub>4</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>・4H<sub>2</sub>O",
            "origin": ["ベルギー", "ニュージーランド", "日本"],
            "description": "アロワ石は、カオリナイトグループに属する粘土鉱物の一種です。一般的に白色または淡色で、電子顕微鏡下ではチューブ状の特異な形態を示すことで知られています。",
            "symmetry": "単斜晶系",
            "crystal_structure": "層状珪酸塩グループ",
            "habit": ["塊状", "土状", "チューブ状"],
            "occurrence": ["風化生成物", "熱水変質鉱物"],
            "strunz_classification": "09.ED.10"
          },
          {
            "id": 4,
            "name_jp": "氷長石",
            "name_en": "ADULARIA",
            "chemical_formula_html": "KAlSi<sub>3</sub>O<sub>8</sub>",
            "origin": ["スイス", "ブラジル", "日本"],
            "description": "氷長石は、低温の熱水条件下で形成されるカリウム長石の一種です。特徴的な擬正方晶両錐の結晶形を示すことがあります。宝石としても利用されます。",
            "symmetry": "単斜晶系",
            "crystal_structure": "長石グループ",
            "habit": ["柱状", "板状", "擬正方晶両錐"],
            "occurrence": ["低温熱水鉱脈", "変成岩中の空隙"],
            "strunz_classification": "09.FA.30"
          },
          {
            "id": 5,
            "name_jp": "チタン鉄鉱",
            "name_en": "ILMENITE",
            "chemical_formula_html": "FeTiO<sub>3</sub>",
            "origin": ["カナダ", "ノルウェー", "アメリカ合衆国"],
            "description": "チタン鉄鉱は、鉄とチタンの酸化鉱物で、黒色または灰黒色の外観を持ちます。磁性を示すことがあり、チタンの重要な鉱石鉱物です。",
            "symmetry": "三方晶系",
            "crystal_structure": "酸化鉱物グループ",
            "habit": ["板状", "粒状", "塊状", "砂状"],
            "occurrence": ["火成岩", "変成岩", "堆積岩", "砂鉱床"],
            "strunz_classification": "04.CB.05"
          },
          
        
    ]
};
