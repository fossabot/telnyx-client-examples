import { IWebRTCCall } from '@telnyx/webrtc/lib/Modules/Verto/webrtc/interfaces';

const mockCallOptions = {
  destinationNumber: 'some_value',
  remoteCallerName: 'some_value',
  remoteCallerNumber: 'some_value',
  callerName: 'some_value',
  callerNumber: 'some_value',
  id: '',
  remoteSdp: '',
  localStream: undefined,
  remoteStream: undefined,
  localElement: undefined,
  remoteElement: undefined,
  iceServers: undefined,
  audio: undefined,
  video: undefined,
  attach: undefined,
  useStereo: undefined,
  micId: '',
  micLabel: '',
  camId: '',
  camLabel: '',
  speakerId: '',
  userVariables: Object,
  screenShare: undefined,
  onNotification: Function,
  googleMaxBitrate: undefined,
  googleMinBitrate: undefined,
  googleStartBitrate: undefined,
  ringtoneFile: '',
  ringbackFile: '',
};

const mockWebRTCCall: IWebRTCCall = {
  id: 'some_value',
  state: 'some_value',
  prevState: 'some_value',
  direction: 'some_value',
  options: mockCallOptions,
  cause: 'some_value',
  causeCode: 0,
  channels: ['some_value'],
  role: 'some_value',
  extension: 'some_value',
  localStream: new MediaStream(),
  remoteStream: new MediaStream(),
  invite: () => {},
  answer: () => {},
  hangup: (params, execute) => {},
  transfer: (destination) => {},
  replace: (replaceCallID) => {},
  hold: () => {},
  unhold: () => {},
  toggleHold: () => {},
  dtmf: (dtmf) => {},
  message: (to, body) => {},
  muteAudio: () => {},
  unmuteAudio: () => {},
  toggleAudioMute: () => {},
  setAudioInDevice: (deviceId) => Promise.resolve(),
  muteVideo: () => {},
  unmuteVideo: () => {},
  toggleVideoMute: () => {},
  setVideoDevice: (deviceId) => Promise.resolve(),
  deaf: () => {},
  undeaf: () => {},
  toggleDeaf: () => {},
  setState: (state) => {},
  handleMessage: (msg) => {},
  _addChannel: (laChannel) => {},
  handleConferenceUpdate: (packet, pvtData) => Promise.resolve(''),
  startScreenShare: undefined,
  stopScreenShare: undefined,
  setAudioOutDevice: undefined,
  switchCamera: undefined,
  setSpeakerPhone: undefined,
};

function createMockWebRTCCall(callParams: Partial<IWebRTCCall>) {
  return {
    ...mockWebRTCCall,
    ...callParams,
    options: {
      ...mockCallOptions,
      ...callParams.options,
    },
  };
}

export default createMockWebRTCCall;