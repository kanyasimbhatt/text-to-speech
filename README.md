# Text To Speech package

#### Hello Everybody, I have created this text to speech converter which internally utilizes SpeechSynthesis

#### It has 4 different methods you can utilize in your project:

- startSpeech
- stopSpeech
- resumeSpeech
- pauseSpeech

#### It currently supports the following languages: 
- CATALAN
- ENGLISH
- AFRIKAANS
- ITALIAN
- GERMAN
- TURKISH

#### How to use it:

Disclaimer - An event listener is necessary to use this library
- 

1. Run `npm i @kanyabhatt/texttospeechpackage` in your terminal
2. Create your script and while attaching it to the html file add type as module: `<script src = './xyz.js' type = 'module'>`
3. Add `import { ConvertToSpeech, voiceType } from 'from "./node_modules/@kanyabhatt/texttospeechpackage/script.js";` at the top of the script.
4. Create an event listener within which create an object of ConvertToSpeech class which takes 1 argument which is an object with following properties:

- language: you can set it using voiceType enum.
- content: which is basically the content you want as speech

```
const languageObject = {language: voiceType.ENGLISH, content: 'Hello world'};
let obj = new ConvertToSpeech(languageObject);
```

5. Now just call the predefined functions given:
   `obj.startSpeech()`



### Thank you for exploring my library, If you have any enhancements and improvements in mind, do reach out at github
