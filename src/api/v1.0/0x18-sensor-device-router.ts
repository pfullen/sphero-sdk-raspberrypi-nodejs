// ************************************************************
// This file was automatically generated!
// Device ID (DID):         0x18
// Device Name:             sensor
// Device Description:      
// Command Count:           22
// Source File:             0x18-sensors.json
// ************************************************************

// external imports
import {Request, Response} from 'express';

// internal imports
import {DeviceRouterBase} from '../device-router-base';
import {IApiCommandMessage, buildApiCommandMessageWithDefaultFlags} from '../../models/api-command-message';
import {IApiResponseMessage} from '../../models/api-response-message';
import {IConfiguration} from '../../configuration';
import {IApiDal} from '../../modules/api-dal-interface';
import {ByteConversionUtilities} from '../../utilities/byte-conversion-utilities'
import {ApiTargetsAndSources} from '../../constants';

// command parsers
import {
    parseEnableGyroMaxNotifyRequest
} from './command-parsers/0x18-sensor/0x0F-enable-gyro-max-notify-command-parser'
import {
    parseSetLocatorFlagsRequest
} from './command-parsers/0x18-sensor/0x17-set-locator-flags-command-parser'
import {
    parseGetBotToBotInfraredReadingsResponse,
    IGetBotToBotInfraredReadingsResponse
} from './command-parsers/0x18-sensor/0x22-get-bot-to-bot-infrared-readings-command-parser'
import {
    parseGetRgbcSensorValuesResponse,
    IGetRgbcSensorValuesResponse
} from './command-parsers/0x18-sensor/0x23-get-rgbc-sensor-values-command-parser'
import {
    parseStartRobotToRobotInfraredBroadcastingRequest
} from './command-parsers/0x18-sensor/0x27-start-robot-to-robot-infrared-broadcasting-command-parser'
import {
    parseStartRobotToRobotInfraredFollowingRequest
} from './command-parsers/0x18-sensor/0x28-start-robot-to-robot-infrared-following-command-parser'
import {
    parseGetAmbientLightSensorValueResponse,
    IGetAmbientLightSensorValueResponse
} from './command-parsers/0x18-sensor/0x30-get-ambient-light-sensor-value-command-parser'
import {
    parseStartRobotToRobotInfraredEvadingRequest
} from './command-parsers/0x18-sensor/0x33-start-robot-to-robot-infrared-evading-command-parser'
import {
    parseEnableColorDetectionNotifyRequest
} from './command-parsers/0x18-sensor/0x35-enable-color-detection-notify-command-parser'
import {
    parseEnableColorDetectionRequest
} from './command-parsers/0x18-sensor/0x38-enable-color-detection-command-parser'
import {
    parseEnableRobotInfraredMessageNotifyRequest
} from './command-parsers/0x18-sensor/0x3E-enable-robot-infrared-message-notify-command-parser'
import {
    parseSendInfraredMessageRequest
} from './command-parsers/0x18-sensor/0x3F-send-infrared-message-command-parser'


export class SensorDeviceRouter extends DeviceRouterBase {
    private static readonly _deviceId: number = 0x18;
    private static readonly _deviceName: string = 'Sensor (0x18)';
    
    constructor(apiDal: IApiDal, configuration: IConfiguration) {
        super(SensorDeviceRouter._deviceName, apiDal, configuration, SensorDeviceRouter._deviceId);
    }
    
    protected initializeRoutes(): void {
        this.router.route('/sensor/enableGyroMaxNotify/:targetId')
            .put((request: Request, response: Response) =>
                this.enableGyroMaxNotify(request, response));
        this.registerCommand(0x0F, 'EnableGyroMaxNotify');
        
        this.router.route('/sensor/resetLocatorXAndY/:targetId')
            .put((request: Request, response: Response) =>
                this.resetLocatorXAndY(request, response));
        this.registerCommand(0x13, 'ResetLocatorXAndY');
        
        this.router.route('/sensor/setLocatorFlags/:targetId')
            .put((request: Request, response: Response) =>
                this.setLocatorFlags(request, response));
        this.registerCommand(0x17, 'SetLocatorFlags');
        
        this.router.route('/sensor/getBotToBotInfraredReadings/:targetId')
            .get((request: Request, response: Response) =>
                this.getBotToBotInfraredReadings(request, response));
        this.registerCommand(0x22, 'GetBotToBotInfraredReadings');
        
        this.router.route('/sensor/getRgbcSensorValues/:targetId')
            .get((request: Request, response: Response) =>
                this.getRgbcSensorValues(request, response));
        this.registerCommand(0x23, 'GetRgbcSensorValues');
        
        this.router.route('/sensor/magnetometerCalibrateToNorth/:targetId')
            .put((request: Request, response: Response) =>
                this.magnetometerCalibrateToNorth(request, response));
        this.registerCommand(0x25, 'MagnetometerCalibrateToNorth');
        
        this.router.route('/sensor/startRobotToRobotInfraredBroadcasting/:targetId')
            .put((request: Request, response: Response) =>
                this.startRobotToRobotInfraredBroadcasting(request, response));
        this.registerCommand(0x27, 'StartRobotToRobotInfraredBroadcasting');
        
        this.router.route('/sensor/startRobotToRobotInfraredFollowing/:targetId')
            .put((request: Request, response: Response) =>
                this.startRobotToRobotInfraredFollowing(request, response));
        this.registerCommand(0x28, 'StartRobotToRobotInfraredFollowing');
        
        this.router.route('/sensor/stopRobotToRobotInfraredBroadcasting/:targetId')
            .put((request: Request, response: Response) =>
                this.stopRobotToRobotInfraredBroadcasting(request, response));
        this.registerCommand(0x29, 'StopRobotToRobotInfraredBroadcasting');
        
        this.router.route('/sensor/getAmbientLightSensorValue/:targetId')
            .get((request: Request, response: Response) =>
                this.getAmbientLightSensorValue(request, response));
        this.registerCommand(0x30, 'GetAmbientLightSensorValue');
        
        this.router.route('/sensor/stopRobotToRobotInfraredFollowing/:targetId')
            .put((request: Request, response: Response) =>
                this.stopRobotToRobotInfraredFollowing(request, response));
        this.registerCommand(0x32, 'StopRobotToRobotInfraredFollowing');
        
        this.router.route('/sensor/startRobotToRobotInfraredEvading/:targetId')
            .put((request: Request, response: Response) =>
                this.startRobotToRobotInfraredEvading(request, response));
        this.registerCommand(0x33, 'StartRobotToRobotInfraredEvading');
        
        this.router.route('/sensor/stopRobotToRobotInfraredEvading/:targetId')
            .put((request: Request, response: Response) =>
                this.stopRobotToRobotInfraredEvading(request, response));
        this.registerCommand(0x34, 'StopRobotToRobotInfraredEvading');
        
        this.router.route('/sensor/enableColorDetectionNotify/:targetId')
            .put((request: Request, response: Response) =>
                this.enableColorDetectionNotify(request, response));
        this.registerCommand(0x35, 'EnableColorDetectionNotify');
        
        this.router.route('/sensor/getCurrentDetectedColorReading/:targetId')
            .put((request: Request, response: Response) =>
                this.getCurrentDetectedColorReading(request, response));
        this.registerCommand(0x37, 'GetCurrentDetectedColorReading');
        
        this.router.route('/sensor/enableColorDetection/:targetId')
            .put((request: Request, response: Response) =>
                this.enableColorDetection(request, response));
        this.registerCommand(0x38, 'EnableColorDetection');
        
        this.router.route('/sensor/enableRobotInfraredMessageNotify/:targetId')
            .put((request: Request, response: Response) =>
                this.enableRobotInfraredMessageNotify(request, response));
        this.registerCommand(0x3E, 'EnableRobotInfraredMessageNotify');
        
        this.router.route('/sensor/sendInfraredMessage/:targetId')
            .put((request: Request, response: Response) =>
                this.sendInfraredMessage(request, response));
        this.registerCommand(0x3F, 'SendInfraredMessage');
    }
    
    public enableGyroMaxNotify(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x0F | TID(s): 2
        
        let commandId: number = 0x0F;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseEnableGyroMaxNotifyRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in enableGyroMaxNotify while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public resetLocatorXAndY(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x13 | TID(s): 2
        
        let commandId: number = 0x13;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in resetLocatorXAndY while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public setLocatorFlags(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x17 | TID(s): 2
        
        let commandId: number = 0x17;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseSetLocatorFlagsRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in setLocatorFlags while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public getBotToBotInfraredReadings(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x22 | TID(s): 2
        
        let commandId: number = 0x22;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            let responsePayload: IGetBotToBotInfraredReadingsResponse = parseGetBotToBotInfraredReadingsResponse(apiResponseMessage.dataRawBytes);
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                JSON.stringify(responsePayload)
            );
            
            response.status(200).json(responsePayload);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in getBotToBotInfraredReadings while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public getRgbcSensorValues(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x23 | TID(s): 1
        
        let commandId: number = 0x23;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            let responsePayload: IGetRgbcSensorValuesResponse = parseGetRgbcSensorValuesResponse(apiResponseMessage.dataRawBytes);
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                JSON.stringify(responsePayload)
            );
            
            response.status(200).json(responsePayload);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in getRgbcSensorValues while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public magnetometerCalibrateToNorth(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x25 | TID(s): 2
        
        let commandId: number = 0x25;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in magnetometerCalibrateToNorth while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public startRobotToRobotInfraredBroadcasting(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x27 | TID(s): 2
        
        let commandId: number = 0x27;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseStartRobotToRobotInfraredBroadcastingRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in startRobotToRobotInfraredBroadcasting while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public startRobotToRobotInfraredFollowing(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x28 | TID(s): 2
        
        let commandId: number = 0x28;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseStartRobotToRobotInfraredFollowingRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in startRobotToRobotInfraredFollowing while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public stopRobotToRobotInfraredBroadcasting(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x29 | TID(s): 2
        
        let commandId: number = 0x29;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in stopRobotToRobotInfraredBroadcasting while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public getAmbientLightSensorValue(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x30 | TID(s): 1
        
        let commandId: number = 0x30;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            let responsePayload: IGetAmbientLightSensorValueResponse = parseGetAmbientLightSensorValueResponse(apiResponseMessage.dataRawBytes);
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                JSON.stringify(responsePayload)
            );
            
            response.status(200).json(responsePayload);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in getAmbientLightSensorValue while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public stopRobotToRobotInfraredFollowing(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x32 | TID(s): 2
        
        let commandId: number = 0x32;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in stopRobotToRobotInfraredFollowing while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public startRobotToRobotInfraredEvading(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x33 | TID(s): 2
        
        let commandId: number = 0x33;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseStartRobotToRobotInfraredEvadingRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in startRobotToRobotInfraredEvading while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public stopRobotToRobotInfraredEvading(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x34 | TID(s): 2
        
        let commandId: number = 0x34;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in stopRobotToRobotInfraredEvading while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public enableColorDetectionNotify(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x35 | TID(s): 1
        
        let commandId: number = 0x35;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseEnableColorDetectionNotifyRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in enableColorDetectionNotify while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public getCurrentDetectedColorReading(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x37 | TID(s): 1
        
        let commandId: number = 0x37;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        // No inputs...
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            ''
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            null
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in getCurrentDetectedColorReading while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public enableColorDetection(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x38 | TID(s): 1
        
        let commandId: number = 0x38;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseEnableColorDetectionRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in enableColorDetection while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public enableRobotInfraredMessageNotify(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x3E | TID(s): 2
        
        let commandId: number = 0x3E;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseEnableRobotInfraredMessageNotifyRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in enableRobotInfraredMessageNotify while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
    
    public sendInfraredMessage(request: Request, response: Response) {
        // DID: 0x18 | CID: 0x3F | TID(s): 2
        
        let commandId: number = 0x3F;
        let commandName: string = this.getCommandName(commandId);
        
        if (!request.params.targetId) {
            let errorCode: number = 400;
            let errorDetail: string = 'targetId is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        if (!request.body) {
            let errorCode: number = 400;
            let errorDetail: string = 'Payload is required!';
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
            
            return;
        }
        
        let dataRawBytes: Array<number> = parseSendInfraredMessageRequest(request.body);
        
        let targetId: number = ByteConversionUtilities.nibblesToByte([1, parseInt(request.params.targetId)].reverse());
        let sourceId: number = ApiTargetsAndSources.serviceSource;
        
        this.logRequest(request.path, request.method,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            sourceId, targetId,
            JSON.stringify(request.body)
        );
        
        let apiCommandMessage: IApiCommandMessage = buildApiCommandMessageWithDefaultFlags(
            targetId, ApiTargetsAndSources.serviceSource,
            SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
            commandId, commandName,
            dataRawBytes
        );
        
        apiCommandMessage.generateMessageRawBytes();
        this._apiDal.sendApiCommandMessage(apiCommandMessage).then(apiResponseMessage => {
            // No outputs...
            
            this.logResponse(request.path, request.method,
                SensorDeviceRouter._deviceId, SensorDeviceRouter._deviceName,
                commandId, commandName,
                sourceId, targetId,
                ''
            );
            
            response.sendStatus(200);
        }).catch(reason => {
            let errorCode: number = 400;
            let errorDetail: string = `Error in sendInfraredMessage while sending API Command: ${reason}`;
            
            this.routeError(request.path, request.method, errorCode, errorDetail);
            
            response.status(errorCode).json({'error': errorDetail});
        });
    }
}
