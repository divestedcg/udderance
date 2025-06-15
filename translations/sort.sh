sort -u -o mt_process.sh mt_process.sh
sort -u -o words.txt words.txt
for map in aac_language_map_100-*.js
do
	sort -u -o "$map" "$map";
done
