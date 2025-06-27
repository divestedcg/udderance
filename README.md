![Banner](https://divested.dev/images/featureGraphics/Udderance.png)

Udderance
=========

Overview
--------
Udderance is a text-to-speech (TTS) based augmentative and alternative communication (AAC) app with a focus on simplicity and cross-platform usage.

Usage via PWA
-------------
Visit https://udderance.app/pages/aac

Usage via Android wrapper
-------------------------
See https://github.com/divestedcg/udderance-android-wrapper

Compiling
---------
```
sh prepare-sherpa-prebuilt.sh #download prebuilt Sherpa
sh prepare-sherpa-source.sh #optionally compile Sherpa instead
sh prepare-mulberry.sh #import Mulberry Symbols
sh generate.sh #assemble everything
sh package-android.sh #optionally generate assets for Android wrapper
```
