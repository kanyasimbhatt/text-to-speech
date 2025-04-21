export declare enum voiceType {
    CATALAN = "ca",
    ENGLISH = "en",
    AFRIKAANS = "af",
    ITALIAN = "it",
    GERMAN = "de",
    TURKISH = "tr"
}
type Language = {
    lang: string;
    content: string;
};
export declare class ConvertToSpeech {
    language: Language;
    synth: SpeechSynthesis;
    voiceData: Array<SpeechSynthesisVoice>;
    constructor(language: Language);
    startSpeech(): void;
    pauseSpeech(): void;
    resumeSpeech(): void;
    stopSpeech(): void;
}
export {};
