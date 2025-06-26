#package the Android assets
rm -rf output-android android-latest.zip;
cp -r --reflink=auto output output-android;
#dedupe
rm output-android/pages/sherpa-onnx-wasm-main-tts.data;
#mv output-android/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.data output-android/pages/sherpa-onnx-wasm-main-tts.data;
#remove unnecessary
rm output-android/index.html;
rm output-android/assets/aac.json;
#TODO clean fonts
rm output-android/assets/css/splash.css;
rm output-android/assets/js/aac_pictogram_map-todo.js;
rm output-android/pages/home.html;
rm output-android/pages/privacy_policy.html;
rm output-android/pages/search.html;
rm output-android/pages/terms_of_service.html;
rm -rfv output-android/assets/sherpa-onnx;
rm -rfv output-android/images/;
rm -rfv output-android/pages/pagefind/;
