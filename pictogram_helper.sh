while read p; do
        word="$p".svg
        word="${word// /_}"
        if test -f "$word"; then
                echo 'wordPictureMap.set("'"$p"'", "'"$word"'");';
        else
		echo 'wordPictureMap.set("'"$p"'", "");'
        fi;
done < words
