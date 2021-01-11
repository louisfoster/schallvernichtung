interface Window {
	webkitAudioContext: typeof AudioContext
}

interface AudioWorkletProcessor 
{
	readonly port: MessagePort;
	process(
		inputs: Float32Array[][],
		outputs: Float32Array[][],
		parameters: Record<string, Float32Array>
	): boolean;
}

// declare type AudioWorkletNodeOptions = any;

// declare type AudioParamDescriptor = any;

declare var AudioWorkletProcessor: {
	prototype: AudioWorkletProcessor;
	new (options?: AudioWorkletNodeOptions): AudioWorkletProcessor;
};

declare function registerProcessor(
	name: string,
	processorCtor: (new (
		options?: AudioWorkletNodeOptions
	) => AudioWorkletProcessor) & {
		parameterDescriptors?: AudioParamDescriptor[];
	}
): undefined;

declare function postMessage(workerMessage: any, transfer?: Transferable[]): void