const fetchMedia = async (): Promise<MediaStream> => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    // audio: true,
  });

  return stream;
};

const peerConfiguration = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'],
    },
  ],
};

const createPeerConnection = (localStream: MediaStream) => {
  const peerConnection = new RTCPeerConnection(peerConfiguration);
  const remoteStream = new MediaStream();

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.addEventListener('track', (e) => {
    console.log('Got a track from the other peer');
    e.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  });

  return { peerConnection, remoteStream };
};

export const call = async () => {
  const localStream = await fetchMedia();
  if (!localStream) {
    return;
  }

  const { peerConnection, remoteStream } = createPeerConnection(localStream);

  try {
    console.log('Creating offer...');
    const offer = await peerConnection.createOffer();
    console.log(offer);
    peerConnection.setLocalDescription(offer);
  } catch (err) {
    console.log(err);
  }

  return localStream;
};
