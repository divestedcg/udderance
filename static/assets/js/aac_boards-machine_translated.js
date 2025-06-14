/* Translated using Google's Gemma3 12b QAT multimodal machine learning model */
/* Prompt: Please translate the following quoted strings to [language], keep the identical format, and do not say anything else: $(cat words) */

/* START OF BOARD PRESET */
const phrasesDefaultEs = ["Default (CC0) [MT:es]"];
phrasesDefaultEs.push(["Común", "sí", "no", "ok", "[SEP]",
			"No lo sé", "No entiendo", "[SEP]",
			"¿qué?", "¿por qué?", "¿cómo?", "[SEP]",
			"¿cuándo?", "¿cuál?", "¿dónde?", "[SEP]",
			"bien", "mal", "¡para!", "[SEP]",
			"hola", "adiós", "feliz " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"por favor", "gracias", "[SEP]",
			"ayer", "hoy", "mañana", "[SEP]",
			"día", "noche", "mañana", "tarde", "[SEP]",
			"Tengo hambre", "Tengo sed", "Estoy cansado", "Necesito ir al baño", "[SEP]"
			]);
phrasesDefaultEs.push(["Números", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultEs.push(["Comidas", "Quiero", "Necesito", "[SEP]", "galletas", "pan", "brócoli", "hamburguesa", "cereal", "pollo", "maíz", "huevos", "papas fritas", "sándwich de queso a la parrilla", "hash browns", "perritos calientes", "macarrones con queso", "panqueques", "pasta", "mantequilla de maní y jalea", "pizza", "patatas", "ramen", "arroz", "sándwich", "salchicha", "sopa", "ejotes", "tostada", "waffles"]);
phrasesDefaultEs.push(["Snacks", "Quiero", "Necesito", "[SEP]", "brownies", "pastel", "dulces", "papas fritas", "galletas", "crackers", "donuts", "helado", "muffins", "nueces", "tarta", "pretzels"]);
phrasesDefaultEs.push(["Bebidas", "Quiero", "Necesito", "[SEP]", "agua", "jugo", "café", "chocolate caliente", "leche", "soda", "batido", "un pajita"]);
phrasesDefaultEs.push(["Lugares", "afuera", "adentro", "casa", "patio delantero", "patio trasero", "patio", "garaje", "tienda de comestibles", "estación de servicio", "hospital", "oficina", "escuela", "banco", "cajero automático", "gimnasio"]);
phrasesDefaultEs.push(["Diversión", "¡honk honk!", "¡swish swish swish!", "¡cómo está la vaca marrón!"]);
boardPresets.push(phrasesDefaultEs);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultDe = ["Default (CC0) [MT:de]"];
phrasesDefaultDe.push(["Common", "ja", "nein", "okay", "[SEP]",
			"Ich weiß es nicht", "Ich verstehe es nicht", "[SEP]",
			"was?", "warum?", "wie?", "[SEP]",
			"wann?", "welches?", "wo?", "[SEP]",
			"gut", "schlecht", "Stopp!", "[SEP]",
			"Hallo", "Auf Wiedersehen", "frohes " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"bitte", "danke", "[SEP]",
			"gestern", "heute", "morgen", "[SEP]",
			"Tag", "Nacht", "Morgen", "Nachmittag", "[SEP]",
			"Ich habe Hunger", "Ich bin durstig", "Ich bin müde", "Ich muss auf die Toilette", "[SEP]"
			]);
phrasesDefaultDe.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultDe.push(["Foods", "Ich möchte", "Ich brauche", "[SEP]", "Kekse", "Brot", "Brokkoli", "Burger", "Müsli", "Hähnchen", "Mais", "Eier", "Pommes", "Käse-Toast", "Kartoffelpuffer", "Hot Dogs", "Mac and Cheese", "Pfannkuchen", "Pasta", "Erdnussbutter und Gelee", "Pizza", "Kartoffeln", "Ramen", "Reis", "Sandwich", "Wurst", "Suppe", "Grüne Bohnen", "Toast", "Waffeln"]);
phrasesDefaultDe.push(["Snacks", "Ich möchte", "Ich brauche", "[SEP]", "Brownies", "Kuchen", "Süßigkeiten", "Chips", "Kekse", "Cracker", "Donuts", "Eis", "Muffins", "Nüsse", "Pie", "Brezeln"]);
phrasesDefaultDe.push(["Drinks", "Ich möchte", "Ich brauche", "[SEP]", "Wasser", "Saft", "Kaffee", "Heiße Schokolade", "Milch", "Soda", "Milchshake", "ein Strohhalm"]);
phrasesDefaultDe.push(["Places", "draußen", "drinnen", "Zuhause", "Vorderhof", "Hinterhof", "Terrasse", "Garage", "Supermarkt", "Tankstelle", "Krankenhaus", "Büro", "Schule", "Bank", "Geldautomat", "Fitnessstudio"]);
phrasesDefaultDe.push(["Fun", "Hu Hu", "Swish Swish Swish", "Wie geht es, braune Kuh"]);
boardPresets.push(phrasesDefaultDe);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultFr = ["Default (CC0) [MT:fr]"];
phrasesDefaultFr.push(["Common", "oui", "non", "d'accord", "[SEP]",
			"Je ne sais pas", "Je ne comprends pas", "[SEP]",
			"quoi ?", "pourquoi ?", "comment ?", "[SEP]",
			"quand ?", "lequel ?", "où ?", "[SEP]",
			"bon", "mauvais", "stop !", "[SEP]",
			"bonjour", "au revoir", "bon " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"s'il vous plaît", "merci", "[SEP]",
			"hier", "aujourd'hui", "demain", "[SEP]",
			"jour", "nuit", "matin", "après-midi", "[SEP]",
			"J'ai faim", "J'ai soif", "Je suis fatigué", "J'ai besoin des toilettes", "[SEP]"
			]);
phrasesDefaultFr.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultFr.push(["Foods", "Je veux", "J'ai besoin", "[SEP]", "biscuits", "pain", "brocoli", "burger", "céréales", "poulet", "maïs", "oeufs", "frites", "grilled cheese", "hash browns", "hot dogs", "mac and cheese", "pancakes", "pâtes", "beurre de cacahuète et gelée", "pizza", "pommes de terre", "ramen", "riz", "sandwich", "saucisse", "soupe", "haricots verts", "toast", "gaufres"]);
phrasesDefaultFr.push(["Snacks", "Je veux", "J'ai besoin", "[SEP]", "brownies", "gâteau", "bonbons", "chips", "cookies", "crackers", "donuts", "crème glacée", "muffins", "noix", "tarte", "bretzels"]);
phrasesDefaultFr.push(["Drinks", "Je veux", "J'ai besoin", "[SEP]", "eau", "jus", "café", "chocolat chaud", "lait", "soda", "milkshake", "une paille"]);
phrasesDefaultFr.push(["Places", "extérieur", "intérieur", "maison", "avant-cour", "arrière-cour", "terrasse", "garage", "épicerie", "station-service", "hôpital", "bureau", "école", "banque", "guichet automatique", "salle de sport"]);
phrasesDefaultFr.push(["Fun", "bip bip", "chhhhh", "meuh"]);
boardPresets.push(phrasesDefaultFr);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultHi = ["Default (CC0) [MT:hi]"];
phrasesDefaultHi.push(["Common", "हाँ", "नहीं", "ठीक है", "[SEP]",
			"मुझे नहीं पता", "मुझे समझ नहीं आया", "[SEP]",
			"क्या?", "क्यों?", "कैसे?", "[SEP]",
			"कब?", "कौन सा?", "कहाँ?", "[SEP]",
			"अच्छा", "बुरा", "रुक जाओ!", "[SEP]",
			"नमस्ते", "अलविदा", "आज का दिन " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"कृपया", "धन्यवाद", "[SEP]",
			"कल", "आज", "आने वाला कल", "[SEP]",
			"दिन", "रात", "सुबह", "दोपहर", "[SEP]",
			"मुझे भूख लगी है", "मुझे प्यास लगी है", "मैं थक गया हूँ", "मुझे शौचालय की आवश्यकता है", "[SEP]"
			]);
phrasesDefaultHi.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultHi.push(["Foods", "मुझे चाहिए", "मुझे चाहिए", "[SEP]", "बिस्कुट", "ब्रेड", "ब्रोकोली", "बर्गर", "सारेल", "चिकन", "मकई", "अंडे", "फ्रेंच फ्राइज़", "ग्रील्ड चीज़", "हैश ब्राउन", "हॉट डॉग", "मैक और चीज़", "पैनकेक", "पास्ता", "पीनट बटर और जेली", "पिज्जा", "आलू", "रामेन", "चावल", "सैंडविच", "सॉसेज", "सूप", "स्ट्रिंग बीन्स", "टोस्ट", "वैफल"]);
phrasesDefaultHi.push(["Snacks", "मुझे चाहिए", "मुझे चाहिए", "[SEP]", "ब्राउनीज़", "केक", "कैंडी", "चिप्स", "कुकीज़", "क्रैकर्स", "डोनट्स", "आइसक्रीम", "मफिन", "नट्स", "पाई", "प्रेत्ज़ेल"]);
phrasesDefaultHi.push(["Drinks", "मुझे चाहिए", "मुझे चाहिए", "[SEP]", "पानी", "रस", "कॉफी", "गर्म कोको", "दूध", "सोडा", "मिल्कशेक", "एक स्ट्रॉ"]);
phrasesDefaultHi.push(["Places", "बाहर", "अंदर", "घर", "सामने का आंगन", "पीछे का आंगन", "पैटियो", "गैरेज", "किराना स्टोर", "पेट्रोल स्टेशन", "अस्पताल", "कार्यालय", "स्कूल", "बैंक", "एटीएम", "जिम"]);
phrasesDefaultHi.push(["Fun", "होनक होनक", "स्विश स्विश स्विश", "कैसे अब ब्राउन काउ"]);
boardPresets.push(phrasesDefaultHi);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultJa = ["Default (CC0) [MT:ja]"]; //FIXME 2 quotes short
phrasesDefaultJa.push(["Common", "はい", "いいえ", "了解", "[SEP]",
			"わかりません", "理解できません", "[SEP]",
			"何?", "なぜ?", "どう?", "[SEP]",
			"いつ?", "どれ?", "どこ?", "[SEP]",
			"良い", "悪い", "止まれ!", "[SEP]",
			"こんにちは", "さようなら", "「" + new Date().toLocaleString(document.language, {weekday:'long'}) + "」", "[SEP]",
			"お願いします", "ありがとう", "[SEP]",
			"昨日", "今日", "明日", "[SEP]",
			"日", "夜", "朝", "午後", "[SEP]",
			"お腹が空きました", "喉が渇きました", "疲れた", "トイレに行きたい", "[SEP]"
			]);
phrasesDefaultJa.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultJa.push(["Foods", "欲しい", "必要", "[SEP]", "ビスケット", "パン", "ブロッコリー", "ハンバーガー", "シリアル", "チキン", "コーン", "卵", "フライドポテト", "チーズグリル", "ハッシュブラウン", "ホットドッグ", "マカロニチーズ", "パンケーキ", "パスタ", "ピーナッツバター&ジェリー", "ピザ", "ポテト", "ラーメン", "ご飯", "サンドイッチ", "ソーセージ", "スープ", "グリーンビーンズ", "トースト", "ワッフル"]);
phrasesDefaultJa.push(["Snacks", "欲しい", "必要", "[SEP]", "ブラウニー", "ケーキ", "キャンディ", "チップス", "クッキー", "クラッカー", "ドーナツ", "アイスクリーム", "マフィン", "ナッツ", "パイ", "プレッツェル"]);
phrasesDefaultJa.push(["Drinks", "欲しい", "必要", "[SEP]", "水", "ジュース", "コーヒー", "ホットチョコレート", "ミルク", "ソーダ", "ミルクシェイク", "ストロー"]);
phrasesDefaultJa.push(["Places", "外", "中", "家", "前庭", "裏庭", "パティオ", "ガレージ", "スーパーマーケット", "ガソリンスタンド", "病院", "オフィス", "学校", "銀行", "ATM", "ジム"]);
phrasesDefaultJa.push(["Fun", "ビープビープ", "シュッシュッシュッ", "どうしてる、茶色の牛"]);
boardPresets.push(phrasesDefaultJa);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultRu = ["Default (CC0) [MT:ru]"];
phrasesDefaultRu.push(["Common", "да", "нет", "ок", "[SEP]",
			"Я не знаю", "Я не понимаю", "[SEP]",
			"что?", "почему?", "как?", "[SEP]",
			"когда?", "какой?", "где?", "[SEP]",
			"хорошо", "плохо", "стоп!", "[SEP]",
			"привет", "пока", "счастливого " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"пожалуйста", "спасибо", "[SEP]",
			"вчера", "сегодня", "завтра", "[SEP]",
			"день", "ночь", "утро", "после полудня", "[SEP]",
			"Я голоден", "Я хочу пить", "Я устал", "Мне нужен туалет", "[SEP]"
			]);
phrasesDefaultRu.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultRu.push(["Foods", "Я хочу", "Я нуждаюсь", "[SEP]", "печенье", "хлеб", "брокколи", "бургер", "хлопья", "курица", "кукуруза", "яйца", "картофель фри", "гриль-чиз", "картофельные оладьи", "хот-доги", "макароны с сыром", "блинчики", "паста", "арахисовое масло и желе", "пицца", "картофель", "рамен", "рис", "сэндвич", "сосиска", "суп", "зеленые бобы", "тост", "вафли"]);
phrasesDefaultRu.push(["Snacks", "Я хочу", "Я нуждаюсь", "[SEP]", "брауни", "торт", "конфеты", "чипсы", "печенье", "крекеры", "пончики", "мороженое", "маффины", "орехи", "пирог", "претцели"]);
phrasesDefaultRu.push(["Drinks", "Я хочу", "Я нуждаюсь", "[SEP]", "вода", "сок", "кофе", "горячий шоколад", "молоко", "лимонад", "милкшейк", "соломинка"]);
phrasesDefaultRu.push(["Places", "на улице", "внутри", "дом", "передний двор", "задний двор", "патио", "гараж", "продуктовый магазин", "заправочная станция", "больница", "офис", "школа", "банк", "банкомат", "спортзал"]);
phrasesDefaultRu.push(["Fun", "бип-бип", "свиш-свиш-свиш", "как дела, корова"]);
boardPresets.push(phrasesDefaultRu);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesDefaultZh = ["Default (CC0) [MT:zh]"];
phrasesDefaultZh.push(["Common", "是的", "否", "好的", "[SEP]",
			"我不知道", "我不明白", "[SEP]",
			"什么？", "为什么？", "怎么？", "[SEP]",
			"什么时候？", "哪个？", "哪里？", "[SEP]",
			"好", "坏", "停！", "[SEP]",
			"你好", "再见", "今天" + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"请", "谢谢", "[SEP]",
			"昨天", "今天", "明天", "[SEP]",
			"天", "夜", "早上", "下午", "[SEP]",
			"我饿了", "我渴了", "我累了", "我要上厕所", "[SEP]"
			]);
phrasesDefaultZh.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultZh.push(["Foods", "我想要", "我需要", "[SEP]", "饼干", "面包", "西兰花", "汉堡", "麦片", "鸡肉", "玉米", "鸡蛋", "薯条", "烤奶酪三明治", "油炸土豆块", "热狗", "通心粉和奶酪", "煎饼", "意大利面", "花生酱和果酱三明治", "披萨", "土豆", "拉面", "米饭", "三明治", "香肠", "汤", "豆角", "吐司", "华夫饼"]);
phrasesDefaultZh.push(["Snacks", "我想要", "我需要", "[SEP]", "布朗尼", "蛋糕", "糖果", "薯片", "饼干", "苏打饼干", "甜甜圈", "冰淇淋", "玛芬", "坚果", "派", "椒盐脆饼"]);
phrasesDefaultZh.push(["Drinks", "我想要", "我需要", "[SEP]", "水", "果汁", "咖啡", "热巧克力", "牛奶", "苏打水", "奶昔", "吸管"]);
phrasesDefaultZh.push(["Places", "外面", "里面", "家", "前院", "后院", "露台", "车库", "杂货店", "加油站", "医院", "办公室", "学校", "银行", "ATM", "健身房"]);
phrasesDefaultZh.push(["Fun", "嘟嘟嘟", "咻咻咻", "怎么你了，棕色奶牛"]);
boardPresets.push(phrasesDefaultZh);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicEs = ["Cboard Classic Home (GPL-3.0) [MT:es]"]; //FIXME: 12 quotes short
phrasesCboardClassicEs.push(["Común", "sí", "no", "hola", "adiós", "bien", "mal", "no puedo hablar", "gracias", "por favor"]);
phrasesCboardClassicEs.push(["Tiempo", "tiempo", "ahora", "ayer", "hoy", "mañana", "mañana", "tarde", "noche", "día", "esta semana", "fin de semana", "la semana que viene", "este mes", "el mes que viene", "el mes pasado", "una hora", "minuto", "segundo"]);
phrasesCboardClassicEs.push(["Comida", "Tengo hambre", "Quiero", "y", "No me gusta", "[SEP]", "sopa", "verduras", "fruta", "pizza", "pan", "huevo cocido", "huevo frito", "cruasán", "cereales", "gachas", "tortitas", "pasta", "aves de corral", "ternera", "pescado", "espagueti a la boloñesa", "hamburguesa", "perrito caliente", "pastel", "molinillo de pimienta", "sal", "ketchup", "vinagre", "sándwich", "bagel", "tostada", "queso", "fideos", "patatas fritas"]);
phrasesCboardClassicEs.push(["Comida: Sopa", "sopa", "sopa de zanahoria", "sopa de pollo", "sopa de champiñones", "sopa de cebolla", "sopa de guisantes", "sopa de tomate", "sopa de verduras"]);
phrasesCboardClassicEs.push(["Comida: Verduras", "verduras", "ensalada", "patata", "puré de patatas", "patata dulce", "arroz", "frijoles refritos", "maíz dulce", "remolacha", "zanahoria", "tomate", "pepino", "col", "cebolla", "cebollino", "pimiento", "pimiento picante", "lechuga", "espárragos", "rábano", "berenjena", "brócoli", "guisantes", "aguacate", "judías verdes", "espinacas", "calabaza", "brócoli belga"]);
phrasesCboardClassicEs.push(["Comida: Fruta", "fresa", "manzana", "albaricoque", "melocotón", "mango", "pera", "naranja", "melón", "plátano", "kiwi", "piña", "sandía", "cereza", "pomelo", "uvas"]);
phrasesCboardClassicEs.push(["Bebidas", "Tengo sed", "Quiero", "No me gusta", "[SEP]", "bebida", "agua", "zumo de naranja", "zumo de manzana", "zumo de uva", "zumo de arándano", "zumo de piña", "limonada", "leche", "batido", "chocolate caliente", "té", "café", "vino", "cerveza", "paja"]);
phrasesCboardClassicEs.push(["Snacks", "Quiero", "[SEP]", "helado", "chocolate", "patatas fritas", "malvaviscos", "galletas", "gominolas", "bastón de caramelo", "frutos secos", "rebanada de pastel", "galleta con trozos de chocolate", "yogur", "palito de helado", "pretzel", "cacahuete"]);
phrasesCboardClassicEs.push(["Actividades", "Quiero", "[SEP]", "ir en bicicleta", "jugar al baloncesto", "ir a bolos", "jugar a los videojuegos", "ver la televisión", "resolver un rompecabezas", "jugar al fútbol", "jugar al bingo", "bañarse", "trabajar", "cocinar", "hacer ejercicio", "correr", "hacer lucha de brazos", "celebrar", "nadar", "pescar", "lanzar dardos", "jugar a las cartas"]);
phrasesCboardClassicEs.push(["Emociones", "Estoy", "Estás", "¿Estás?", "[SEP]", "feliz", "triste", "enojado", "asustado", "confundido", "caliente", "frío", "emocionado", "relajado"]);
phrasesCboardClassicEs.push(["Cuerpo", "Tengo dolor en", "[SEP]", "picazón", "cabeza", "cara", "cuello", "hombro", "brazos", "mano derecha", "mano izquierda", "codo", "espalda", "estómago", "dedo", "pierna", "pie", "garganta", "cadera", "nalgas", "pulgar", "uña del dedo del pie", "uña del dedo", "músculos", "piel", "hueso", "rodilla"]);
phrasesCboardClassicEs.push(["Cuerpo: Cara", "cara", "ceja", "ojos", "ojo", "pestaña", "mejilla", "oído", "labios", "dientes", "encías", "lengua", "barbilla"]);
phrasesCboardClassicEs.push(["Cuerpo: Médico", "Estoy", "Tengo", "Necesito", "[SEP]", "dolor de espalda", "dolor de cabeza", "dolor de estómago", "dolor de muelas", "inhalador", "sarpullido", "operación", "tiritas", "medicamento", "radiografía", "cirugía centro de salud", "jeringa", "pastillas", "presión arterial", "corte", "máscara de oxígeno", "vomitar", "termómetro"]);
phrasesCboardClassicEs.push(["Ropa", "camisa", "camiseta", "pantalones", "pantalones cortos", "chaqueta", "abrigo", "blusa", "vestido", "suéter", "sudadera con capucha", "falda", "chaleco", "pijama"]);
phrasesCboardClassicEs.push(["Ropa: Accesorios", "gafas", "gafas de sol", "gorro de pompones", "gorra", "pajarita", "corbata", "calcetines", "guantes", "botas", "bralette", "calzoncillos", "pantalones", "bolso", "joyería", "sandalias", "zapatillas de deporte", "bufanda", "paraguas", "reloj"]);
phrasesCboardClassicEs.push(["Colores", "negro", "blanco", "malva", "amarillo", "rosa", "azul", "verde", "rojo"]);
phrasesCboardClassicEs.push(["Personas", "papá", "mamá", "profesor", "médico", "enfermera", "terapeuta del habla y el lenguaje", "policía", "repartidor", "cartero", "dentista", "carpintero", "secretaria", "conductor de taxi", "jardinero", "asistente de TI"]);
phrasesCboardClassicEs.push(["Personas: Familia", "mi", "tu", "[SEP]", "familia", "abuelo", "abuela", "mamá", "papá", "hermana", "hermano", "hija", "hijo", "bebé"]);
phrasesCboardClassicEs.push(["Personas: Personajes", "hada", "fantasma", "elfo", "bruja", "monstruo"]);
phrasesCboardClassicEs.push(["Describir", "Estoy", "Es", "Eres", "no", "[SEP]", "feo", "bonito", "grande", "pequeño", "igual", "viejo", "rápido", "sucio", "tranquilo", "ruidoso", "gordo", "delgado", "alto", "bajo", "largo", "vacío", "lleno", "profundo", "poco profundo", "abierto", "cerrado", "pesado", "ligero", "roto", "blando", "duro", "rizado", "grueso", "brillante", "elegante", "ruidoso", "seco", "mojado", "pegajoso"]);
phrasesCboardClassicEs.push(["Formas", "círculo", "óvalo", "triángulo equilátero", "cuadrado", "rectángulo", "pentágono", "hexágono", "octágono", "estrella", "diamante", "pirámide base triangular"]);
phrasesCboardClassicEs.push(["Cocina", "¿Dónde está?", "Necesito", "mi", "[SEP]", "tenedor", "cuchillo", "cuchara", "plato", "vaso para beber", "taza", "paja", "servilleta", "tazón", "mantelino", "cocina", "nevera", "delantal"]);
phrasesCboardClassicEs.push(["Escuela", "bolígrafo", "lápiz", "sacapuntas", "estuche", "mochila escolar", "cuaderno", "carpeta de anillas", "calculadora", "tijeras", "pizarra", "profesor", "boli blanco", "lápices de colores", "pegamento", "grapadora"]);
phrasesCboardClassicEs.push(["Escuela: Salón de Clases", "clase de álgebra", "clase de arte", "clase de teatro", "clase de inglés", "clase de geografía", "clase de historia", "clase de matemáticas", "clase de TI", "clase de música", "clase de ciencias", "ninguna clase"]);
phrasesCboardClassicEs.push(["Animales", "Tengo", "Vi", "Quiero", "[SEP]", "perro", "gato", "hámster", "conejo", "erizo", "caballo", "burro", "sapo", "oveja", "kennel para perros", "jaula", "establo", "rana", "polluelo", "pescado", "pollo vivo", "ratón", "rata", "loro", "nido", "ganso", "vaca", "tortuga", "camello", "cerdito"]);
phrasesCboardClassicEs.push(["Animales: Salvajes", "tigre", "elefante", "jirafa", "gorila", "serpiente", "serpiente de cascabel", "panda", "hipopótamo", "oso", "oso polar", "zorro", "león", "lobo", "chimpancé", "ciervo", "cebra", "canguro", "murciélago", "koala", "rinoceronte", "dinosaurio", "guepardo", "comedor de hormigas", "antílope", "camaleón"]);
phrasesCboardClassicEs.push(["Animales: Marinos", "pez payaso", "pingüino", "estrella de mar", "delfín", "foca", "orca", "cangrejo", "pez dorado", "oyster", "camarón", "cocodrilo", "medusa", "morsa", "pez tropical", "pez koi", "pez"]);
phrasesCboardClassicEs.push(["Animales: Aves", "búho", "buitre", "gaviota", "paloma", "loro", "polluelo", "pollo vivo", "pato", "ganso", "cisne", "reyezuelo", "turco", "ostrich", "bird", "pingüino", "flamenco", "pavo real", "gallito", "pichón"]);
phrasesCboardClassicEs.push(["Insectos", "caracol", "escarabajo", "abeja melífera", "hormiga", "saltamontes", "polilla", "mariposa", "mosca", "libélula", "almeja", "sargento", "abelia", "colmena", "nido de abejas", "oruga"]);
phrasesCboardClassicEs.push(["Tecnología", "Necesito", "¿Dónde está?", "mi", "tu", "[SEP]", "ordenador", "ordenador portátil", "cargador eléctrico", "batería", "cámara", "auriculares", "PlayStation", "unidad USB", "impresora", "ratón para ordenador", "iPod", "iPhone", "estéreo", "reproductor de DVD", "Wii", "mando a distancia", "teclado de ordenador", "extensión eléctrica"]);
phrasesCboardClassicEs.push(["Tiempo", "lluvia", "sol", "nieve", "tormenta eléctrica", "nublado", "otoño", "invierno", "primavera", "verano"]);
phrasesCboardClassicEs.push(["Plantas", "planta en maceta", "árbol", "rama", "hoja", "tronco de árbol", "hierba", "seto", "matorral", "flor", "clavel", "margarita", "rosa", "tulipán", "pétalo", "semilla", "semillas", "ramita", "raíces", "vid", "acebo", "maleza", "hiedra", "palmera", "planta muerta", "bellota", "cactus"]);
phrasesCboardClassicEs.push(["Deportes", "judo", "tenis", "baloncesto", "cricket", "bate de béisbol", "bádminton", "golf", "tiro con arco", "esquiar", "nadar", "dardos", "billar", "montar a caballo", "bolos", "boccia", "voleibol", "anillos olímpicos", "juegos paraolímpicos", "llame olímpica", "golf"]);
phrasesCboardClassicEs.push(["Transporte", "Vamos por", "Fui por", "[SEP]", "coche", "bicicleta", "silla de ruedas", "motocicleta", "autobús", "taxi", "avión", "helicóptero", "tren", "minibús", "ferry", "barco", "tractor", "patineta", "tanque de guerra", "globo aerostático", "camión de bomberos", "cohete", "espacio", "ambulancia", "coche de policía", "furgoneta", "transporte", "camión"]);
phrasesCboardClassicEs.push(["Lugares", "casa", "tienda", "banco", "edificio de oficinas", "afuera", "playa", "gimnasio", "iglesia", "campo", "jardín trasero", "escuela", "centro de salud", "garaje", "acuario"]);
phrasesCboardClassicEs.push(["Posición", "en", "fuera", "sobre", "debajo", "encima", "detrás", "enfrente", "a través", "entre", "arriba", "abajo", "izquierda", "derecha", "alrededor", "hacia adelante", "hacia atrás", "antes", "después"]);
phrasesCboardClassicEs.push(["Juguetes", "Quiero", "Amo", "¿Dónde", "tu", "mi", "[SEP]", "oso de peluche", "muñeca", "rompecabezas de formas", "coche de juguete", "soldadito de juguete", "teléfono de juguete", "bloques de construcción", "pelota", "burbujas", "cometa", "plastilina", "marioneta", "cuentas", "Lego", "trampolín", "juguetes", "libro para colorear", "caja de juguetes", "pegatinas"]);
phrasesCboardClassicEs.push(["Acciones", "obtener", "dar", "poner", "oír", "venir", "ir", "esperar", "tomar", "mirar", "pensar", "hacer", "romper", "dormir", "despertar", "hablar", "gritar", "traer", "mover", "caerse", "pararse", "sentarse", "compartir", "llevar", "alcanzar", "sostener", "mantener", "saltar", "perseguir", "trepar", "entrar en la puerta", "salir de la puerta", "descansar", "arrestar", "encontrar", "patear la pelota", "estudiar", "cambiar de opinión", "rezar", "abrir"]);
phrasesCboardClassicEs.push(["Preguntas", "¿qué?", "¿por qué?", "¿cómo?", "¿cuántos?", "¿cuándo?", "¿cuál?", "¿dónde?"]);
phrasesCboardClassicEs.push(["Muebles", "silla", "mesa", "silla alta", "silla mecedora", "mesa de centro", "alfombra", "armario de esquina", "cajón", "cajón", "puerta", "ventana", "estantería", "biblioteca", "taburete", "almohada de tierra", "mesa de comedor", "cortinas", "cama individual", "manta", "lámpara", "cuadro"]);
phrasesCboardClassicEs.push(["Higiene", "cepillo de dientes", "pasta de dientes", "jabón", "toalla", "peine", "cortaúñas", "papel de cocina", "toalla sanitaria", "pañuelos", "champú", "aftershave", "afeitadora eléctrica", "acondicionador para el cabello", "maquillaje", "desodorante", "papel higiénico", "secador de pelo", "tinte para el cabello"]);
phrasesCboardClassicEs.push(["Números", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicEs);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicDe = ["Cboard Classic Home (GPL-3.0) [MT:de]"]; //FIXME 12 quotes short
phrasesCboardClassicDe.push(["Common", "ja", "nein", "hallo", "auf wiedersehen", "gut", "schlecht", "ich kann nicht sprechen", "danke", "bitte"]);
phrasesCboardClassicDe.push(["Zeit", "zeit", "jetzt", "gestern", "heute", "morgen", "morgen", "nachmittag", "nacht", "tag", "diese Woche", "wochenende", "nächste Woche", "diesen Monat", "nächsten Monat", "letzten Monat", "eine Stunde", "minute", "sekunde"]);
phrasesCboardClassicDe.push(["Essen", "ich habe Hunger", "ich möchte", "und", "ich mag nicht", "[SEP]", "suppe", "gemüse", "obst", "pizza", "brot", "hartgekochtes Ei", "Spiegelei", "Croissant", "müsli", "Haferbrei", "Pfannkuchen", "Pasta", "Geflügel", "Rindfleisch", "Fisch", "Spaghetti Bolognese", "Hamburger", "Hotdog", "Kuchen", "Pfeffermahlwerk", "Salz", "Tomatensoße", "Essig", "Sandwich", "Bagel", "Toast", "Käse", "Nudeln", "Chips"]);
phrasesCboardClassicDe.push(["Essen: Suppe", "suppe", "Karotten Suppe", "Hühnersuppe", "Pilzsuppe", "Zwiebelsoppe", "Erbsensuppe", "Tomatensuppe", "Gemüsesuppe"]);
phrasesCboardClassicDe.push(["Essen: Gemüse", "gemüse", "Salat", "Kartoffel", "Kartoffelpüree", "Süßkartoffel", "Reis", "Bohnen in Tomatensoße", "Mais", "Rote Bete", "Karotte", "Tomate", "Gurke", "Kohl", "Zwiebel", "Frühlingszwiebeln", "Paprika", "Chilischote", "Salat", "Spargel", "Radieschen", "Aubergine", "Brokkoli", "Erbsen", "Avocado", "grüne Bohnen", "Spinat", "Kürbis", "Rosenkohl"]);
phrasesCboardClassicDe.push(["Essen: Obst", "Erdbeere", "Apfel", "Aprikose", "Pfirsich", "Mango", "Birne", "Orange", "Melone", "Banane", "Kiwi", "Ananas", "Wassermelone", "Kirsche", "Grapefruit", "Trauben"]);
phrasesCboardClassicDe.push(["Getränke", "ich habe Durst", "ich möchte", "ich mag nicht", "[SEP]", "trinken", "Wasser", "Orangensaft", "Apfelsaft", "Traubensaft", "Cranberrysaft", "Ananassaft", "Limonade", "Milch", "Milchshake", "Heiße Schokolade", "Tee", "Kaffee", "Wein", "Bier", "Strohhalm"]);
phrasesCboardClassicDe.push(["Snacks", "ich möchte", "[SEP]", "Eis", "Schokolade", "Chips", "Marshmallows", "Kekse", "Gummibärchen", "Zuckerstange", "Nüsse", "Kuchenstück", "Schokoladenkeks", "Joghurt", "Eiswaffel", "Brezel", "Erdnuss"]);
phrasesCboardClassicDe.push(["Aktivitäten", "ich möchte", "[SEP]", "fahren", "Basketball spielen", "bowlen gehen", "Computer Spiele spielen", "fernsehen", "Puzzle machen", "Fußball spielen", "Bingo spielen", "baden", "arbeiten", "kochen", "trainieren", "rennen", "Armdrücken", "feiern", "schwimmen", "fischen", "Darts spielen", "Karten spielen"]);
phrasesCboardClassicDe.push(["Emotionen", "ich bin", "du bist", "bist du", "[SEP]", "glücklich", "traurig", "wütend", "ängstlich", "verwirrt", "heiß", "kalt", "aufgeregt", "entspannt"]);
phrasesCboardClassicDe.push(["Körper", "ich habe Schmerzen in", "[SEP]", "Juckreiz", "Kopf", "Gesicht", "Hals", "Schulter", "Arme", "rechte Hand", "linke Hand", "Ellenbogen", "Rücken", "Magen", "Finger", "Bein", "Fuß", "Rachen", "Hüfte", "Hintern", "Daumen", "Zehen Nagel", "Finger Nagel", "Muskeln", "Haut", "Knochen", "Knie"]);
phrasesCboardClassicDe.push(["Körper: Gesicht", "gesicht", "Augenbraue", "Augen", "Auge", "Wimper", "Wange", "Ohr", "Lippen", "Zähne", "Zahnfleisch", "Zunge", "Kinn"]);
phrasesCboardClassicDe.push(["Körper: Medizinisch", "ich bin", "ich habe", "ich brauche", "[SEP]", "Rückenschmerzen", "Kopfschmerzen", "Bauchschmerzen", "Zahnschmerzen", "Inhalator", "Ausschlag", "Operation", "Pflaster", "Medizin", "Röntgen", "Gesundheitszentrum", "Spritze", "Tabletten", "Blutdruck", "Schnitt", "Sauerstoffmaske", "Erbrechen", "Thermometer"]);
phrasesCboardClassicDe.push(["Kleidung", "Hemd", "T-Shirt", "Hose", "Shorts", "Jacke", "Mantel", "Bluse", "Kleid", "Pullover", "Hoodie", "Rock", "Weste", "Nachthemd"]);
phrasesCboardClassicDe.push(["Kleidung: Accessoires", "Brille", "Sonnenbrille", "Mütze", "Kappe", "Schleife", "Krawatte", "Socken", "Handschuhe", "Stiefel", "BH", "Boxershorts", "Hose", "Geldbörse", "Schmuck", "Sandalen", "Trainers", "Schal", "Regenschirm", "Uhr"]);
phrasesCboardClassicDe.push(["Farben", "schwarz", "weiß", "Mauve", "gelb", "rosa", "blau", "grün", "rot"]);
phrasesCboardClassicDe.push(["Leute", "Papa", "Mama", "Lehrer", "Arzt", "Krankenschwester", "Sprachtherapeut", "Polizei", "Lieferant", "Postbote", "Zahnarzt", "Carpinter", "Sekretärin", "Taxifahrer", "Gärtner", "IT-Assistent"]);
phrasesCboardClassicDe.push(["Leute: Familie", "mein", "dein", "[SEP]", "Familie", "Großvater", "Großmutter", "Mama", "Papa", "Schwester", "Bruder", "Tochter", "Sohn", "Baby"]);
phrasesCboardClassicDe.push(["Leute: Charaktere", "Fee", "Geist", "Elf", "Hexe", "Monster"]);
phrasesCboardClassicDe.push(["Beschreiben", "ich bin", "es ist", "du bist", "nein", "[SEP]", "hässlich", "hübsch", "groß", "klein", "gleich", "alt", "schnell", "dreckig", "leise", "laut", "dick", "dünn", "groß", "kurz", "lang", "leer", "voll", "tief", "seicht", "offen", "geschlossen", "schwer", "leicht", "kaputt", "weich", "hart", "lockig", "dick", "glänzend", "schick", "laut", "trocken", "nass", "kleben"]);
phrasesCboardClassicDe.push(["Formen", "Kreis", "Oval", "gleichseitiges Dreieck", "Quadrat", "Rechteck", "Pentagon", "Hexagon", "Oktagon", "Stern", "Raute", "Pyramide dreieckige Basis"]);
phrasesCboardClassicDe.push(["Küche", "Wo ist", "Ich brauche", "mein", "[SEP]", "Gabel", "Messer", "Löffel", "Teller", "Trinkglas", "Tasse", "Strohhalm", "Serviette", "Schüssel", "Platzmatte", "Kocher", "Kühlschrank", "Schürze"]);
phrasesCboardClassicDe.push(["Schule", "Stift", "Bleistift", "Bleistiftschärfer", "Bleistiftbox", "Schultasche", "Notizbuch", "Ringordner", "Taschenrechner", "Schere", "Schwarztafel", "Lehrer", "Tippex", "Buntstift", "Kleber", "Hefter"]);
phrasesCboardClassicDe.push(["Schule: Klassenzimmer", "Algebra Klasse", "Kunst Klasse", "Drama Klasse", "Englisch Klasse", "Geographie Klasse", "Geschichtskunde Klasse", "Mathematik Klasse", "IT Klasse", "Musik Klasse", "keine Klasse"]);
phrasesCboardClassicDe.push(["Tiere", "ich habe", "ich habe gesehen", "ich möchte", "[SEP]", "Hund", "Katze", "Hamster", "Kaninchen", "Igel", "Pferd", "Esel", "Kröte", "Schaf", "Hundezwinger", "Käfig", "Scheune", "Frosch", "Küken", "Fisch", "Hühnerleben", "Maus", "Ratte", "Papagei", "Nest", "Gans", "Kuh", "Schildkröte", "Kamel", "Ferkel"]);
phrasesCboardClassicDe.push(["Tiere: Wild", "Tiger", "Elefant", "Giraffe", "Gorilla", "Schlange", "Gottleiche Schlange", "Panda", "Flusspferd", "Bär", "Eisbär", "Fuchs", "Löwe", "Wolf", "Schimpanse", "Hirsch", "Zebra", "Känguru", "Fledermaus", "Koala", "Nashorn", "Dinosaurier", "Cheetah", "Ameisenfresser", "Antilope"]);
phrasesCboardClassicDe.push(["Tiere: Marine", "Seepferdchen", "Pinguin", "Seestern", "Delfin", "Robbe", "Orca", "Krabbe", "Goldfisch", "Austern", "Garnelen", "Krokodil", "Quallen", "Walfisch", "Tropischer Fisch", "Koifisch", "Fisch"]);
phrasesCboardClassicDe.push(["Tiere: Vögel", "Eule", "Geier", "Möwe", "Taube", "Papagei", "Küken", "Hühnerleben", "Ente", "Gans", "Schwan", "Rotkehlchen", "Pute", "Strauß", "Vogel", "Pinguin", "Flamingo", "Pfau", "Hahn", "Papageient"])
phrasesCboardClassicDe.push(["Insekten", "Schnecke", "Käfer", "Honigbiene", "Ameise", "Grille", "Motten", "Schmetterling", "Fliege", "Libelle", "Ohrenkneifer", "Schleim", "Wespe", "Bienenkorb", "Bienen Nest", "Raupen"]);
phrasesCboardClassicDe.push(["Technologie", "Ich brauche", "Wo ist", "mein", "dein", "[SEP]", "Computer", "Laptop", "Elektro-Ladegerät", "Batterie", "Kamera", "Kopfhörer", "PlayStation", "USB-Stick", "Drucker", "Computermaus", "iPod", "iPhone", "Stereoanlage", "DVD-Player", "Wii", "Fernbedienung", "Computertastatur", "Verlängerungskabel"]);
phrasesCboardClassicDe.push(["Wetter", "Regen", "Sonne", "Schnee", "Gewitter", "bewölkt", "Herbst", "Winter", "Frühling", "Sommer"]);
phrasesCboardClassicDe.push(["Pflanzen", "Topfpflanze", "Baum", "Ast", "Blatt", "Baumstamm", "Gras", "Hecke", "Busch", "Blume", "Tulpe", "Blume", "Rose", "Tulpe", "Blütenblatt", "Samen", "Sämling", "Samen", "Stiel", "Wurzeln", "Wein", "Holunder", "Unkraut", "Efeu", "Palme", "toten Pflanze", "Eichel", "Kakteen"]);
phrasesCboardClassicDe.push(["Sport", "Judō", "Tennis", "Basketball", "Cricket", "Baseballschläger", "Badminton", "Golf", "Bogen schießen", "Ski fahren", "Schwimmen", "Darts", "Pool Snooker", "Pferd reiten", "Bowling", "Boccia", "Volleyball", "Olympische Ringe", "Para olympische Spiele", "Olympische Fackel", "Golf", "Leichtathletik"]);
phrasesCboardClassicDe.push(["Transport", "Lass uns mit fahren", "Ich bin mit gefahren", "[SEP]", "Auto", "Fahrrad", "Rollstuhl", "Motorrad", "Bus", "Taxi", "Flugzeug", "Hubschrauber", "Zug", "Kleiner Bus", "Fähre", "Boot", "Traktor", "Skateboard", "Panzer", "Heißluftballon", "Feuerwehrauto", "Raumschiff", "Rakete", "Jeep", "Krankenwagen", "Polizei Auto", "Van", "Transport", "Lkw"]);
phrasesCboardClassicDe.push(["Orte", "Haus", "Geschäft", "Bank", "Geschäftsblock", "draußen", "Strand", "Fitnessstudio", "Kirche", "Feld", "Rückgarten", "Schule", "Gesundheitszentrum", "Garage", "Aquarium"]);
phrasesCboardClassicDe.push(["Position", "in", "aus", "auf", "unter", "über", "hinter", "vor", "durch", "zwischen", "oben", "unten", "links", "rechts", "um", "vorwärts", "rückwärts", "vor", "nach"]);
phrasesCboardClassicDe.push(["Spielzeug", "ich möchte", "ich liebe", "wo", "dein", "mein", "[SEP]", "Teddybär", "Puppe", "Form Puzzles", "Auto Spielzeug", "Soldat Spielzeug", "Spielzeug Telefon", "Bausteine", "Ball", "Blasen", "Drachen", "Knete", "Puppe", "Perlen", "Lego", "Trampolin", "Spielzeuge", "Malbuch", "Spielzeugkiste", "Aufkleber"]);
phrasesCboardClassicDe.push(["Aktionen", "bekommen", "geben", "legen", "hören", "kommen", "gehen", "warten", "nehmen", "ansehen", "denken", "machen", "zerbrechen", "schlafen", "aufwachen", "sprechen", "schreien", "bringen", "bewegen", "hinfallen", "stehen", "sitzen", "teilen", "tragen", "erreichen", "halten", "aufbewahren", "springen", "jagen", "klettern", "kriechen", "hüpfen", "Tür betreten", "Tür verlassen", "ausruhen", "verhaften", "finden", "Fußball schießen", "studieren", "Sich ändern"]);
phrasesCboardClassicDe.push(["Fragen", "was", "warum", "wie", "wie viel", "wann", "welcher", "wo"]);
phrasesCboardClassicDe.push(["Möbel", "Stuhl", "Tisch", "Hochstuhl", "Schaukelstuhl", "Couchtisch", "Teppich", "Eckschrank", "Anrichte", "Schublade", "Tür", "Fenster", "Bücherregal", "Hocker", "Sitzsack", "Esstisch", "Vorhänge", "Einbett", "Decke", "Lampe", "Bild"]);
phrasesCboardClassicDe.push(["Hygiene", "Zahnbürste", "Zahnpasta", "Seife", "Handtuch", "Kamm", "Nagelknipser", "Küchentuch", "Binde", "Taschentücher", "Shampoo", "Aftershave", "Elektrorasierer", "Haarspülung", "Make up", "Deodorant", "Toilettenpapier", "Haartrockner", "Haarfarbe"]);
phrasesCboardClassicDe.push(["Zahlen", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicDe);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicFr = ["Cboard Classic Home (GPL-3.0) [MT:fr]"]; //FIXME 28 quotes short
phrasesCboardClassicFr.push(["Common", "oui", "non", "bonjour", "au revoir", "bien", "mal", "je ne peux pas parler", "merci", "s'il vous plaît"]);
phrasesCboardClassicFr.push(["Time", "temps", "maintenant", "hier", "aujourd'hui", "matin", "après-midi", "soir", "jour", "cette semaine", "week-end", "la semaine prochaine", "ce mois-ci", "le mois prochain", "le mois dernier", "une heure", "minute", "seconde"]);
phrasesCboardClassicFr.push(["Nourriture", "J'ai faim", "Je veux", "et", "Je n'aime pas", "[SEP]", "soupe", "légumes", "fruits", "pizza", "pain", "œuf à la coque", "œuf au plat", "croissant", "céréales", "porridge", "pancakes", "pâtes", "volaille", "boeuf", "poisson", "spaghettis bolognaise", "hamburger", "hot-dog", "tarte", "réducteur à poivre", "sel", "sauce tomate", "vinaigre", "sandwich", "bagel", "toast", "fromage", "nouilles", "chips"]);
phrasesCboardClassicFr.push(["Nourriture: Soupe", "soupe", "soupe aux carottes", "soupe au poulet", "soupe aux champignons", "soupe à l'oignon", "soupe aux petits pois", "soupe à la tomate", "soupe de légumes"]);
phrasesCboardClassicFr.push(["Nourriture: Légumes", "légumes", "salade", "pomme de terre", "purée de pommes de terre", "patate douce", "riz", "haricots verts", "maïs doux", "betterave", "carotte", "tomate", "concombre", "chou", "oignon", "oignon nouveau", "poivron", "piment", "laitue", "asperges", "radis", "aubergine", "brocoli", "petits pois", "avocat", "haricots verts", "épinards", "courge", "choux de Bruxelles"]);
phrasesCboardClassicFr.push(["Nourriture: Fruits", "fraise", "pomme", "abricot", "pêche", "mangue", "poire", "orange", "melon", "banane", "kiwi", "ananas", "pastèque", "cerise", "pamplemousse", "raisins"]);
phrasesCboardClassicFr.push(["Boissons", "J'ai soif", "Je veux", "Je n'aime pas", "[SEP]", "boisson", "eau", "jus d'orange", "jus de pomme", "jus de raisin", "jus de cranberry", "jus d'ananas", "limonade", "lait", "milkshake", "chocolat chaud", "thé", "café", "vin", "bière", "paille"]);
phrasesCboardClassicFr.push(["Snacks", "Je veux", "[SEP]", "glace", "chocolat", "chips", "guimauves", "biscuits", "jelly beans", "bonbon à la canne", "noix", "tranche de gâteau", "biscuit aux pépites de chocolat", "yaourt", "barbe à l'eau glacée", "bretzel", "arachide"]);
phrasesCboardClassicFr.push(["Activités", "Je veux", "[SEP]", "faire du vélo", "jouer au basket", "aller au bowling", "jouer à des jeux vidéo", "regarder la télévision", "faire un puzzle", "jouer au foot", "jouer au bingo", "se baigner", "travailler", "cuisiner", "faire de l'exercice", "courir", "faire un bras de fer", "célébrer", "nager", "pêcher", "jouer aux fléchettes", "jouer aux cartes"]);
phrasesCboardClassicFr.push(["Émotions", "Je suis", "Tu es", "Es-tu", "[SEP]", "heureux", "triste", "en colère", "peureux", "confus", "chaud", "froid", "excité", "détendu"]);
phrasesCboardClassicFr.push(["Corps", "J'ai mal à", "[SEP]", "démangeaison", "tête", "visage", "cou", "épaule", "bras", "main droite", "main gauche", "coude", "dos", "estomac", "doigt", "jambe", "pied", "gorge", "hanche", "fessier", "pouce", "ongle du pied", "ongle du doigt", "muscles", "peau", "os", "genou"]);
phrasesCboardClassicFr.push(["Corps: Visage", "visage", "sourcil", "yeux", "œil", "cils", "joue", "oreille", "lèvres", "dents", "gencive", "langue", "menton"]);
phrasesCboardClassicFr.push(["Corps: Médical", "Je suis", "J'ai", "J'ai besoin", "[SEP]", "douleur au dos", "maux de tête", "maux d'estomac", "maux de dents", "inhalateur", "éruption cutanée", "opération", "plâtre", "médicament", "radiographie", "centre de santé chirurgical", "seringue", "comprimés", "pression artérielle", "coupure", "masque à oxygène", "vomir", "thermomètre"]);
phrasesCboardClassicFr.push(["Vêtements", "chemise", "t-shirt", "pantalon", "short", "veste", "manteau", "blouse", "robe", "pull", "sweat à capuche", "jupe", "gilet", "pyjama"]);
phrasesCboardClassicFr.push(["Vêtements: Accessoires", "lunettes", "lunettes de soleil", "bonnet pompon", "casquette", "nœud papillon", "cravate", "chaussettes", "gants", "bottes", "soutien-gorge", "cuir de chien", "pantalon", "sac à main", "bijoux", "sandales", "baskets", "écharpe", "parapluie", "montre"]);
phrasesCboardClassicFr.push(["Couleurs", "noir", "blanc", "mauve", "jaune", "rose", "bleu", "vert", "rouge"]);
phrasesCboardClassicFr.push(["Personnes", "papa", "maman", "professeur", "docteur", "infirmier", "orthophoniste", "policier", "livreur", "facteur", "dentiste", "charpentier", "secrétaire", "chauffeur de taxi", "jardinier", "assistant informatique"]);
phrasesCboardClassicFr.push(["Personnes: Famille", "mon", "ton", "[SEP]", "famille", "grand-père", "grand-mère", "maman", "papa", "soeur", "frère", "fille", "fils", "bébé"]);
phrasesCboardClassicFr.push(["Personnes: Personnages", "fée", "fantôme", "elfe", "sorcière", "monstre"]);
phrasesCboardClassicFr.push(["Décrire", "Je suis", "C'est", "Tu es", "non", "[SEP]", "laid", "joli", "grand", "petit", "même", "vieux", "rapide", "sale", "calme", "bruyant", "gros", "maigre", "grand", "petit", "long", "vide", "plein", "profond", "peu profond", "ouvert", "fermé", "lourd", "léger", "cassé", "doux", "dur", "bouclé", "épais", "brillant", "fantaisie", "bruyant", "sec", "humide", "collant"]);
phrasesCboardClassicFr.push(["Formes", "cercle", "ovale", "triangle équilatéral", "carré", "rectangle", "pentagone", "hexagone", "octogone", "étoile", "losange", "pyramide à base triangulaire"]);
phrasesCboardClassicFr.push(["Cuisine", "Où est", "J'ai besoin", "mon", "[SEP]", "fourchette", "couteau", "cuillère", "assiette", "verre à boire", "mug", "paille", "serviette", "bol", "paire de vaisselle", "plaque de cuisson", "réfrigérateur", "tablier"]);
phrasesCboardClassicFr.push(["École", "stylo", "crayon", "taille-crayon", "trousse", "sac à dos", "cahier", "classeur à anneaux", "calculatrice", "ciseaux", "tableau noir", "professeur", "correcteur", "crayons", "colle", "agrafes", "correcteur"]);
phrasesCboardClassicFr.push(["École: Salle de Classe", "cours d'algèbre", "cours d'art", "cours de théâtre", "cours d'anglais", "cours de géographie", "cours d'histoire", "cours d'informatique", "cours de musique", "cours de sciences", "aucun cours"]);
phrasesCboardClassicFr.push(["Animaux", "J'ai", "J'ai vu", "Je veux", "[SEP]", "chien", "chat", "hamster", "lapin", "hérisson", "cheval", "âne", "crapaud", "mouton", "niche à chien", "cage", "écurie", "grenouille", "coq", "poisson", "poulet vivant", "souris", "rat", "perroquet", "nid", "oie", "vache", "tortue", "chameau", "veau"]);
phrasesCboardClassicFr.push(["Animaux: Sauvages", "tigre", "éléphant", "girafe", "gorille", "serpent", "serpent à sonnette", "panda", "hippopotame", "ours", "ours polaire", "renard", "lion", "loup", "chimpanzé", "cerf", "zèbre", "kangourou", "chauve-souris", "koala", "rhinocéros", "dinosaures", "guépard", "fourmi géante", "antilope"]);
phrasesCboardClassicFr.push(["Animaux: Marins", "hippocampe", "manchot", "étoile de mer", "dauphin", "phoque", "orque", "crabe", "poisson rouge", "huître", "crevette", "crocodile", "méduse", "béluga", "poisson koi"]);
phrasesCboardClassicFr.push(["Animaux: Oiseaux", "hibou", "vautour", "goéland", "douve", "perroquet", "coq", "poulet vivant", "canard", "oie", "cygne", "rouge-gorge", "dindon", "autruche", "oiseau", "manchot", "flamant rose", "coq chantant", "caille"]);
phrasesCboardClassicFr.push(["Insectes", "limace", "scarabée", "abeille", "criquet", "papillon de nuit", "papillon", "mouche", "libellule", "reculpied", "escargot", "guêpe", "ruche", "nid d'abeilles", "chenille"]);
phrasesCboardClassicFr.push(["Technologie", "J'ai besoin", "Où est", "mon", "ton", "[SEP]", "ordinateur", "ordinateur portable", "chargeur électrique", "batterie", "appareil photo", "écouteurs", "PlayStation", "clé USB", "imprimante", "souris d'ordinateur", "iPod", "iPhone", "stéréo", "lecteur DVD", "Wii", "télécommande", "clavier d'ordinateur", "extension de prise"]);
phrasesCboardClassicFr.push(["Météo", "pluie", "soleil", "neige", "orage", "nuageux", "automne", "hiver", "printemps", "été"]);
phrasesCboardClassicFr.push(["Plantes", "plante en pot", "arbre", "branche", "tronc d'arbre", "herbe", "haie", "buisson", "fleur", "jonquille", "marguerite", "rose", "tulipe", "pétale", "graines", "plant", "racines", "vigne", "houx", "mauvaises herbes", "lierre", "palmier", "plante morte", "gland", "cactus", "cône de pin"]);
phrasesCboardClassicFr.push(["Sports", "judo", "tennis", "basketball", "cricket", "batte de baseball", "badminton", "golf", "faire du ski", "nager", "fléchettes", "pool snooker", "faire cavalier", "bowling", "boccia", "volleyball", "anneaux olympiques", "jeux paralympiques", "flambeau olympique", "golf", "course d'athlétisme"]);
phrasesCboardClassicFr.push(["Transport", "Allons en", "Je suis allé en", "[SEP]", "voiture", "vélo", "fauteuil roulant", "moto", "bus", "taxi", "avion", "hélicoptère", "train", "minibus", "ferry", "bateau", "tracteur", "skateboard", "char d'assaut", "ballon à air chaud", "camion de pompiers", "fusée", "Jeep", "ambulance", "voiture de police", "fourgon", "transport", "camion"]);
phrasesCboardClassicFr.push(["Lieux", "maison", "magasin", "banque", "immeuble de bureaux", "extérieur", "plage", "salle de sport", "église", "champ", "arrière-cour", "école", "centre de santé chirurgical", "garage", "aquarium"]);
phrasesCboardClassicFr.push(["Position", "dans", "en dehors de", "sur", "sous", "au-dessus de", "derrière", "devant", "à travers", "entre", "en haut", "en bas", "gauche", "droite", "autour de", "en avant", "en arrière", "avant", "après"]);
phrasesCboardClassicFr.push(["Jouets", "Je veux", "J'aime", "où", "ton", "mon", "[SEP]", "ours en peluche", "poupée", "puzzle de formes", "voiture jouet", "soldat jouet", "téléphone jouet", "briques", "balle", "bulles", "cerf-volant", "pâte à modeler", "marionnette", "perles", "Lego", "trampoline", "jouets", "livre à colorier", "boîte à jouets", "autocollants"]);
phrasesCboardClassicFr.push(["Actions", "obtenir", "donner", "mettre", "entendre", "venir", "aller", "attendre", "prendre", "regarder", "penser", "faire", "casser", "dormir", "se réveiller", "parler", "crier", "apporter", "bouger", "tomber", "s'asseoir", "partager", "porter", "atteindre", "tenir", "garder", "sauter", "chasser", "escalader", "rampé", "hopper", "entrer dans une porte", "sortir d'une porte", "se reposer", "arrêter", "trouver", "frapper le ballon", "étudier", "changer d'avis", "prier", "ouvrir"]);
phrasesCboardClassicFr.push(["Questions", "quoi", "pourquoi", "comment", "combien", "quand", "lequel", "où"]);
phrasesCboardClassicFr.push(["Meubles", "chaise", "table", "chaise haute", "fauteuil à bascule", "table basse", "tapis", "armoire d'angle", "commode", "tiroir", "porte", "fenêtre", "étagère à livres", "bibliothèque", "tabouret", "pouf", "table à manger", "rideaux", "lit simple", "couverture", "lampe", "tableau"]);
phrasesCboardClassicFr.push(["Hygiène", "brosse à dents", "dentifrice", "savon", "serviette", "peigne", "coupe-ongles", "serviette en papier", "serviette hygiénique", "rouleau de papier toilette", "sèche-cheveux", "après-rasage", "déodorant", "maquillage", "rasoir électrique", "tondeuse à cheveux", "coloration capillaire"]);
phrasesCboardClassicFr.push(["Nombres", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicFr);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicHi = ["Cboard Classic Home (GPL-3.0) [MT:hi]"]; //FIXME 10 quotes short
phrasesCboardClassicHi.push(["Common", "हाँ", "नहीं", "नमस्ते", "अलविदा", "अच्छा", "बुरा", "मैं बोल नहीं सकता", "धन्यवाद", "कृपया"]);
phrasesCboardClassicHi.push(["Time", "समय", "समय", "अभी", "कल", "आज", "कल", "सुबह", "दोपहर", "रात", "दिन", "इस सप्ताह", "सप्ताहांत", "अगले सप्ताह", "इस महीने", "अगले महीने", "पिछले महीने", "एक घंटा", "मिनट", "सेकंड"]);
phrasesCboardClassicHi.push(["Food", "भोजन", "मुझे भूख लगी है", "मैं चाहता हूँ", "और", "मुझे नापसंद है", "[SEP]", "सूप", "सब्जियां", "फल", "पिज्जा", "ब्रेड", "उबला अंडा", "तला हुआ अंडा", "क्रॉइसैंट", "सीरियल", "पोरीज", "पैनकेक", "पास्ता", "पॉल्ट्री", "बीफ", "मछली", "स्पaghetti बोलोग्नीज", "हैमबर्गर", "हॉट डॉग", "पाई", "पेपर मिल", "नमक", "टमाटर सॉस", "विनेगर", "सैंडविच", "बैगल", "टोस्ट", "पनीर", "नूडल्स", "चिप्स"]);
phrasesCboardClassicHi.push(["Food: Soup", "सूप", "सूप", "गाजर का सूप", "चिकन का सूप", "मशरूम का सूप", "प्याज का सूप", "मटर का सूप", "टमाटर का सूप", "सब्जी का सूप"]);
phrasesCboardClassicHi.push(["Food: Vegetables", "सब्जियां", "सलाद", "आलू", "मैश किए हुए आलू", "मीठा आलू", "चावल", "पके हुए फलियां", "मीठा मक्का", "बीटरूट", "गाजर", "टमाटर", "खीरा", "पत्ता गोभी", "प्याज", "स्प्रिंग ऑनियन", "मिर्च", "चिल्ली मिर्च", "लेट्यूस", "एस्परैगस", "मूली", "बैंगन", "ब्रोकोली", "मटर", "एवोकैडो", "हरी फलियां", "पालक", "कद्दू", "ब्रुसेल स्प्राउट्स"]);
phrasesCboardClassicHi.push(["Food: Fruit", "स्ट्रॉबेरी", "सेब", "एप्रीकॉट", "पीच", "आम", "नाशपाती", "संतरा", "तरबूज", "केला", "कीवी", "अनानास", "तरबूज", "चेरी", "ग्रेपफ्रूट", "अंगूर"]);
phrasesCboardClassicHi.push(["Drinks", "मुझे प्यास लगी है", "मैं चाहता हूँ", "मुझे नापसंद है", "[SEP]", "पेय", "पानी", "संतरे का रस", "सेब का रस", "अंगूर का रस", "क्रेनबेरी का रस", "अनानास का रस", "लेमोनेड", "दूध", "मिल्कशेक", "हॉट चॉकलेट", "चाय", "कॉफी", "शराब", "बियर", "स्ट्रॉ"]);
phrasesCboardClassicHi.push(["Snacks", "मैं चाहता हूँ", "[SEP]", "आइसक्रीम", "चॉकलेट", "क्रिप्स", "मार्शमैलो", "बिस्कुट", "जelly बीन्स", "कैंडी केन", "नट्स", "केक का स्लाइस", "चॉकलेट चिप बिस्कुट", "दही", "आइस लolly", "प्रीत्ज़ेल", "मूंगफली"]);
phrasesCboardClassicHi.push(["Activities", "मैं चाहता हूँ", "[SEP]", "साइकिल चलाने के लिए", "बास्केटबॉल खेलने के लिए", "बॉलिंग खेलने के लिए", "कंप्यूटर गेम खेलने के लिए", "टीवी देखने के लिए", "जिग्सॉ पहेली को हल करने के लिए", "फुटबॉल खेलने के लिए", "बिंगो खेलने के लिए", "स्नान करने के लिए", "काम करने के लिए", "खाना बनाने के लिए", "व्यायाम करने के लिए", "दौड़ने के लिए", "आर्मरेसलिंग करने के लिए", "मनाने के लिए", "तैराकी करने के लिए", "मछली पकड़ने के लिए", "डार्ट्स खेलने के लिए", "कार्ड खेलने के लिए"]);
phrasesCboardClassicHi.push(["Emotions", "मैं हूँ", "तुम हो", "क्या तुम हो", "[SEP]", "खुश", "दुखी", "गुस्से में", "डर", "भ्रमित", "गर्म", "ठंडा", "उत्साहित", "आरामदायक"]);
phrasesCboardClassicHi.push(["Body", "मुझे दर्द है", "[SEP]", "खुजली", "सिर", "चेहरा", "गर्दन", "कंधा", "हाथ", "दाहिना हाथ", "बायाँ हाथ", "कोहनी", "पीठ", "पेट", "उंगली", "पैर", "गला", "हिप", "बट", "अंगुठा", "पैर की उंगली", "नाखून", "मांसपेशियों", "त्वचा", "हड्डी", "घुटने"]);
phrasesCboardClassicHi.push(["Body: Face", "चेहरा", "भौं", "आँखें", "आँख", "पलक", "गाल", "कान", "होंठ", "दांत", "गम", "जीभ", "जबड़ा"]);
phrasesCboardClassicHi.push(["Body: Medical", "मैं हूँ", "मुझे है", "मुझे चाहिए", "[SEP]", "पीठ दर्द", "सिरदर्द", "पेट दर्द", "दांत दर्द", "इन्हेलर", "रैश", "ऑपरेशन", "प्लास्टर", "दवाई", "एक्सरे", "सर्जरी स्वास्थ्य केंद्र", "सिरिंज", "टैबलेट", "ब्लड प्रेशर", "कट", "ऑक्सीजन मास्क", "उल्टी करना", "थर्मामीटर"]);
phrasesCboardClassicHi.push(["Clothing", "शर्ट", "टी-शर्ट", "ट्राउजर", "शॉर्ट्स", "जैकेट", "कोट", "ब्लौज", "ड्रेस", "जम्पर", "हुडी", "स्कर्ट", "वेस्ट", "पायजामा"]);
phrasesCboardClassicHi.push(["Clothing: Accessories", "चश्मा", "सनग्लासेस", "बॉबल हैट", "टोपी", "बो टाई", "टाई", "मोज़े", "दस्ताने", "बूट", "ब्रा", "बॉक्सर शॉर्ट्स", "पैंट", "पर्स", "जewellry", "सैंडल", "ट्रेनर", "स्कार्फ", "छाता", "घड़ी"]);
phrasesCboardClassicHi.push(["Colours", "काला", "सफेद", "मूव", "पीला", "गुलाबी", "नीला", "हरा", "लाल"]);
phrasesCboardClassicHi.push(["People", "पिताजी", "माँ", "शिक्षक", "डॉक्टर", "नर्स", "स्पीच लैंग्वेज थेरेपिस्ट", "पुलिस", "डिलीवरी पर्सन", "पोस्ट पर्सन", "डेंटिस्ट", "कारपेंटर", "सेक्रेटरी", "टैक्सी ड्राइवर", "गार्डनर", "आईटी असिस्टेंट"]);
phrasesCboardClassicHi.push(["People: Family", "मेरा", "आपका", "[SEP]", "परिवार", "दादाजी", "दादी", "माँ", "पिताजी", "बहन", "भाई", "बेटी", "बेटा", "बच्चा"]);
phrasesCboardClassicHi.push(["People: Characters", "परी", "भूत", "एल्फ", "विच", "मॉन्स्टर"]);
phrasesCboardClassicHi.push(["Describe", "मैं हूँ", "यह है", "तुम हो", "नहीं", "[SEP]", "बदसूरत", "सुंदर", "बड़ा", "छोटा", "समान", "पुराना", "तेज", "गंदा", "शांत", "जोरदार", "मोटा", "पतला", "ऊँचा", "छोटा", "लंबा", "खाली", "भरा हुआ", "गहरा", "उथला", "खुला", "बंद", "भारी", "हल्का", "टूटा हुआ", "नरम", "कठोर", "घुंघराला", "मोटा", "चमकदार", "शानदार", "शोर", "सूखा", "गीला", "चिपचिपा"]);
phrasesCboardClassicHi.push(["Shapes", "गोलाई", "ओवल", "त्रिकोण समबाहु", "वर्ग", "आयत", "पेंटागन", "हेक्सागोन", "ऑक्टागन", "तारा", "हीरा", "पिरैमिड त्रिकोणीय आधार"]);
phrasesCboardClassicHi.push(["Kitchen", "कहाँ है", "मुझे चाहिए", "मेरा", "[SEP]", "कांटा", "चाकू", "चम्मच", "प्लेट", "पीने का गिलास", "मग", "स्ट्रॉ", "सर्विएट", "बाउल", "प्लेस मैट", "कुकर", "फ्रिज", "एप्रन"]);
phrasesCboardClassicHi.push(["School", "कलम", "पेंसिल", "पेंसिल शार्पनर", "पेंसिल केस", "स्कूल बैग", "नोटबुक", "रिंग बाइंडर", "कैलकुलेटर", "कैंची", "ब्लैकबोर्ड", "शिक्षक", "टिपिक्स", "क्रेयन", "ग्लू", "स्टैप्लर"]);
phrasesCboardClassicHi.push(["School: Class Room", "अल्जेब्रा क्लास", "कला क्लास", "ड्रामा क्लास", "अंग्रेजी क्लास", "भूगोल क्लास", "इतिहास क्लास", "मैथ्स क्लास", "आईटी क्लास", "संगीत क्लास", "विज्ञान क्लास", "कोई क्लास नहीं"]);
phrasesCboardClassicHi.push(["Animals", "मेरे पास है", "मैंने देखा", "मैं चाहता हूँ", "[SEP]", "कुत्ता", "बिल्ली", "हैम्स्टर", "खरगोश", "हेजहॉग", "घोड़ा", "गधा", "टोड", "भेड़", "कुत्ते का कमरा", "पिंजरा", "स्थिर", "मेंढक", "चिकी", "मछली", "लिविंग चिकन", "चूहा", "चूहा", "तोता", "घोंसला", "हंस", "गाय", "कछुआ", "उंट", "सूअर"]);
phrasesCboardClassicHi.push(["Animals: Wild", "बाघ", "हाथी", "जिराफ", "गोरिल्ला", "सांप", "रैटल सांप", "पांडा", "इप्पोपोटामस", "भालू", "ध्रुवीय भालू", "लोमड़ी", "शेर", "भेड़िया", "शिंपेनजी", "हिरण", "जेब्रा", "कंगारू", "बैट", "कोआला", "गैंडा", "डायनासोर", "चीता", "एंट इटर", "एंटेलोप"]);
phrasesCboardClassicHi.push(["Animals: Marine", "सीहॉर्स", "पेंगुइन", "स्टारफिश", "डॉल्फिन", "सील", "किलर व्हेल", "केकड़ा", "गोल्डफिश", "ओस्टर", "झींगा", "एलेग्रीक", "जेलीफ़िश", "वालरस", "ट्रॉपिकल फिश", "फिश कोइ कार्प", "फिश"]);
phrasesCboardClassicHi.push(["Animals: Birds", "उल्लू", "वाइट", "सीगुल", "कबूतर", "तोता", "चिकी", "लिविंग चिकन", "बत्तख", "हंस", "स्वैन", "रॉबिन", "टर्की", "ऑस्ट्रिच", "पक्षी", "पेंगुइन", "फ्लेमिंगो", "कॉकरील", "कॉकटिएल"]);
phrasesCboardClassicHi.push(["Insects", "स्नेल", "बीटल", "हनी बी", "चींटी", "क्रिकेट", "मथ", "तितली", "उड़ान", "ड्रैगनफ्लाई", "इयरविग", "स्लग", "बीड़ी", "बीज़ नेस्ट", "कैटरीपिलर"]);
phrasesCboardClassicHi.push(["Technology", "मुझे चाहिए", "कहाँ है", "मेरा", "आपका", "[SEP]", "कंप्यूटर", "लैपटॉप", "इलेक्ट्रिक चार्जर", "बैटरी", "कैमरा", "हेडफ़ोन", "प्लेस्टेशन", "यूएसबी स्टिक", "प्रिंटर", "कंप्यूटर माउस", "आईपॉड", "आईफोन", "स्टीरियो", "डीवीडी प्लेयर", "वी", "रिमोट कंट्रोल", "कंप्यूटर कीबोर्ड", "एक्सटेंशन लीड"]);
phrasesCboardClassicHi.push(["Weather", "बारिश", "सूरज", "बर्फ", "तूफान", "बादल", "शरद ऋतु", "सर्दियों", "वसंत", "ग्रीष्म"]);
phrasesCboardClassicHi.push(["Plants", "पॉटेड पौधा", "पेड़", "शाखा", "पत्ती", "पेड़ का तना", "घास", "हेज", "झाड़ी", "फूल", "डेफ़ोडिल", "डेज़ी", "गुलाब", "ट्यूलिप", "पंख", "बीज, पौधे", "छड़ी", "जड़ें", "अंगूर", "हॉली", "खरपतवार", "आइवी", "पाम ट्री", "मृत पौधा", "एकरन", "कैक्टस", "पाइन कोन"]);
phrasesCboardClassicHi.push(["Sports", "जुडो", "टेनिस", "बास्केटबॉल", "क्रिकेट", "बेसबॉल बैट", "बैडमिंटन", "गोल्फ", "तीरंदाजी", "स्किइंग करने के लिए", "तैराकी करने के लिए", "डार्ट्स", "पूल स्नूकर", "घोड़ा सवारी करने के लिए", "बॉलिंग", "बोकिया", "वॉलीबॉल", "ओलंपिक रिंग", "पारा ओलंपिक खेल", "ओलंपिक मशाल", "गोल्फ", "रेस एथलेटिक्स"]);
phrasesCboardClassicHi.push(["Transport", "चलो", "मैं गया", "[SEP]", "कार", "साइकिल", "व्हीलचेयर", "मोटरसाइकिल", "बस", "टैक्सी", "एयरप्लेन", "हेलिकॉप्टर", "ट्रेन", "मिनी बस", "फेरी", "बोट", "ट्रैक्टर", "स्केटबोर्ड", "आर्मी टैंक", "हॉट एयर बैलून", "फायर इंजन", "अंतरिक्ष यान", "रॉकेट", "जीप", "परिवहन", "लॉरी", "कचरा लॉरी"]);
phrasesCboardClassicHi.push(["Places", "घर", "दुकान", "बैंक", "ऑफिस ब्लॉक", "बाहर", "समुद्र तट", "जिम", "चर्च", "खेत", "बैक गार्डन", "स्कूल", "सर्जरी स्वास्थ्य केंद्र", "गैराज", "एक्वेरियम"]);
phrasesCboardClassicHi.push(["Position", "में", "बाहर", "पर", "अंडर", "ओवर", "पीछे", "सामने", "के माध्यम से", "के बीच", "ऊपर", "नीचे", "बाएँ", "दाएँ", "आस-पास", "आगे", "पीछे", "से पहले", "के बाद"]);
phrasesCboardClassicHi.push(["Toys", "मैं चाहता हूँ", "मैं प्यार करता हूँ", "कहाँ", "आपका", "मेरा", "[SEP]", "टेडी बियर", "गुड़िया", "शेप पज़ल", "खिलौना कार", "खिलौना सैनिक", "खिलौना टेलीफोन", "ईंटें", "गेंद", "बबल", "पतंग", "प्लेडो", "पपेट", "मोती", "लेगो", "ट्रैंपोलिन", "खिलौने", "रंग भरने की किताब", "खिलौने बॉक्स", "स्टिकर"]);
phrasesCboardClassicHi.push(["Actions", "प्राप्त करने के लिए", "देने के लिए", "रखने के लिए", "सुनने के लिए", "आने के लिए", "जाने के लिए", "प्रतीक्षा करने के लिए", "लेने के लिए", "देखने के लिए", "सोचने के लिए", "बनाने के लिए", "तोड़ने के लिए", "सोने के लिए", "जागने के लिए", "बोलने के लिए", "चिल्लाने के लिए", "लाना के लिए", "मूव करने के लिए", "गिरने के लिए", "खड़े होने के लिए", "बैठने के लिए", "साझा करने के लिए", "ले जाने के लिए", "पहुंचने के लिए", "पकड़ने के लिए", "रखने के लिए", "कूदने के लिए", "पीछा करने के लिए", "चढ़ने के लिए", "रेंगने के लिए", "हॉप करने के लिए", "दरवाजे में प्रवेश करने के लिए", "दरवाजे से बाहर निकलने के लिए", "आराम करने के लिए", "गिरफ्तार करने के लिए", "ढूंढने के लिए", "गेंद को किक करने के लिए", "पढ़ने के लिए", "दिमाग बदलने के लिए", "प्रार्थना करने के लिए", "खुलने के लिए"]);
phrasesCboardClassicHi.push(["Questions", "क्या", "क्यों", "कैसे", "कितने", "कब", "कौन", "कहाँ"]);
phrasesCboardClassicHi.push(["Furniture", "कुर्सी", "टेबल", "हाई चेयर", "रॉकिंग चेयर", "कॉफी टेबल", "कालीन", "कोने का कैबिनेट", "ड्रेसर", "ड्रॉवर", "दरवाजा", "खिड़की", "बुक शेल्फ", "बुककेस", "स्टूल", "बीनाग", "डाइनिंग टेबल", "कर्टेन", "सिंगल बेड", "ब्लैंकेट", "लैंप", "पिक्चर"]);
phrasesCboardClassicHi.push(["Hygiene", "टूथब्रश", "टूथपेस्ट", "साबुन", "तौलिया", "कंघी", "नेल क्लिपर", "पेपर तौलिया", "सैनिटरी तौलिया", "टिश्यू", "शैम्पू", "आफ्टरशेव", "इलेक्ट्रिक रेज़र", "हेयर कंडीशनर", "मेकअप", "डोडोरेंट", "टॉयलेट पेपर", "हेयरड्रायर", "हेयर डाई"]);
phrasesCboardClassicHi.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicHi);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicJa = ["Cboard Classic Home (GPL-3.0) [MT:ja]"]; //FIXME 8 quotes short
phrasesCboardClassicJa.push(["Common", "はい", "いいえ", "こんにちは", "さようなら", "良い", "悪い", "話せません", "ありがとう", "お願いします"]);
phrasesCboardClassicJa.push(["Time", "時間", "今", "昨日", "今日", "明日", "朝", "午後", "夜", "日", "今週", "週末", "来週", "今月", "来月", "先月", "一時間", "分", "秒"]);
phrasesCboardClassicJa.push(["Food", "食べ物", "お腹が空いた", "欲しい", "そして", "嫌いだ", "[SEP]", "スープ", "野菜", "果物", "ピザ", "パン", "ゆで卵", "目玉焼き", "クロワッサン", "シリアル", "おかゆ", "パンケーキ", "パスタ", "鶏肉", "牛肉", "魚", "ミートソーススパゲッティ", "ハンバーガー", "ホットドッグ", "パイ", "胡椒", "塩", "ケチャップ", "酢", "サンドイッチ", "ベーグル", "トースト", "チーズ", "麺", "ポテトチップス"]);
phrasesCboardClassicJa.push(["Food: Soup", "スープ", "スープ", "ニンジンスープ", "チキンスープ", "マッシュルームスープ", "オニオンスープ", "エンドウ豆スープ", "トマトスープ", "野菜スープ"]);
phrasesCboardClassicJa.push(["Food: Vegetables", "野菜", "サラダ", "ジャガイモ", "マッシュポテト", "サツマイモ", "米", "焗豆", "スイートコーン", "ビーツ", "ニンジン", "トマト", "きゅうり", "キャベツ", "タマネギ", "ネギ", "ピーマン", "唐辛子", "レタス", "アスパラガス", "ラディッシュ", "ナス", "ブロッコリー", "エンドウ豆", "アボカド", "グリーンビーンズ", "ほうれん草", "カボチャ", "芽キャベツ"]);
phrasesCboardClassicJa.push(["Food: Fruit", "イチゴ", "リンゴ", "アプリコット", "桃", "マンゴー", "梨", "オレンジ", "メロン", "バナナ", "キウイ", "パイナップル", "スイカ", "サクランボ", "グレープフルーツ", "ぶどう"]);
phrasesCboardClassicJa.push(["Drinks", "喉が渇いた", "飲みたい", "嫌いだ", "そして", "[SEP]", "飲み物", "水", "オレンジジュース", "アップルジュース", "ぶどうジュース", "クランベリージュース", "パイナップルジュース", "レモネード", "牛乳", "ミルクシェイク", "ホットチョコレート", "お茶", "コーヒー", "ワイン", "ビール", "麦"]);
phrasesCboardClassicJa.push(["Snacks", "食べたい", "[SEP]", "アイスクリーム", "チョコレート", "ポテトチップス", "マシュマロ", "ビスケット", "ジェリービーンズ", "キャンディケーン", "ナッツ", "ケーキのスライス", "チョコレートチップビスケット", "ヨーグルト", "アイスキャンディー", "プレッツェル", "ピーナッツ"]);
phrasesCboardClassicJa.push(["Activities", "やりたい", "[SEP]", "自転車に乗る", "バスケットボールをする", "ボウリングをする", "コンピュータゲームをする", "テレビを見る", "パズルを解く", "サッカーをする", "ビンゴをする", "入浴する", "働く", "料理する", "運動する", "走る", "腕相撲をする", "お祝いする", "泳ぐ", "釣りをする", "ダーツをする", "カードゲームをする"]);
phrasesCboardClassicJa.push(["Emotions", "私は", "あなたは", "あなたはですか", "[SEP]", "幸せ", "悲しい", "怒っている", "怖い", "困惑している", "暑い", "寒い", "興奮している", "リラックスしている"]);
phrasesCboardClassicJa.push(["Body", "痛みがある", "[SEP]", "かゆい", "頭", "顔", "首", "肩", "腕", "右の手", "左の手", "肘", "背中", "胃", "指", "足", "喉", "腰", "お尻", "親指", "爪", "指の爪", "筋肉", "皮膚", "骨", "膝"]);
phrasesCboardClassicJa.push(["Body: Face", "顔", "眉", "目", "目", "まつげ", "頬", "耳", "唇", "歯", "歯茎", "舌", "顎"]);
phrasesCboardClassicJa.push(["Body: Medical", "私は", "私は持っている", "必要です", "[SEP]", "背中の痛み", "頭痛", "お腹の痛み", "歯痛", "吸入器", "発疹", "手術", "絆創膏", "薬", "レントゲン", "手術", "健康センター", "注射器", "錠剤", "血圧", "切り傷", "酸素マスク", "吐く", "体温計"]);
phrasesCboardClassicJa.push(["Clothing", "シャツ", "Tシャツ", "ズボン", "短パン", "ジャケット", "コート", "ブラウス", "ドレス", "セーター", "パーカー", "スカート", "ベスト", "パジャマ"]);
phrasesCboardClassicJa.push(["Clothing: Accessories", "眼鏡", "サングラス", "ニット帽", "帽子", "蝶ネクタイ", "ネクタイ", "靴下", "手袋", "ブーツ", "ブラジャー", "ボクサーパンツ", "パンツ", "財布", "宝石", "サンダル", "スニーカー", "スカーフ", "傘", "腕時計"]);
phrasesCboardClassicJa.push(["Colours", "黒", "白", "すみれ色", "黄色", "ピンク", "青", "緑", "赤"]);
phrasesCboardClassicJa.push(["People", "お父さん", "お母さん", "先生", "医者", "看護師", "言語聴覚士", "警察官", "配達員", "郵便局員", "歯医者", "大工", "秘書", "タクシードライバー", "庭師", "ITアシスタント"]);
phrasesCboardClassicJa.push(["People: Family", "私の", "あなたの", "[SEP]", "家族", "祖父", "祖母", "お母さん", "お父さん", "姉", "兄弟", "娘", "息子", "赤ちゃん"]);
phrasesCboardClassicJa.push(["People: Characters", "妖精", "幽霊", "エルフ", "魔女", "モンスター"]);
phrasesCboardClassicJa.push(["Describe", "私は", "それは", "あなたは", "いいえ", "[SEP]", "醜い", "きれいな", "大きい", "小さい", "同じ", "古い", "速い", "汚い", "静かな", "うるさい", "太った", "痩せた", "背の高い", "背の低い", "長い", "空の", "満たされた", "深い", "浅い", "開いた", "閉じた", "重い", "軽い", "壊れた", "柔らかい", "硬い", "カールした", "厚い", "光沢のある", "おしゃれな", "騒々しい", "乾燥した", "濡れた", "粘着性の"]);
phrasesCboardClassicJa.push(["Shapes", "円", "楕円", "正三角形", "四角形", "長方形", "五角形", "六角形", "八角形", "星", "ダイヤモンド", "ピラミッド三辺基"]);
phrasesCboardClassicJa.push(["Kitchen", "どこに", "必要です", "私の", "[SEP]", "フォーク", "ナイフ", "スプーン", "皿", "飲み物グラス", "マグ", "ストロー", "ナプキン", "ボウル", "プレースマット", "コンロ", "冷蔵庫", "エプロン"]);
phrasesCboardClassicJa.push(["School", "ペン", "鉛筆", "鉛筆削り", "鉛筆ケース", "学校バッグ", "ノート", "リングバインダー", "電卓", "ハサミ", "黒板", "先生", "修正液", "クレヨン", "のり", "ステープラー"]);
phrasesCboardClassicJa.push(["School: Class Room", "代数クラス", "美術クラス", "演劇クラス", "英語クラス", "地理クラス", "歴史クラス", "数学クラス", "ITクラス", "音楽クラス", "理科クラス", "クラスはありません"]);
phrasesCboardClassicJa.push(["Animals", "私は持っている", "私は見た", "欲しい", "[SEP]", "犬", "猫", "ハムスター", "ウサギ", "ヘッジホッグ", "馬", "ロバ", "ヒキガエル", "羊", "犬小屋", "ケージ", "馬小屋", "カエル", "ヒナ", "魚", "ニワトリの生きた", "ネズミ", "ハツカネズミ", "オウム", "巣", "ガチョウ", "牛", "カメ", "ラクダ", "ヒナ"]);
phrasesCboardClassicJa.push(["Animals: Wild", "トラ", "ゾウ", "キリン", "ゴリラ", "ヘビ", "ガラガラヘビ", "パンダ", "ナマケモノ", "クマ", "ホッキョクグマ", "キツネ", "ライオン", "オオカミ", "チンパンジー", "シカ", "シマウマ", "カンガルー", "コウモリ", "コアラ", "サイ", "恐竜", "チーター", "アリクイ", "シタン"]);
phrasesCboardClassicJa.push(["Animals: Marine", "カエルアンコウ", "ペンギン", "ヒトデ", "イルカ", "アザラシ", "シャチ", "カニ", "金魚", "カキ", "エビ", "ワニ", "クラゲ", "アザラシ", "熱帯魚", "コイ", "魚"]);
phrasesCboardClassicJa.push(["Animals: Birds", "フクロウ", "ハゲワシ", "カモメ", "ハト", "オウム", "ヒナ", "ニワトリの生きた", "アヒル", "ガチョウ", "白鳥", "コマドリ", "七面鳥", "ダチョウ", "鳥", "ペンギン", "フラミンゴ", "ニワトリ", "コサチュウ"]);
phrasesCboardClassicJa.push(["Insects", "カタツムリ", "カブトムシ", "ハチ", "アリ", "コオロギ", "蛾", "蝶", "ハエ", "トンボ", "イヤークリッカー", "ナメクジ", "ハチ", "ハチの巣", "ハチの巣"]);
phrasesCboardClassicJa.push(["Technology", "必要です", "どこに", "私の", "あなたの", "[SEP]", "コンピュータ", "ラップトップ", "電気充電器", "バッテリー", "カメラ", "ヘッドホン", "プレイステーション", "USBスティック", "プリンター", "コンピュータマウス", "iPod", "iPhone", "ステレオ", "DVDプレーヤー", "Wii", "リモコン", "コンピュータキーボード", "延長コード"]);
phrasesCboardClassicJa.push(["Weather", "雨", "太陽", "雪", "雷雨", "曇り", "秋", "冬", "春", "夏"]);
phrasesCboardClassicJa.push(["Plants", "鉢植えの植物", "木", "枝", "葉", "木の幹", "草", "生垣", "茂み", "花", "スイセン", "ヒナギク", "バラ", "チューリップ", "花びら", "種子", "種子", "枝", "根", "つる", " Holly", "雑草", "アイビー", "ヤシの木", "死んだ植物", "ドングリ", "サボテン"]);
phrasesCboardClassicJa.push(["Sports", "柔道", "テニス", "バスケットボール", "クリケット", "野球のバット", "バドミントン", "ゴルフ", "弓矢", "スキーをする", "泳ぐ", "ダーツ", "プールスヌーカー", "馬に乗る", "ボウリング", "ボッチア", "バレーボール", "オリンピックリング", "パラリンピックゲーム", "オリンピックトーチ", "ゴルフ", "レース陸上競技"]);
phrasesCboardClassicJa.push(["Transport", "行きましょう", "行きました", "[SEP]", "車", "自転車", "車椅子", "オートバイ", "バス", "タクシー", "飛行機", "ヘリコプター", "電車", "ミニバス", "フェリー", "船", "トラクター", "スケートボード", "戦車", "熱気球", "消防車", "宇宙船", "ロケット", "Jeep", "救急車", "警察車", "バン", "輸送", "トラック"]);
phrasesCboardClassicJa.push(["Places", "家", "店", "銀行", "オフィスビル", "外", "ビーチ", "ジム", "教会", "畑", "裏庭", "学校", "健康センター", "ガレージ", "水族館"]);
phrasesCboardClassicJa.push(["Position", "に", "出", "上", "下", "上", "後ろ", "前", "中", "間", "上", "下", "左", "右", "周り", "前", "後ろ", "前", "後", ""]);
phrasesCboardClassicJa.push(["Toys", "食べたい", "愛している", "どこ", "あなたの", "私の", "[SEP]", "テディベア", "人形", "形のパズル", "おもちゃの車", "おもちゃの兵士", "おもちゃの電話", "レンガ", "ボール", "シャボン玉", "凧", "粘土", "人形", "ビーズ", "レゴ", "トランポリン", "おもちゃ", "塗り絵"]);
phrasesCboardClassicJa.push(["Actions", "持ってくる", "あげる", "置く", "聞く", "来る", "行く", "待つ", "取る", "見る", "作る", "壊す", "寝る", "起きる", "話す", "叫ぶ", "運ぶ", "動く", "転ぶ", "立つ", "座る", "分かち合う", "運ぶ", "届く", "持つ", "保つ", "ジャンプする", "追いかける", "登る", "ハイハイする", "跳ねる", "ドアに入る", "ドアから出る", "休む", "逮捕する", "見つける", "ボールを蹴る", "勉強する", "考えを変える", "祈る", "開く"]);
phrasesCboardClassicJa.push(["Questions", "何", "なぜ", "どのように", "いくつ", "いつ", "どちら", "どこ"]);
phrasesCboardClassicJa.push(["Furniture", "椅子", "テーブル", "ハイチェア", "ロッキングチェア", "コーヒーテーブル", "ラグ", "コーナーキャビネット", "ドレッサー", "引き出し", "ドア", "窓", "本棚", "本棚", "スツール", "ビーンバッグ", "ダイニングテーブル", "カーテン", "シングルベッド", "毛布", "ランプ", "絵"]);
phrasesCboardClassicJa.push(["Hygiene", "歯ブラシ", "歯磨き粉", "石鹸", "タオル", "櫛", "爪切り", "ペーパータオル", "生理用品", "ティッシュ", "シャンプー", "アフターシェーブ", "電気シェーバー", "コンディショナー", "メイクアップ", "デオドラント", "トイレットペーパー", "ヘアドライヤー", "ヘアカラー"]);
phrasesCboardClassicJa.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicJa);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicRu = ["Cboard Classic Home (GPL-3.0) [MT:ru]"]; //FIXME 10 quotes short
phrasesCboardClassicRu.push(["Common", "да", "нет", "здравствуйте", "прощайте", "хорошо", "плохо", "Я не могу говорить", "спасибо", "пожалуйста"]);
phrasesCboardClassicRu.push(["Time", "время", "сейчас", "вчера", "сегодня", "завтра", "утро", "день", "ночь", "день недели", "эта неделя", "выходные", "следующая неделя", "этот месяц", "следующий месяц", "прошлый месяц", "один час", "минута", "секунда"]);
phrasesCboardClassicRu.push(["Food", "Я голоден", "Я хочу", "и", "Я не люблю", "[SEP]", "суп", "овощи", "фрукты", "пицца", "хлеб", "вареное яйцо", "жареное яйцо", "круассан", "мюсли", "каша", "блины", "паста", "птица", "говядина", "рыба", "спагетти болоньезе", "гамбургер", "хот-дог", "пирог", "перечница", "соль", "томатный соус", "уксус", "сэндвич", "багель", "тост", "сыр", "лапша", "чипсы"]);
phrasesCboardClassicRu.push(["Food: Soup", "суп", "морковный суп", "куриный суп", "грибной суп", "луковый суп", "гороховый суп", "томатный суп", "овощной суп"]);
phrasesCboardClassicRu.push(["Food: Vegetables", "овощи", "салат", "картофель", "пюре", "сладкий картофель", "рис", "фасоль в томатном соусе", "кукуруза", "свекла", "морковь", "помидор", "огурец", "капуста", "лук", "зеленый лук", "перец", "перец чили", "салат латук", "спаржа", "редис", "баклажан", "брокколи", "горошек", "авокадо", "зеленый горошек", "шпинат", "тыква", "брюссельская капуста"]);
phrasesCboardClassicRu.push(["Food: Fruit", "клубника", "яблоко", "абрикос", "персик", "манго", "груша", "апельсин", "мелон", "банан", "киви", "ананас", "арбуз", "вишня", "грейпфрут", "виноград"]);
phrasesCboardClassicRu.push(["Drinks", "Я хочу пить", "Я хочу", "Я не люблю", "[SEP]", "напиток", "вода", "апельсиновый сок", "яблочный сок", "виноградный сок", "клюквенный сок", "ананасовый сок", "лимонад", "молоко", "молочный коктейль", "горячий шоколад", "чай", "кофе", "вино", "пиво", "солома"]);
phrasesCboardClassicRu.push(["Snacks", "Я хочу", "[SEP]", "мороженое", "шоколад", "чипсы", "зефир", "печенье", "бобы jelly beans", "леденец", "орехи", "кусок торта", "печенье с шоколадной крошкой", "йогурт", "мороженое на палочке", "соленый крендель", "арахис"]);
phrasesCboardClassicRu.push(["Activities", "Я хочу", "[SEP]", "кататься на велосипеде", "играть в баскетбол", "играть в боулинг", "играть в компьютерные игры", "смотреть телевизор", "собирать паззл", "играть в футбол", "играть в бинго", "купаться", "работать", "готовить", "заниматься спортом", "бегать", "бороться", "праздновать", "плавать", "рыбачить", "играть в дартс", "играть в карты"]);
phrasesCboardClassicRu.push(["Emotions", "Я есть", "Ты есть", "Ты есть?", "[SEP]", "счастливый", "грустный", "злой", "испуганный", "сбитый с толку", "горячий", "холодный", "взволнованный", "расслабленный"]);
phrasesCboardClassicRu.push(["Body", "У меня болит", "[SEP]", "зуд", "голова", "лицо", "шея", "плечо", "руки", "правая рука", "левая рука", "локоть", "спина", "живот", "палец", "нога", "ступня", "горло", "бедро", "задница", "большой палец", "ногтевой ноготь", "ноготь пальца", "мышцы", "кожа", "кость", "колено"]);
phrasesCboardClassicRu.push(["Body: Face", "лицо", "брови", "глаза", "глаз", "ресница", "щека", "ухо", "губы", "зубы", "десна", "язык", "подбородок"]);
phrasesCboardClassicRu.push(["Body: Medical", "Я есть", "У меня есть", "Мне нужно", "[SEP]", "боль в спине", "головная боль", "боль в животе", "зубная боль", "ингалятор", "сыпь", "операция", "пластырь", "лекарство", "рентген", "хирургический центр здоровья", "шприц", "таблетки", "давление", "порез", "кислородная маска", "тошнить", "термометр"]);
phrasesCboardClassicRu.push(["Clothing", "рубашка", "футболка", "брюки", "шорты", "куртка", "пальто", "блузка", "платье", "свитер", "толстовка", "юбка", "жилет", "пижама"]);
phrasesCboardClassicRu.push(["Clothing: Accessories", "очки", "солнцезащитные очки", "шапка с помпоном", "кепка", "бабочка", "галстук", "носки", "перчатки", "ботинки", "бра", "боксеры", "трусы", "кошелек", "украшения", "сандалии", "кроссовки", "шарф", "зонт", "часы"]);
phrasesCboardClassicRu.push(["Colours", "черный", "белый", "лиловый", "желтый", "розовый", "синий", "зеленый", "красный"]);
phrasesCboardClassicRu.push(["People", "папа", "мама", "учитель", "врач", "медсестра", "логопед", "полиция", "курьер", "почтальон", "стоматолог", "плотник", "секретарь", "водитель такси", "садовник", "IT-помощник"]);
phrasesCboardClassicRu.push(["People: Family", "мой", "твой", "[SEP]", "семья", "дедушка", "бабушка", "мама", "папа", "сестра", "брат", "дочь", "сын", "ребенок"]);
phrasesCboardClassicRu.push(["People: Characters", "фея", "призрак", "эльф", "ведьма", "монстр"]);
phrasesCboardClassicRu.push(["Describe", "Я есть", "Это есть", "Ты есть", "нет", "[SEP]", "некрасивый", "красивый", "большой", "маленький", "одинаковый", "старый", "быстрый", "грязный", "тихий", "громкий", "толстый", "тонкий", "высокий", "низкий", "длинный", "пустой", "полный", "глубокий", "мелкий", "открытый", "закрытый", "тяжелый", "легкий", "сломанный", "мягкий", "жесткий", "кудрявый", "толстый", "блестящий", "пышный", "шумный", "сухой", "мокрый", "липкий"]);
phrasesCboardClassicRu.push(["Shapes", "круг", "овал", "треугольник равносторонний", "квадрат", "прямоугольник", "пятиугольник", "шестиугольник", "восьмиугольник", "звезда", "ромб", "пирамида с треугольным основанием"]);
phrasesCboardClassicRu.push(["Kitchen", "Где это", "Мне нужно", "мой", "[SEP]", "вилка", "нож", "ложка", "тарелка", "поднос", "кружка", "соломинка", "салфетка", "миска", "скатерть", "плита", "холодильник", "фартук"]);
phrasesCboardClassicRu.push(["School", "ручка", "карандаш", "точилка", "пенал", "школьная сумка", "блокнот", "переплетенный блокнот", "калькулятор", "ножницы", "доска", "учитель", "замазка", "мелок", "клей", "скобозажим"]);
phrasesCboardClassicRu.push(["School: Class Room", "класс алгебры", "класс искусства", "класс драмы", "класс английского языка", "класс географии", "класс истории", "класс математики", "класс информатики", "класс музыки", "класс науки", "нет урока"]);
phrasesCboardClassicRu.push(["Animals", "У меня есть", "Я видел", "Я хочу", "[SEP]", "собака", "кошка", "хомяк", "кролик", "еж", "лошадь", "осел", "жаба", "овца", "вольер для собак", "клетка", "конюшня", "лягушка", "цыпленок", "рыба", "живая курица", "мышь", "крыса", "попугай", "гнездо", "гусь", "корова", "черепаха", "верблюд", "поросёнок"]);
phrasesCboardClassicRu.push(["Animals: Wild", "тигр", "слон", "жираф", "горилла", "змея", "змея-гадюка", "панду", "гиппопотам", "медведь", "белый медведь", "лиса", "лев", "волк", "шимпанзе", "олень", "зебра", "кенгуру", "летучая мышь", "коала", "носорог", "динозавр", "гепард", "землеройка", "антилопа", "хамелеон"]);
phrasesCboardClassicRu.push(["Animals: Marine", "морской конёк", "пингвин", "морская звезда", "дельфин", "тюлень", "косатка", "краб", "золотая рыбка", "устрица", "креветка", "крокодил", "медуза", "нерпа", "тропическая рыбка", "карп кои", "рыба"]);
phrasesCboardClassicRu.push(["Animals: Birds", "сова", "гриф", "чайка", "голубь", "попугай", "цыпленок", "живая курица", "утка", "гусь", "лебедь", "робин", "индейка", "страус", "птица", "пингвин", "фламинго", "павлин", "петух", "цветочный попугай"]);
phrasesCboardClassicRu.push(["Insects", "улитка", "жук", "пчела", "муравей", "сверчок", "мотылек", "бабочка", "муха", "стрекоза", "ушастая моль", "слизень", "оса", "улей", "пчелиное гнездо"]);
phrasesCboardClassicRu.push(["Technology", "Мне нужно", "Где это", "мой", "твой", "[SEP]", "компьютер", "ноутбук", "электрический зарядный", "батарея", "камера", "наушники", "PlayStation", "USB-накопитель", "принтер", "компьютерная мышь", "iPod", "iPhone", "стерео", "DVD-плеер", "Wii", "пульт дистанционного управления", "компьютерная клавиатура", "удлинительный шнур"]);
phrasesCboardClassicRu.push(["Weather", "дождь", "солнце", "снег", "гроза", "облачно", "осень", "зима", "весна", "лето"]);
phrasesCboardClassicRu.push(["Plants", "комнатное растение", "дерево", "ветка", "лист", "ствол дерева", "трава", "изгородь", "куст", "цветок", "нарцисс", "ромашка", "роза", "тюльпан", "лепесток", "сеянец", "семена", "палка", "корни", "виноградная лоза", "хвойные растения", "сорные растения", "плющ", "пальма", "мертвое растение", "каштан", "кактус"]);
phrasesCboardClassicRu.push(["Sports", "дзюдо", "теннис", "баскетбол", "крикет", "бейсбольная бита", "бадминтон", "гольф", "стрельба из лука", "кататься на лыжах", "плавать", "дартс", "снукер", "ездить на лошади", "боулинг", "бочча", "волейбол", "олимпийские кольца", "параолимпийские игры", "олимпийский огонь", "гольф", "бег"]);
phrasesCboardClassicRu.push(["Transport", "Поедем на", "Я поехал на", "[SEP]", "машина", "велосипед", "инвалидная коляска", "мотоцикл", "автобус", "такси", "самолёт", "вертолёт", "поезд", "минивэн", "паром", "лодка", "трактор", "скейтборд", "танковый", "воздушный шар", "пожарная машина", "космический корабль", "ракета", "Jeep", "скорая помощь", "полицейская машина", "фургон", "транспорт"]);
phrasesCboardClassicRu.push(["Places", "дом", "магазин", "банк", "офисный центр", "на улице", "пляж", "спортзал", "церковь", "поле", "задний двор", "школа", "хирургический центр здоровья", "гараж", "аквариум"]);
phrasesCboardClassicRu.push(["Position", "в", "из", "на", "под", "над", "за", "перед", "через", "между", "вверх", "вниз", "слева", "справа", "вокруг", "вперед", "назад", "перед", "после"]);
phrasesCboardClassicRu.push(["Toys", "Я хочу", "Я люблю", "где", "твой", "мой", "[SEP]", "мягкая игрушка", "кукла", "пазл", "игрушечная машина", "игрушечный солдатик", "игрушечный телефон", "кирпичи", "мяч", "пузыри", "воздушный змей", "пластилин", "марионетка", "бусины", "Lego", "батут", "игрушки", "книга раскрасок", "ящик для игрушек", "наклейки"]);
phrasesCboardClassicRu.push(["Actions", "получать", "давать", "класть", "слышать", "приходить", "идти", "ждать", "брать", "смотреть", "думать", "делать", "ломать", "спать", "просыпаться", "говорить", "кричать", "приносить", "двигаться", "падать", "стоять", "сидеть", "делиться", "нести", "дотягиваться", "держать", "сохранять", "прыгать", "гнаться", "карабкаться", "ползать", "прыгать", "входить в дверь", "выходить из двери", "отдыхать", "арестовывать", "находить", "пинать мяч", "учиться", "менять мнение", "молиться", "открывать"]);
phrasesCboardClassicRu.push(["Questions", "что", "почему", "как", "сколько", "когда", "какой", "где"]);
phrasesCboardClassicRu.push(["Furniture", "стул", "стол", "высокий стул", "качалка", "журнальный столик", "коврик", "угольный шкафчик", "тумба", "ящик", "дверь", "книжный шкаф", "стеллаж", "табуретка", "beanbag", "обеденный стол", "занавески", "односпальная кровать", "одеяло", "лампа", "картина"]);
phrasesCboardClassicRu.push(["Hygiene", "зубная щетка", "зубная паста", "мыло", "полотенце", "расческа", "кусачки для ногтей", "бумажное полотенце", "прокладка", "носовые платки", "шампунь", "послебрительное средство", "электробритва", "кондиционер для волос", "макияж", "дезодорант", "туалетная бумага", "фен", "краска для волос"]);
phrasesCboardClassicRu.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicRu);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesCboardClassicZh = ["Cboard Classic Home (GPL-3.0) [MT:zh]"]; //FIXME 42 quotes more
phrasesCboardClassicZh.push(["Common", "普通", "是", "否", "你好", "再见", "好", "不好", "我不会说", "谢谢", "请"]);
phrasesCboardClassicZh.push(["Time", "时间", "时间", "现在", "昨天", "今天", "早上", "下午", "晚上", "白天", "本周", "周末", "下周", "本月", "下个月", "上个月", "一个小时", "分钟", "秒"]);
phrasesCboardClassicZh.push(["Food", "食物", "我饿了", "我想要", "和", "我不喜欢", "[SEP]", "汤", "蔬菜", "水果", "披萨", "面包", "煮鸡蛋", "煎蛋", "羊角面包", "麦片", "粥", "薄饼", "意大利面", "禽肉", "牛肉", "鱼", "意大利肉酱意大利面", "汉堡包", "热狗", "派", "胡椒机", "盐", "番茄酱", "醋", "三明治", "贝果", "吐司", "奶酪", "面条", "薯片"]);
phrasesCboardClassicZh.push(["Food: Soup", "食物：汤", "汤", "胡萝卜汤", "鸡汤", "蘑菇汤", "洋葱汤", "豌豆汤", "番茄汤", "蔬菜汤"]);
phrasesCboardClassicZh.push(["Food: Vegetables", "食物：蔬菜", "蔬菜", "沙拉", "土豆", "土豆泥", "烤土豆", "红薯", "豆子", "甜菜根", "胡萝卜", "番茄", "黄瓜", "卷心菜", "洋葱", "葱", "辣椒", "辣椒椒", "生菜", "芦笋", "萝卜", "茄子", "西兰花", "豌豆", "鳄梨", "绿豆", "菠菜", "南瓜", "甘蓝"]);
phrasesCboardClassicZh.push(["Food: Fruit", "食物：水果", "草莓", "苹果", "杏子", "桃子", "芒果", "梨", "橙子", "甜瓜", "香蕉", "猕猴桃", "菠萝", "西瓜", "樱桃", "葡萄柚", "葡萄"]);
phrasesCboardClassicZh.push(["Drinks", "饮料", "我渴了", "我想要", "我不喜欢", "[SEP]", "饮料", "水", "橙汁", "苹果汁", "葡萄汁", "蔓越莓汁", "菠萝汁", "柠檬水", "牛奶", "奶昔", "热巧克力", "茶", "咖啡", "葡萄酒", "啤酒", "吸管"]);
phrasesCboardClassicZh.push(["Snacks", "零食", "我想要", "[SEP]", "冰淇淋", "巧克力", "薯片", "棉花糖", "饼干", "豆子", "拐杖糖", "坚果", "蛋糕片", "巧克力饼干", "酸奶", "冰棍", "椒盐卷饼", "花生"]);
phrasesCboardClassicZh.push(["Activities", "活动", "我想要", "[SEP]", "骑自行车", "打篮球", "保龄球", "玩电脑游戏", "看电视", "拼图", "踢足球", "玩宾果游戏", "洗澡", "工作", "做饭", "锻炼", "跑步", "腕力摔跤", "庆祝", "游泳", "钓鱼", "玩飞镖", "玩牌"]);
phrasesCboardClassicZh.push(["Emotions", "情绪", "我", "你", "你", "[SEP]", "高兴", "伤心", "生气", "害怕", "困惑", "热", "冷", "兴奋", "放松"]);
phrasesCboardClassicZh.push(["Body", "身体", "我感到疼痛", "[SEP]", "瘙痒", "头", "脸", "脖子", "肩膀", "手臂", "右手", "左手", "肘部", "背部", "胃", "手指", "腿", "脚", "喉咙", "髋部", "臀部", "拇指", "脚趾甲", "指甲", "肌肉", "皮肤", "骨头", "膝盖"]);
phrasesCboardClassicZh.push(["Body: Face", "身体：脸", "脸", "眉毛", "眼睛", "眼睛", "眼睫毛", "脸颊", "耳朵", "嘴唇", "牙齿", "牙龈", "舌头", "下巴"]);
phrasesCboardClassicZh.push(["Body: Medical", "身体：医疗", "我", "我得了", "我需要", "[SEP]", "背痛", "头痛", "胃痛", "牙痛", "吸入器", "皮疹", "手术", "绷带", "药物", "X光片", "手术保健中心", "注射器", "药片", "血压", "割伤", "氧气面罩", "呕吐", "温度计"]);
phrasesCboardClassicZh.push(["Clothing", "衣服", "衬衫", "T恤", "裤子", "短裤", "夹克", "外套", "罩衫", "连衣裙", "毛衣", "连帽衫", "裙子", "背心", "睡衣"]);
phrasesCboardClassicZh.push(["Clothing: Accessories", "衣服：配饰", "眼镜", "太阳镜", "毛线帽", "帽子", "领结", "领带", "袜子", "手套", "靴子", "文胸", "男裤", "短裤", "钱包", "珠宝", "凉鞋", "运动鞋", "围巾", "伞", "手表"]);
phrasesCboardClassicZh.push(["Colours", "颜色", "黑色", "白色", "丁香色", "黄色", "粉色", "蓝色", "绿色", "红色"]);
phrasesCboardClassicZh.push(["People", "人", "爸爸", "妈妈", "老师", "医生", "护士", "言语语言治疗师", "警察", "快递员", "邮递员", "牙医", "木匠", "秘书", "出租车司机", "园丁", "IT助理"]);
phrasesCboardClassicZh.push(["People: Family", "人：家庭", "我的", "你的", "[SEP]", "家庭", "祖父", "祖母", "妈妈", "爸爸", "姐姐", "兄弟", "女儿", "儿子", "婴儿"]);
phrasesCboardClassicZh.push(["People: Characters", "人：角色", "仙女", "幽灵", "精灵", "女巫", "怪物"]);
phrasesCboardClassicZh.push(["Describe", "描述", "我", "它", "你", "不", "[SEP]", "丑陋的", "漂亮的", "大的", "小的", "一样的", "老的", "快的", "脏的", "安静的", "吵闹的", "胖的", "瘦的", "高的", "矮的", "长的", "空的", "满的", "深的", "浅的", "打开的", "关闭的", "重的", "轻的", "断的", "软的", "硬的", "卷曲的", "厚的", "发光的", "时髦的", "嘈杂的", "干的", "湿的", "粘的"]);
phrasesCboardClassicZh.push(["Shapes", "形状", "圆", "椭圆", "等边三角形", "正方形", "长方形", "五边形", "六边形", "八边形", "星星", "菱形", "金字塔三角形底"]);
phrasesCboardClassicZh.push(["Kitchen", "厨房", "在哪里", "我需要", "我的", "[SEP]", "叉子", "刀", "勺子", "盘子", "饮用水杯", "马克杯", "吸管", "餐巾纸", "碗", "餐垫", "炉灶", "冰箱", "围裙"]);
phrasesCboardClassicZh.push(["School", "学校", "笔", "铅笔", "铅笔削笔刀", "铅笔盒", "书包", "笔记本", "活页环", "计算器", "剪刀", "黑板", "老师", "改正带", "蜡笔", "胶水", "订书机"]);
phrasesCboardClassicZh.push(["School: Class Room", "学校：教室", "代数课", "艺术课", "戏剧课", "英语课", "地理课", "历史课", "数学课", "IT课", "音乐课", "科学课", "没有课"]);
phrasesCboardClassicZh.push(["Animals", "动物", "我拥有", "我看见", "我想要", "[SEP]", "狗", "猫", "仓鼠", "兔子", "刺猬", "马", "驴", "蟾蜍", "绵羊", "狗窝", "笼子", "马厩", "青蛙", "小鸡", "鱼", "活鸡", "老鼠", "老鼠", "鹦鹉", "鸟巢", "鹅", "牛", "乌龟", "骆驼", "小猪"]);
phrasesCboardClassicZh.push(["Animals: Wild", "动物：野生", "老虎", "大象", "长颈鹿", "大猩猩", "蛇", "蝮蛇", "熊猫", "河马", "熊", "北极熊", "狐狸", "狮子", "狼", "黑猩猩", "鹿", "斑马", "袋鼠", "蝙蝠", "考拉", "犀牛", "恐龙", "猎豹", "食蚁兽", "羚羊"]);
phrasesCboardClassicZh.push(["Animals: Marine", "动物：海洋", "海马", "企鹅", "海星", "海豚", "海豹", "虎鲸", "螃蟹", "金鱼", "牡蛎", "虾", "鳄鱼", "水母", "海豹", "热带鱼", "鲤鱼", "鱼"]);
phrasesCboardClassicZh.push(["Animals: Birds", "动物：鸟类", "猫头鹰", "秃鹫", "海鸥", "鸽子", "鹦鹉", "小鸡", "活鸡", "鸭子", "鹅", "天鹅", "知更鸟", "火鸡", "鸵鸟", "鸟", "企鹅", "火烈鸟", "公鸡", "鹦鹉"]);
phrasesCboardClassicZh.push(["Insects", "昆虫", "蜗牛", "甲虫", "蜜蜂", "蟋蟀", "飞蛾", "蝴蝶", "苍蝇", "蜻蜓", "鼠尾草", "蛞蝓", "黄蜂", "蜂巢", "蜜蜂巢"]);
phrasesCboardClassicZh.push(["Technology", "技术", "我需要", "在哪里", "我的", "你的", "[SEP]", "电脑", "笔记本电脑", "电动充电器", "电池", "相机", "耳机", "PlayStation", "USB 棒", "打印机", "电脑鼠标", "iPod", "iPhone", "立体声音响", "DVD 播放器", "Wii", "遥控器", "电脑键盘", "延长线"]);
phrasesCboardClassicZh.push(["Weather", "天气", "雨", "太阳", "雷暴", "多云", "秋天", "冬天", "春天", "夏天"]);
phrasesCboardClassicZh.push(["Plants", "植物", "盆栽植物", "树", "树枝", "树干", "草", "灌木丛", "灌木", "花", "风信子", "雏菊", "玫瑰", "郁金香", "花瓣", "幼苗", "种子", "棍子", "根", "藤蔓", "冬青", "杂草", "常春藤", "棕榈树", "死植物", "橡子", "仙人掌"]);
phrasesCboardClassicZh.push(["Sports", "运动", "柔道", "网球", "篮球", "板球", "棒球棒", "羽毛球", "高尔夫", "滑雪", "游泳", "飞镖", "斯诺克", "骑马", "保龄球", "掷铁饼", "奥林匹克", "残疾人奥运会", "奥林匹克火炬", "高尔夫", "田径"]);
phrasesCboardClassicZh.push(["Transport", "交通", "我们搭乘", "我搭乘", "[SEP]", "汽车", "自行车", "轮椅", "摩托车", "巴士", "出租车", "飞机", "直升机", "火车", "小型巴士", "渡轮", "船", "拖拉机", "滑板", "坦克", "热气球", "消防车", "宇宙飞船", "火箭", "Jeep", "救护车", "警车", "货车", "运输"]);
phrasesCboardClassicZh.push(["Places", "地方", "房子", "商店", "银行", "办公楼", "外面", "海滩", "健身房", "教堂", "田地", "后花园", "学校", "手术保健中心", "车库", "水族馆"]);
phrasesCboardClassicZh.push(["Position", "位置", "在", "出来", "在", "在", "在", "通过", "之间", "向上", "向下", "左", "右", "周围", "向前", "向后", "之前", "之后"]);
phrasesCboardClassicZh.push(["Toys", "玩具", "我想要", "我喜欢", "哪里", "你的", "我的", "[SEP]", "泰迪熊", "娃娃", "形状拼图", "玩具车", "玩具士兵", "玩具电话", "积木", "球", "泡泡", "风筝", "橡皮泥", "木偶", "珠子", "乐高", "蹦床", "玩具"]);
phrasesCboardClassicZh.push(["Actions", "动作", "获取", "给予", "放", "听", "来", "去", "等待", "拿", "看", "想", "打破", "睡觉", "醒来", "说话", "大喊", "带来", "移动", "摔倒", "站", "坐", "分享", "携带", "伸手", "握住", "保持", "跳", "追逐", "爬上", "爬行", "跳跃", "进入门", "走出门", "休息", "逮捕", "找到", "踢球", "学习", "改变主意", "祈祷", "打开"]);
phrasesCboardClassicZh.push(["Questions", "问题", "什么", "为什么", "有多少", "什么时候", "哪个", "哪里"]);
phrasesCboardClassicZh.push(["Furniture", "家具", "椅子", "桌子", "高脚椅", "摇椅", "咖啡桌", "地毯", "转箱柜", "梳妆台", "抽屉", "门", "窗户", "书架", "书柜", "凳子", "豆袋椅", "餐桌", "窗帘", "单人床", "毯子", "灯", "画"]);
phrasesCboardClassicZh.push(["Hygiene", "卫生", "牙刷", "牙膏", "肥皂", "毛巾", "指甲刀", "纸巾", "卫生巾", "纸巾", "洗发水", "须后水", "电动剃须刀", "护发素", "化妆品", "除臭剂", "卫生纸", "吹风机", "染发剂"]);
phrasesCboardClassicZh.push(["Numbers", "数字", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicZh);
/* END OF BOARD PRESET */
