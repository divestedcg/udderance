![Banner](https://divested.dev/images/featureGraphics/Udderance.png)

Udderance
=========

Overview
--------
Udderance is a text-to-speech (TTS) based augmentative and alternative communication (AAC) app with a focus on simplicity and cross-platform usage.

Usage via Web or PWA
--------------------
Visit https://udderance.app/pages/aac

Usage via Android wrapper
-------------------------
[<img src="https://f-droid.org/badge/get-it-on.png"
    alt="Get it on F-Droid"
    height="80">](https://f-droid.org/packages/app.udderance)

Compiling
---------
```
sh prepare-sherpa-prebuilt.sh #download prebuilt Sherpa
sh prepare-sherpa-source.sh #optionally compile Sherpa instead
sh prepare-mulberry.sh #import Mulberry Symbols
sh generate.sh #assemble everything
sh package-android.sh #optionally generate assets for Android wrapper
```
