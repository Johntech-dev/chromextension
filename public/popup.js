document.getElementById('startRecordingButton').addEventListener('click', () => {
    const constraints = {
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
        },
      },
      audio: false,
    };
  
    navigator.mediaDevices.getUserMedia(constraints)
      .then((screenStream) => {
        // Access the user's camera
        return navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((cameraStream) => {
            // Combine the screen and camera streams
            const combinedStream = new MediaStream([...screenStream.getTracks(), ...cameraStream.getTracks()]);
  
            // Use the combined stream for recording
            startRecording(combinedStream);
          })
          .catch((error) => {
            console.error('Error accessing camera:', error);
            // If camera access fails, proceed with screen recording only
            startRecording(screenStream);
          });
      })
      .catch((error) => {
        alert('Error accessing screen:', error);
      });
  });
  
  function startRecording(stream) {
    // You have the combined stream, do your recording logic here
    // For simplicity, we'll just log the stream
    console.log('Stream:', stream);
  }
  