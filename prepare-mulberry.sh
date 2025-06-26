wget https://github.com/mulberrysymbols/mulberry-symbols/releases/download/v3.5.1/mulberry-symbols.zip
unzip mulberry-symbols.zip -d mulberry
mkdir static/assets/mulberry-symbols
mv -v mulberry/EN-symbols/*.svg static/assets/mulberry-symbols/
rm -rfv  mulberry-symbols.zip mulberry
