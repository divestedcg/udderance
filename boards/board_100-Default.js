const phrasesDefaultEn = ["Default (CC0) 🌐"];
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
