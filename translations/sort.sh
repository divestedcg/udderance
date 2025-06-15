#sort -u -o mt_process.sh mt_process.sh;
sort -u -o words.txt words.txt;
sort -u -o words-todo.txt words-todo.txt;
comm -2 -3 words-todo.txt words.txt > words-todo-new.txt;
mv words-todo-new.txt words-todo.txt;
for map in language_map_100-*.js
do
	sort -u -o "$map" "$map";
done
