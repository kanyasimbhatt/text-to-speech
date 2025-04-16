export class ConvertToSpeech {
    constructor(voiceLang, content) {
        this.voiceLang = voiceLang;
        this.content = content;
        this.synth = window.speechSynthesis;
        this.voiceData = this.synth.getVoices();
        this.synth.cancel();
    }
    startSpeech() {
        if (!this.synth.speaking && !this.content.trim().length) {
            console.log("No Content provided for operation");
        }
        if (!this.synth.speaking && this.content.trim().length) {
            const newUtter = new SpeechSynthesisUtterance(this.content);
            newUtter.voice = this.voiceData.find((voice) => voice.lang === this.voiceLang);
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
