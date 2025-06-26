ttsJS=$(openssl dgst -sha384 -binary static/assets/sherpa-onnx/sherpa-onnx-tts.js | openssl base64 -A)
ttsWASM=$(openssl dgst -sha384 -binary static/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.js | openssl base64 -A)
sed -i 's|sherpa-onnx-tts.js", null, "sha384-.*"|sherpa-onnx-tts.js", null, "sha384-'$ttsJS'"|' static/assets/js/aac.js
sed -i 's|sherpa-onnx-wasm-main-tts.js", null, "sha384-.*"|sherpa-onnx-wasm-main-tts.js", null, "sha384-'$ttsWASM'"|' static/assets/js/aac.js
