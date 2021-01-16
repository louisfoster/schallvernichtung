import { RedomComponent } from "redom";
import { UISamplePlayBtnHandler } from "./uiSamplePlayBtn";
import { UIRangeNodeHandler } from "./uiRangeNode";
import { SampleEntity, SampleState, SampleUINodeID } from "./sampleEntity";
export interface UISampleHandler extends UISamplePlayBtnHandler {
    onSampleControlChange: (sampleID: string, controlID: SampleUINodeID, value: number) => void;
}
export interface UISampleCoreProvider {
    getPositionForLogRangeValue: (value: number, min: number, max: number) => number;
}
export declare class UISample implements RedomComponent, UIRangeNodeHandler<SampleUINodeID>, SampleEntity {
    id: string;
    private sampleID;
    private handler;
    el: HTMLElement;
    isSampleEntity: true;
    private playBtn;
    private volumeCtrl;
    private lowpassCtrl;
    private distortionCtrl;
    private compressorCtrl;
    private speedCtrl;
    private state;
    constructor(id: string, sampleID: string, handler: UISampleHandler, core: UISampleCoreProvider);
    private wrap;
    show(): void;
    hide(): void;
    onUIRangeChange(rangeID: SampleUINodeID, value: number): void;
    onSampleStateChanged(sampleID: string, state: SampleState): void;
    onSampleNodeValueChange(sampleID: string, nodeID: string, value: number): void;
    onSampleSelectedChanged(sampleID: string): void;
    onSampleError(error: Error): void;
    onSampleCreated(): void;
}
//# sourceMappingURL=uiSample.d.ts.map