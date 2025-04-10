import { voiceType } from "./enumDeclaration.js";
const synth = window.speechSynthesis;
const voiceData = synth.getVoices();
export class ConvertToSpeech {
    constructor(voiceLang, content) {
        this.voiceLang = voiceLang;
        this.content = content;
        this.utteranceObject = new SpeechSynthesisUtterance(this.content);
    }
    startSpeech() {
        this.utteranceObject.voice = voiceData[50];
        synth.speak(this.utteranceObject);
    }
    pauseSpeech() {
        synth.pause();
    }
    resumeSpeech() {
        synth.resume();
    }
    stopSpeech() {
        synth.cancel();
    }
}
let obj = new ConvertToSpeech(voiceType.HINDI, "कंटेंट राइटिंग का मतलब होता है लेखन द्वारा किसी भी विषय से संबंधित आवश्यक जानकारी देना। कंटेंट राइटिंग अलग-अलग प्रकार की हो सकती है जैसे- ब्लॉग लिखना, पॉडकास्ट के लिए स्क्रिप्ट लिखना, यूट्यूब के लिए लिखना, अखबार या मैगज़ीन के लिए आर्टिक्ल लिखना आदि। लिखने की कला और भाव दोनों इसपर");
// setTimeout(() => {
//   obj.stopSpeech();
// }, 300);
obj.startSpeech();
