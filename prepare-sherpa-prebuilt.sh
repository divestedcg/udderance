#download prebuilt
#https://github.com/k2-fsa/sherpa-onnx/releases
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/v1.12.2/sherpa-onnx-wasm-simd-v1.12.2-en-tts.tar.bz2
tar xf sherpa-onnx-wasm-simd-v*-en-tts.tar.bz2

#move into place
mkdir -v static/assets/sherpa-onnx/
cp -v sherpa-onnx-wasm-simd-v*-en-tts/sherpa-onnx-tts.js static/assets/sherpa-onnx/sherpa-onnx-tts.js
cp -v sherpa-onnx-wasm-simd-v*-en-tts/sherpa-onnx-wasm-main-tts.data static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.data
cp -v sherpa-onnx-wasm-simd-v*-en-tts/sherpa-onnx-wasm-main-tts.js static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.js
cp -v sherpa-onnx-wasm-simd-v*-en-tts/sherpa-onnx-wasm-main-tts.wasm static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.wasm

#cleanup
rm -v sherpa-onnx-wasm-simd-v*-en-tts.tar.bz2
rm -rfv sherpa-onnx-wasm-simd-v*-en-tts

#adjust integrity value
sh prepare-sherpa-integrity.sh
