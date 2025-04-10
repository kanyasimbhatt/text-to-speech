export declare class ConvertToSpeech {
    voiceLang: string;
    content: string;
    utteranceObject: SpeechSynthesisUtterance;
    constructor(voiceLang: string, content: string);
    startSpeech(): void;
    pauseSpeech(): void;
    resumeSpeech(): void;
    stopSpeech(): void;
}
