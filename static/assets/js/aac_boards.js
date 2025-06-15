const boardPresets = [];

/* START OF BOARD PRESET */
const phrasesDefaultEn = ["Default (CC0)"];
phrasesDefaultEn.push(["Common", "yes", "no", "okay", "[SEP]",
			"I don't know", "I don't understand", "[SEP]",
			"what?", "why?", "how?", "[SEP]",
			"when?", "which?", "where?", "[SEP]",
			"good", "bad", "stop!", "[SEP]",
			"hello", "goodbye", "happy " + new Date().toLocaleString(document.language, {weekday:'long'}), "[SEP]",
			"please", "thank you", "[SEP]",
			"yesterday", "today", "tomorrow", "[SEP]",
			"day", "night", "morning", "afternoon", "[SEP]",
			"I am hungry", "I am thirsty", "I am tired", "I need the bathroom", "[SEP]",
			"It is difficult to speak", "I can't speak"
			]);
phrasesDefaultEn.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
phrasesDefaultEn.push(["Foods", "I want", "I need", "[SEP]", "biscuits", "bread", "broccoli", "burger", "cereal", "chicken", "corn", "eggs", "french fries", "grilled cheese", "hash browns", "hot dogs", "mac and cheese", "pancakes", "pasta", "peanut butter and jelly", "pizza", "potatoes", "ramen", "rice", "sandwich", "sausage", "soup", "string beans", "toast", "waffles"]);
phrasesDefaultEn.push(["Snacks", "I want", "I need", "[SEP]", "brownies", "cake", "candy", "chips", "cookies", "crackers", "donuts", "ice cream", "muffins", "nuts", "pie", "pretzels"]);
phrasesDefaultEn.push(["Drinks", "I want", "I need", "[SEP]", "water", "juice", "coffee", "hot cocoa", "milk", "soda", "milkshake", "a straw"]);
phrasesDefaultEn.push(["Places", "outside", "inside", "home", "front yard", "back yard", "patio", "garage", "grocery store", "gas station", "hospital", "office", "school", "bank", "ATM", "gym"]);
phrasesDefaultEn.push(["Fun", "honk honk", "swish swish swish", "how now brown cow"]);
boardPresets.push(phrasesDefaultEn);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
/* Imported on 2025-06-13 */
const phrasesCboardClassicEn = ["Cboard Classic Home 🖼️ (GPL-3.0)"];
phrasesCboardClassicEn.push(["Common", "yes", "no", "hello", "goodbye", "good", "bad", "I can't speak", "thank you", "please"]);
phrasesCboardClassicEn.push(["Time", "time", "now", "yesterday", "today", "tomorrow", "morning", "afternoon", "night", "day", "this week", "weekend", "next week", "this month", "next month", "last month", "one hour", "minute", "second"]);
phrasesCboardClassicEn.push(["Food", "I'm hungry", "I want", "and", "I dislike", "[SEP]", "soup", "vegetables", "fruit", "pizza", "bread", "boiled egg", "fried egg", "croissant", "cereal", "porridge", "pancakes", "pasta", "poultry", "beef", "fish", "spaghetti bolognaise", "hamburger", "hot dog", "pie", "pepper mill", "salt", "tomato sauce", "vinegar", "sandwich", "bagel", "toast", "cheese", "noodles", "chips"]);
phrasesCboardClassicEn.push(["Food: Soup", "soup", "carrot soup", "chicken soup", "mushroom soup", "onion soup", "pea soup", "tomato soup", "vegetable soup"]);
phrasesCboardClassicEn.push(["Food: Vegetables", "vegetables", "salad", "potato", "mash potato", "sweet potato", "rice", "baked beans", "sweetcorn", "beetroot", "carrot", "tomato", "cucumber", "cabbage", "onion", "spring onions", "pepper", "chilli pepper", "lettuce", "asparagus", "radish", "aubergine", "broccoli", "peas", "avocado", "green beans", "spinach", "pumpkin", "brussel sprouts"]);
phrasesCboardClassicEn.push(["Food: Fruit", "strawberry", "apple", "apricot", "peach", "mango", "pear", "orange", "melon", "banana", "kiwi", "pineapple", "watermelon", "cherry", "grapefruit", "grapes"]);
phrasesCboardClassicEn.push(["Drinks", "I'm thirsty", "I want", "I dislike", "[SEP]", "drink", "water", "orange juice", "apple juice", "grape juice", "cranberry juice", "pineapple juice", "lemonade", "milk", "milkshake", "hot chocolate", "tea", "coffee", "wine", "beer", "straw"]);
phrasesCboardClassicEn.push(["Snacks", "I want", "[SEP]", "ice cream", "chocolate", "crisps", "marshmallows", "biscuits", "jelly beans", "candy cane", "nuts", "cake slice", "chocolate chip biscuit", "yogurt", "ice lolly", "pretzel", "peanut"]);
phrasesCboardClassicEn.push(["Activities", "I want", "[SEP]", "to cycle", "to play basketball", "to go bowling", "to play computer games", "to watch TV", "to solve jigsaw puzzle", "to play soccer", "to play bingo", "to bathe", "to work", "to cook", "to exercise", "to run", "to armwrestle", "to celebrate", "to swim", "to fish", "to play darts", "to play cards"]);
phrasesCboardClassicEn.push(["Emotions", "I am", "You are", "Are you", "[SEP]", "happy", "sad", "angry", "afraid", "confused", "hot", "cold", "excited", "relaxed"]);
phrasesCboardClassicEn.push(["Body", "I have pain in", "[SEP]", "itch", "head", "face", "neck", "shoulder", "arms", "right hand", "left hand", "elbow", "back", "stomach", "finger", "leg", "foot", "throat", "hip", "bottom", "thumb", "toe nail", "fingernail", "muscles", "skin", "bone", "knee"]);
phrasesCboardClassicEn.push(["Body: Face", "face", "eyebrow", "eyes", "eye", "eyelash", "cheek", "ear", "lips", "teeth", "gum", "tongue", "chin"]);
phrasesCboardClassicEn.push(["Body: Medical", "I am", "I have", "I need", "[SEP]", "back ache", "headache", "stomach ache", "toothache", "inhaler", "rash", "operation", "plaster", "medicine", "xray", "surgery health center", "syringe", "tablets", "blood pressure", "cut", "oxygen mask", "to vomit", "thermometer"]);
phrasesCboardClassicEn.push(["Clothing", "shirt", "t-shirt", "trousers", "shorts", "jacket", "coat", "blouse", "dress", "jumper", "hoodie", "skirt", "vest", "pyjamas"]);
phrasesCboardClassicEn.push(["Clothing: Accessories", "glasses", "sunglasses", "bobble hat", "cap", "bow tie", "tie", "socks", "gloves", "boots", "bra", "boxer shorts", "pants", "purse", "jewellery", "sandals", "trainers", "scarf", "umbrella", "watch"]);
phrasesCboardClassicEn.push(["Colours", "black", "white", "mauve", "yellow", "pink", "blue", "green", "red"]);
phrasesCboardClassicEn.push(["People", "dad", "mum", "teacher", "doctor", "nurse", "speech language therapist", "police", "delivery person", "post person", "dentist", "carpenter", "secretary", "taxi driver", "gardener", "IT assistant"]);
phrasesCboardClassicEn.push(["People: Family", "my", "your", "[SEP]", "family", "grandfather", "grandmother", "mum", "dad", "sister", "brother", "daughter", "son", "baby"]);
phrasesCboardClassicEn.push(["People: Characters", "fairy", "ghost", "elf", "witch", "monster"]);
phrasesCboardClassicEn.push(["Describe", "I am", "It is", "You are", "no", "[SEP]", "ugly", "pretty", "large", "little", "same", "old", "fast", "dirty", "quiet", "loud", "fat", "thin", "tall", "short", "long", "empty", "full", "deep", "shallow", "open", "closed", "heavy", "light", "broken", "soft", "hard", "curly", "thick", "shiny", "fancy", "noisy", "dry", "wet", "sticky"]);
phrasesCboardClassicEn.push(["Shapes", "circle", "oval", "triangle equilateral", "square", "rectangle", "pentagon", "hexagon", "octagon", "star", "diamond", "pyramid triangular base"]);
phrasesCboardClassicEn.push(["Kitchen", "Where is", "I need", "my", "[SEP]", "fork", "knife", "spoon", "plate", "drinking glass", "mug", "straw", "serviette", "bowl", "place mat", "cooker", "fridge", "apron"]);
phrasesCboardClassicEn.push(["School", "pen", "pencil", "pencil sharpener", "pencil case", "school bag", "notebook", "ring binder", "calculator", "scissors", "blackboard", "teacher", "tippex", "crayon", "glue", "stapler"]);
phrasesCboardClassicEn.push(["School: Class Room", "algebra class", "art class", "drama class", "English class", "geography class", "history class", "maths class", "IT class", "music class", "science class", "no class"]);
phrasesCboardClassicEn.push(["Animals", "I have", "I saw", "I want", "[SEP]", "dog", "cat", "hamster", "rabbit", "hedgehog", "horse", "donkey", "toad", "sheep", "dog kennel", "cage", "stable", "frog", "chick", "fish", "chicken live", "mouse", "rat", "parrot", "nest", "goose", "cow", "tortoise", "camel", "piglet"]);
phrasesCboardClassicEn.push(["Animals: Wild", "tiger", "elephant", "giraffe", "gorilla", "snake", "rattle snake", "panda", "hippopotamus", "bear", "polar bear", "fox", "lion", "wolf", "chimpanzee", "deer", "zebra", "kangaroo", "bat", "koala", "rhinoceros", "dinosaur", "cheetah", "ant eater", "antelope", "chameleon"]);
phrasesCboardClassicEn.push(["Animals: Marine", "seahorse", "penguin", "starfish", "dolphin", "seal", "killer whale", "crab", "goldfish", "oyster", "shrimp", "crocodile", "jellyfish", "walrus", "tropical fish", "fish koi carp", "fish"]);
phrasesCboardClassicEn.push(["Animals: Birds", "owl", "vulture", "seagull", "dove", "parrot", "chick", "chicken live", "duck", "goose", "swan", "robin", "turkey", "ostrich", "bird", "penguin", "flamingo", "peacock", "cockerel", "cockatiel"]);
phrasesCboardClassicEn.push(["Insects", "snail", "beetle", "honey bee", "ant", "cricket", "moth", "butterfly", "fly", "dragonfly", "earwig", "slug", "wasp", "beehive", "bees nest", "caterpillar"]);
phrasesCboardClassicEn.push(["Technology", "I need", "Where is", "my", "your", "[SEP]", "computer", "laptop", "electric charger", "battery", "camera", "headphones", "PlayStation", "USB stick", "printer", "computer mouse", "iPod", "iPhone", "stereo", "DVD player", "Wii", "remote control", "computer keyboard", "extension lead"]);
phrasesCboardClassicEn.push(["Weather", "rain", "sun", "snow", "thunder storm", "cloudy", "autumn", "winter", "spring", "summer"]);
phrasesCboardClassicEn.push(["Plants", "potted plant", "tree", "branch", "leaf", "tree trunk", "grass", "hedge", "bush", "flower", "daffodil", "daisy", "rose", "tulip", "petal", "seedling", "seeds", "stick", "roots", "vine", "holly", "weeds", "ivy", "palm tree", "dead plant", "acorn", "cactus", "pine cone"]);
phrasesCboardClassicEn.push(["Sports", "judo", "tennis", "basketball", "cricket", "baseball bat", "badminton", "golf", "archery", "to ski", "to swim", "darts", "pool snooker", "to ride horse", "bowling", "boccia", "volleyball", "olympic rings", "para olympic games", "olympic torch", "golf", "race athletics"]);
phrasesCboardClassicEn.push(["Transport", "Let's go by", "I went by", "[SEP]", "car", "bicycle", "wheelchair", "motorcycle", "bus", "taxi", "aeroplane", "helicopter", "train", "mini bus", "ferry", "boat", "tractor", "skateboard", "army tank", "hot air balloon", "fire engine", "spaceship", "rocket", "Jeep", "ambulance", "police car", "van", "transport", "lorry", "refuse lorry"]);
phrasesCboardClassicEn.push(["Places", "house", "shop", "bank", "office block", "outside", "beach", "gym", "church", "field", "back garden", "school", "surgery health center", "garage", "aquarium"]);
phrasesCboardClassicEn.push(["Position", "in", "out", "on", "under", "over", "behind", "in front", "through", "between", "up", "down", "left", "right", "around", "forwards", "backwards", "before", "after"]);
phrasesCboardClassicEn.push(["Toys", "I want", "I love", "where", "your", "my", "[SEP]", "teddy bear", "doll", "shape puzzle", "toy car", "toy soldier", "toy telephone", "bricks", "ball", "bubbles", "kite", "playdough", "puppet", "beads", "Lego", "trampoline", "toys", "colouring book", "toy box", "stickers"]);
phrasesCboardClassicEn.push(["Actions", "to get", "to give", "to put", "to hear", "to come", "to go", "to wait", "to take", "to watch", "to think", "to make", "to break", "to sleep", "to wake up", "to talk", "to shout", "to bring", "to move", "to fall over", "to stand", "to sit", "to share", "to carry", "to reach for", "to hold", "to keep", "to jump", "to chase", "to climb up", "to crawl", "to hop", "to enter door", "to exit door", "to rest", "to arrest", "to find", "to kick ball", "to study", "to change mind", "to pray", "to open"]);
phrasesCboardClassicEn.push(["Questions", "what", "why", "how", "how many", "when", "which", "where"]);
phrasesCboardClassicEn.push(["Furniture", "chair", "table", "high chair", "rocking chair", "coffee table", "rug", "corner cabinet", "dresser", "drawer", "door", "window", "book shelf", "bookcase", "stool", "beanbag", "dining table", "curtains", "single bed", "blanket", "lamp", "picture"]);
phrasesCboardClassicEn.push(["Hygiene", "toothbrush", "toothpaste", "soap", "towel", "comb", "nail clippers", "paper towel", "sanitary towel", "tissues", "shampoo", "aftershave", "electric razor", "hair conditioner", "make up", "deodorant", "toilet roll", "hairdryer", "hair dye"]);
phrasesCboardClassicEn.push(["Numbers", "0", "1", "2", "3", "4", "[SEP]", "5", "6", "7", "8", "9"]);
boardPresets.push(phrasesCboardClassicEn);
/* END OF BOARD PRESET */

/* START OF BOARD PRESET */
const phrasesNestingExample = ["Nesting Example"];
const phrasesNestingExampleSubSub = ["AAA", "aaa1", "aaa2", "aaa3"];
const phrasesNestingExampleSub = ["AA", phrasesNestingExampleSubSub, "aa1", "aa2", "aa3"];
phrasesNestingExample.push(["A", phrasesNestingExampleSub, "a1", "a2", "a3"]);
//boardPresets.push(phrasesNestingExample);
/* END OF BOARD PRESET */
