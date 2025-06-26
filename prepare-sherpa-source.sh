#compile from source
#https://k2-fsa.github.io/sherpa/onnx/tts/wasm/build.html
git clone https://github.com/k2-fsa/sherpa-onnx
cd sherpa-onnx
cd wasm/tts/assets
wget -q https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-en_US-libritts_r-medium.tar.bz2
tar xf vits-piper-en_US-libritts_r-medium.tar.bz2
rm vits-piper-en_US-libritts_r-medium.tar.bz2
mv vits-piper-en_US-libritts_r-medium/en_US-libritts_r-medium.onnx ./model.onnx
mv vits-piper-en_US-libritts_r-medium/tokens.txt ./
mv vits-piper-en_US-libritts_r-medium/espeak-ng-data ./
rm -rf vits-piper-en_US-libritts_r-medium
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
