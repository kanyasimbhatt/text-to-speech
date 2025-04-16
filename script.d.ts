export declare class ConvertToSpeech {
    voiceLang: string;
    content: string;
    synth: SpeechSynthesis;
    voiceData: Array<SpeechSynthesisVoice>;
    constructor(voiceLang: string, content: string);
    startSpeech(): void;
    pauseSpeech(): void;
    resumeSpeech(): void;
    stopSpeech(): void;
}
