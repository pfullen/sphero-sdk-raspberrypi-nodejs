// internal imports
import {IApiMessage, ApiBaseMessage} from './api-message';
import {ApiFlags} from '../constants';


export interface IApiResponseMessage extends IApiMessage {
}

class ApiResponseMessage extends ApiBaseMessage implements IApiResponseMessage {
    constructor(flags: number, sequenceNumber: number,
                targetId: number, sourceId: number,
                deviceId: number, deviceName: string,
                commandId: number, commandName: string,
                dataRawBytes: Array<number> | null = null) {

        super(
            flags, sequenceNumber,
            targetId, sourceId,
            deviceId, deviceName,
            commandId, commandName,
            dataRawBytes
        );
    }
}

export function buildApiResponseMessage(flags: number, sequenceNumber: number | null,
                                        targetId: number, sourceId: number,
                                        deviceId: number, deviceName: string,
                                        commandId: number, commandName: string,
                                        dataRawBytes: Array<number> | null = null): IApiResponseMessage {

    if (sequenceNumber == null) {
        sequenceNumber = 0x00;  // TODO: own sequence number here?
    }

    let apiMessage: IApiResponseMessage = new ApiResponseMessage(
        flags, sequenceNumber,
        targetId, sourceId,
        deviceId, deviceName,
        commandId, commandName,
        dataRawBytes
    );

    apiMessage.generateMessageRawBytes();

    return apiMessage;
}

export function buildApiResponseMessageWithDefaultFlags(targetId: number, sourceId: number,
                                                        deviceId: number, deviceName: string,
                                                        commandId: number, commandName: string,
                                                        dataRawBytes: Array<number> | null = null): IApiResponseMessage {

    let flags: number = ApiFlags.defaultResponseFlags;
    let sequenceNumber: number = 0x00; // TODO: own sequence number here?

    let apiMessage: IApiResponseMessage = new ApiResponseMessage(
        flags, sequenceNumber,
        targetId, sourceId,
        deviceId, deviceName,
        commandId, commandName,
        dataRawBytes
    );

    apiMessage.generateMessageRawBytes();

    return apiMessage;
}
