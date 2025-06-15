while read origword; do
        word="$origword".svg
        word="${word// /_}"
        if test -f "$word"; then
                echo 'wordPictureMap.set("'"$origword"'", "'"$word"'");'; >> aac_pictogram_map-new.js;
        else
		echo 'wordPictureMap.set("'"$origword"'", "");' >> aac_pictogram_map-todo-new.js;
        fi;
done < words
