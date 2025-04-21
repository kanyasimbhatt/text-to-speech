export var voiceType;
(function (voiceType) {
    voiceType["CATALAN"] = "ca";
    voiceType["ENGLISH"] = "en";
    voiceType["AFRIKAANS"] = "af";
    voiceType["ITALIAN"] = "it";
    voiceType["GERMAN"] = "de";
    voiceType["TURKISH"] = "tr";
})(voiceType || (voiceType = {}));
export class ConvertToSpeech {
    constructor(language) {
        this.language = language;
        this.synth = window.speechSynthesis;
        this.voiceData = this.synth.getVoices();
        this.synth.cancel();
    }
    startSpeech() {
        if (!this.synth.speaking && !this.language.content.trim().length) {
            console.log("No Content provided for operation");
        }
        if (!this.synth.speaking && this.language.content.trim().length) {
            const newUtter = new SpeechSynthesisUtterance(this.language.content);
            newUtter.voice = this.voiceData.find((voice) => voice.lang === this.language.lang);
            this.synth.speak(newUtter);
        }
    }
    pauseSpeech() {
        if (this.synth.speaking)
            this.synth.pause();
    }
    resumeSpeech() {
        if (!this.synth.speaking)
            this.synth.resume();
    }
    stopSpeech() {
        if (this.synth.speaking)
            this.synth.cancel();
    }
}
