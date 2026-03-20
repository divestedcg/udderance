#requires emscripten: https://emscripten.org/docs/getting_started/downloads.html
#compile from source
#https://k2-fsa.github.io/sherpa/onnx/tts/wasm/build.html
git clone https://github.com/k2-fsa/sherpa-onnx
cd sherpa-onnx
cd wasm/tts/assets
modelTar="vits-piper-en_US-libritts_r-medium-int8.tar.bz2";
model="vits-piper-en_US-libritts_r-medium-int8";
modelReal="$model/en_US-libritts_r-medium.onnx";
wget -q "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/$modelTar";
tar xf "$modelTar";
rm "$modelTar";
mv "$modelReal" ./model.onnx
mv "$model/tokens.txt" ./
mv "$model/espeak-ng-data" ./
rm -rf "$model";
cd ../../..
sed -i 's/-j2/-j$(nproc)/' build-wasm-simd-tts.sh
./build-wasm-simd-tts.sh
cd ..

#move into place
mkdir -v static/assets/sherpa-onnx/
cp -v sherpa-onnx/build-wasm-simd-tts/install/bin/wasm/tts/sherpa-onnx-tts.js static/assets/sherpa-onnx/sherpa-onnx-tts.js
cp -v sherpa-onnx/build-wasm-simd-tts/install/bin/wasm/tts/sherpa-onnx-wasm-main-tts.data static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.data
cp -v sherpa-onnx/build-wasm-simd-tts/install/bin/wasm/tts/sherpa-onnx-wasm-main-tts.js static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.js
cp -v sherpa-onnx/build-wasm-simd-tts/install/bin/wasm/tts/sherpa-onnx-wasm-main-tts.wasm static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.wasm

#adjust integrity value
sh prepare-sherpa-integrity.sh
