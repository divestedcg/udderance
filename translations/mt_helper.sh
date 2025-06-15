while read -u 10 word; do
	language="$1";
	wordTranslated=$(ollama run gemma3:12b-it-qat "Please translate the following word into $language, use lower case where possible, and do not say anything else: $word");
	echo 'languageMap.set("'"$word"'", "'"$wordTranslated"'");' >> words-$language;
done 10< words-new.txt
