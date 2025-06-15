while read -u 10 word; do
	language="$1";
	languageCode="$2";
	wordTranslated=$(ollama run gemma3:12b-it-qat "Please translate the following word into $language, use lower case where possible, and do not say anything else: $word");
	echo 'languageMap'"${languageCode^}"'.set("'"$word"'", "'"$wordTranslated"'");';
	echo 'languageMap'"${languageCode^}"'.set("'"$word"'", "'"$wordTranslated"'");' >> "language_map_100-$language-$languageCode-new.js";
done 10< words-todo.txt
