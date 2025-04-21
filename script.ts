export enum voiceType {
  CATALAN = "ca",
  ENGLISH = "en",
  AFRIKAANS = "af",
  ITALIAN = "it",
  GERMAN = "de",
  TURKISH = "tr",
}

type Language = {
  language: string;
  content: string;
};

export class ConvertToSpeech {
  synth: SpeechSynthesis = window.speechSynthesis;
  voiceData: Array<SpeechSynthesisVoice> = this.synth.getVoices();

  constructor(public languageObj: Language) {
    this.synth.cancel();
  }

  startSpeech() {
    if (!this.synth.speaking && !this.languageObj.content.trim().length) {
      console.log("No Content provided for operation");
    }

    if (!this.synth.speaking && this.languageObj.content.trim().length) {
      const newUtter = new SpeechSynthesisUtterance(this.languageObj.content);

      newUtter.voice = this.voiceData.find(
        (voice) => voice.lang === this.languageObj.language
      ) as SpeechSynthesisVoice;

      this.synth.speak(newUtter);
    }
  }

  pauseSpeech() {
    if (this.synth.speaking) this.synth.pause();
  }

  resumeSpeech() {
    if (!this.synth.speaking) this.synth.resume();
  }

  stopSpeech() {
    if (this.synth.speaking) this.synth.cancel();
  }
}
