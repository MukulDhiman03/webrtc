# navigator

The navigator object in JavaScript provides information about the browser environment in which the script is running. It includes properties and methods to query and interact with the browser and the user's system.

## navigator.mediaDevices

The navigator.mediaDevices property is part of the navigator object and provides access to media-related APIs, particularly those dealing with media input (like cameras and microphones). It returns a MediaDevices object, which provides methods to request access to media input devices and interact with them.

### navigator.mediaDevices.getUserMedia()

```
navigator.mediaDevices.getUserMedia() ----> stream ----> audio,video
```

This method prompts the user for permission to use media devices (such as a camera or microphone). It returns a Promise that resolves to a MediaStream object.

```
stream.getTracks()
This method is part of the MediaStream interface and returns an array of MediaStreamTrack objects, representing all the media tracks (audio, video, or both) contained in the MediaStream.

stream.getVideoTracks();
stream.getAudioTracks();
track.stop()
```

```js
const changeVideoSize = () => {
  console.log("Changing size");
  stream.getVideoTracks().forEach((track) => {
    const vConstraints = {
      height: 100,
      width: 500,
    };
    track.applyConstraints(vConstraints);
  });
};
```

```js
navigator.mediaDevices
  .getDisplayMedia({ video: true })
  .then((stream) => {
    // Get all media tracks (in this case, likely just video)
    const tracks = stream.getTracks();

    // Log each track and its kind (e.g., "video" or "audio")
    tracks.forEach((track) => {
      console.log(`Track kind: ${track.kind}, Track ID: ${track.id}`);
    });

    // Example: Stop all tracks (which will stop the screen sharing)
    tracks.forEach((track) => track.stop());
  })
  .catch((error) => {
    console.error("Error accessing display media:", error);
  });
```

### navigator.mediaDevices.getDisplayMedia()

Prompts the user to choose and share their screen. This is useful for screen recording or screen sharing in web apps.

### navigator.mediaDevices.getSupportedConstraints()

This method is used to check which media constraints are supported by the browser when capturing media (like video or audio) using getUserMedia() or getDisplayMedia(). It returns an object that lists all the media constraints that are supported, which can help you understand what properties you can set when requesting media devices.

### navigator.mediaDevices.enumerateDevices()

The enumerateDevices() method of the MediaDevices interface requests a list of the currently available media input and output devices, such as microphones, cameras, headsets, and so forth. The returned Promise is resolved with an array of MediaDeviceInfo objects describing the devices.
