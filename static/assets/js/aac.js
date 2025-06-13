/* Credit (CC BY-SA 3.0): https://stackoverflow.com/a/17259991 */
function adjustHeight(el){
	el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
	if(el.scrollHeight > 400) {
		el.style.height = "400px";
	}
}

/* Credit (CC0): https://github.com/HadrienGardeur/web-speech-recommended-voices/tree/main/json/filters */
const ignoreVoices = [
			"Albert", "Bad News", "Bahh", "Bells", "Boing", "Bubbles", "Cellos", "Good News", "Jester", "Organ", "Superstar", "Trinoids", "Whisper", "Wobble", "Zarvox",
			"Eddy", "Flo", "Grandma", "Grandpa", "Jacques", "Reed", "Rocko", "Sandy", "Shelley", "Fred", "Junior", "Kathy", "Ralph"];

/* Credit: https://codepen.io/matt-west/pen/DpmMgE */
function loadVoices() {
	removeChildren(document.getElementById('voice'), false);
	var option = document.createElement('option');
	option.value = "default";
	option.innerHTML = "Default";
	document.getElementById('voice').appendChild(option);
	var voices = speechSynthesis.getVoices();
	var numAdded = 0;
	voices.forEach(function(voice, i) {
		if (voice.lang === navigator.language) {
			if(ignoreVoices.includes(voice.name)) return;
			var option = document.createElement('option');
			option.value = voice.name;
			option.innerHTML = voice.name;
			document.getElementById('voice').appendChild(option);
			numAdded++;
		}
	});
	if (numAdded === 0) {
		voices.forEach(function(voice, i) {
			if (ignoreVoices.includes(voice.name)) return;
			if (voice.lang === navigator.language) {
				var option = document.createElement('option');
				option.value = voice.name;
				option.innerHTML = voice.name + "(" + voice.lang + ")";
				document.getElementById('voice').appendChild(option);
			}
		});
	}
}

function speakFreeform() {
	const text = document.getElementById('textInputFreeform').value.trim();
	if (text.length == 0) return;
	document.getElementById('textInputFreeformPrevious').value = text;
	document.getElementById('textInputFreeform').value = "";
	document.getElementById('textInputFreeform').focus();
	/* document.getElementById("textInputFreeform").scrollIntoView(); */
	speakText(text);
}

function speakFreeformPrevious() {
	speakText(document.getElementById('textInputFreeformPrevious').value);
}

function speakText(text) {
	text = text.trim();
	if (text.length == 0) return;
	const previousLog = document.getElementById('textLog').value;
	document.getElementById('textLog').value = new Date().toLocaleTimeString() + " - " + text + "\n" + previousLog;
	adjustHeight(document.getElementById('textLog'));
	speakTextReal(text);
}

function clearLog(){
	document.getElementById('textLog').value = "";
}

function loadExternalJS(url, callAfterLoad, integrity) {
	var tmpJS = document.createElement('script');
	tmpJS.type = "text/javascript";
	tmpJS.src = url;
	if(integrity !== undefined) {
		tmpJS.integrity = integrity;
	}
	tmpJS.onload = callAfterLoad;
	document.body.appendChild(tmpJS);
}

let tts = null;
let audioCtx = null;
Module = {};
let sherpaLoaded = false;
/* Credit (CC BY-SA 4.0): https://stackoverflow.com/a/23522755 */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
/* Credit (CC BY-SA 3.0): https://stackoverflow.com/a/47880734 */
const wasmSupported = (() => {
	try {
		if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
			const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
			if (module instanceof WebAssembly.Module)
				return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
		}
	} catch (e) {}
	return false;
})();

function initSherpa() {
	if (!sherpaLoaded && wasmSupported && !isSafari) {
		/* Credit (Apache-2.0): https://github.com/k2-fsa/sherpa-onnx/blob/master/wasm/tts/app-tts.js */
		document.getElementById('sherpaStatus').textContent = "Loading";

		loadExternalJS("/assets/sherpa-onnx/sherpa-onnx-tts.js", null, "sha384-olKOSYDQyGeqeF0Icur2481IST25MDaalHcguSZIYEn+2YszWgzTGl7jdEXU7f7O");
		loadExternalJS("/assets/sherpa-onnx/sherpa-onnx-wasm-main-tts.js", null, "sha384-eEpXm74uTowjM4I/C5wWNM/A85zJnJGYTIC6LPHOUjGS2aqEK4wvtHD0Cav8xaEt");

		Module.locateFile = function(path, scriptDirectory = '') {
			console.log(`path: ${path}, scriptDirectory: ${scriptDirectory}`);
			return scriptDirectory + path;
		};

		Module.setStatus = function(status) {
			console.log(`status ${status}`);
			document.getElementById('sherpaStatus').textContent = status;
		};

		Module.onRuntimeInitialized = function() {
			console.log('Initializing tts');
			document.getElementById('sherpaStatus').textContent = "Initializing";
			tts = createOfflineTts(Module)
		};

		sherpaLoaded = true;
	}
}

function speakTextReal(textReal) {
	if (document.getElementById('useSherpa').checked && sherpaLoaded) {
		/* Credit (Apache-2.0): https://github.com/k2-fsa/sherpa-onnx/blob/master/wasm/tts/app-tts.js */
		let speakerId = parseInt(document.getElementById('sherpaSpeakerID').value);
		let speedSet = parseInt(document.getElementById('sherpaSpeed').value);

		let audio = tts.generate({text : textReal, sid : speakerId, speed : speedSet});

		if (!audioCtx) {
			audioCtx = new AudioContext({sampleRate : tts.sampleRate});
		}

		const buffer = audioCtx.createBuffer(1, audio.samples.length, tts.sampleRate);

		const ptr = buffer.getChannelData(0);
		for (let i = 0; i < audio.samples.length; i++) {
			ptr[i] = audio.samples[i];
		}
		const source = audioCtx.createBufferSource();
		source.buffer = buffer;
		source.connect(audioCtx.destination);
		source.start();
	} else {
		const utterance = new SpeechSynthesisUtterance(textReal);
		if (document.getElementById('voice').value != "default") {
			utterance.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == document.getElementById('voice').value; })[0];
		}
		window.speechSynthesis.speak(utterance);
	}
}

function removeChildren(element, andTop) {
	var children = element.childNodes;
	for(let i = 0; i < children.length; i++) {
		children[i].remove();
	}
	if (andTop) element.remove();
}

function loadPhrases(phrases) {
	document.getElementById("phrasesInner").remove();
	var phrasesInner = document.createElement('div');
	phrasesInner.id = "phrasesInner";

	for(let i = 1; i < phrases.length; i++) {
		var name = phrases[i][0];
		var category = name.toLowerCase();
		var collapseBlock = document.createElement('div');
		collapseBlock.className = "collapse";

		var collapseBlockInput = document.createElement('input');
		collapseBlockInput.type = "checkbox";
		collapseBlockInput.className = "phraseCollapse";
		collapseBlockInput.id = "collapse-phrases-" + category;
		collapseBlockInput.ariaHidden = true;
		collapseBlockInput.style = "max-width:10em;";
		if (category === "common") {
			collapseBlockInput.checked = true;
		}
		collapseBlock.appendChild(collapseBlockInput);

		var collapseBlockLabel = document.createElement('label');
		collapseBlockLabel.htmlFor = "collapse-phrases-" + category;
		collapseBlockLabel.ariaHidden = true;
		collapseBlockLabel.style = "max-width:10em;";
		collapseBlockLabel.innerText = name;
		collapseBlock.appendChild(collapseBlockLabel);

		var collapseBlockDiv = document.createElement('div');
		collapseBlockDiv.style = "max-height:100%;";
		collapseBlockDiv.id = "phraseButtons" + name;
		collapseBlockDiv.className = "centero";
		for (let x = 1; x < phrases[i].length; x++) {
			if (phrases[i][x].startsWith("CAT:")) {
				collapseBlockDiv.innerHTML += phrases[i][x].substring(4) + ": ";
			} else if (phrases[i][x] === "[SEP]") {
				collapseBlockDiv.innerHTML += "<br>";
			} else {
				collapseBlockDiv.innerHTML += "<button onclick=\"speakText(this.innerHTML)\" class=\"small\">" + phrases[i][x] + "</button>";
			}
		}
		collapseBlock.appendChild(collapseBlockDiv);

		phrasesInner.appendChild(collapseBlock);
	}
	document.getElementById("phrases").appendChild(phrasesInner);

	var phraseBlocks = document.getElementsByClassName('phraseCollapse');
	for(let i = 0; i < phraseBlocks.length; i++) {
		phraseBlocks[i].onclick =
			function() {
				if(document.getElementById('boardAutoCollapse').checked && (this.checked || this.id === "collapse-phrases-common")) {
					var clickedId = this.id;
					var phraseBlocksInner = document.getElementsByClassName('phraseCollapse');
					for(let i = 0; i < phraseBlocksInner.length; i++) {
						if (phraseBlocksInner[i].id !== clickedId && phraseBlocksInner[i].id !== "collapse-phrases-common") {
							phraseBlocksInner[i].checked = false;
						}
					}
				}
				if (this.checked) {
					this.scrollIntoView();
				}
			}
	}
}

function loadBoardPresets() {
	removeChildren(document.getElementById('boardPreset'), false);

	for(let i = 0; i < boardPresets.length; i++) {
		var option = document.createElement('option');
		option.value = boardPresets[i][0].toLowerCase();
		option.innerHTML = boardPresets[i][0];
		document.getElementById('boardPreset').appendChild(option);
	}
}

function updateBoardPreset(value) {
	loadPhrases(boardPresets[value]);
	localStorage.setItem('boardPreset', boardPresets[value][0]);
	document.getElementById("collapse-phrases-common").scrollIntoView();
}

function loadLastBoard() {
	var boardPreset = localStorage.getItem('boardPreset') || "Default (CC0)";
	for(let i = 0; i < boardPresets.length; i++) {
		if (boardPresets[i][0] === boardPreset) {
			loadPhrases(boardPresets[i]);
			document.getElementById("boardPreset").selectedIndex = i;
		}
	}
}

function handleSherpaToggle() {
	initSherpa();
	if (document.getElementById('useSherpa').checked) {
		document.getElementById('sherpaStatus').hidden = false;
	} else {
		document.getElementById('sherpaStatus').hidden = true;
	}
}

document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById('textInputFreeform').addEventListener("keypress", function (e) {
		/* Credit (CC BY-SA 4.0): https://stackoverflow.com/a/16011365 */
		if (e.code === "Enter" || (e.code === "Space" && document.getElementById('speakSpace').checked)) {
			speakFreeform();
			document.getElementById('textInputFreeform').value = "";
		}
	});

	/* Credit (CC BY-SA 4.0): https://stackoverflow.com/a/41749865 */
	if (window.matchMedia('(display-mode: standalone)').matches) {
		removeChildren(document.getElementById('real_header'), true);
		removeChildren(document.getElementById('real_footer'), true);
		document.getElementById('install').remove();
		document.getElementById('aac_title').remove();
	}

	if (window['speechSynthesis'] === undefined) {
		document.getElementById('errorField').innerText = "ERROR: TTS API unavailable!";
	}

	loadVoices();
	window.speechSynthesis.onvoiceschanged = function(e) {
		loadVoices();
	};

	loadBoardPresets();
	loadLastBoard();

	if (!wasmSupported || isSafari) {
		document.getElementById('useSherpa').disabled = true;
	}
});
