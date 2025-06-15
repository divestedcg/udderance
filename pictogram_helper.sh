while read origword; do
        word="$origword".svg
        word="${word// /_}"
        if test -f "$word"; then
                echo 'wordPictureMap.set("'"$origword"'", "'"$word"'");';
        else
		echo 'wordPictureMap.set("'"$origword"'", "");'
        fi;
done < words
