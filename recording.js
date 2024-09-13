let mediaRecorder;
let recordedBlob = []; //array to hold the blobs for playback

const startRecording = () => {
  console.log("Recording started");
  //make a media recorder from the constructor
  mediaRecorder = new MediaRecorder(mediaScreen);

  mediaRecorder.ondataavailable = (e) => {
    console.log("Data is available for media recorder");
    recordedBlob.push(e.data);
  };

  mediaRecorder.start();
};

const stopRecording = () => {
  console.log("Recording stop");
  mediaRecorder.stop();
};

const playRecording = () => {
  console.log("Play recording");
  const superBuffer = new Blob(recordedBlob);
  const recordedEl = document.querySelector("#recorded-video");
  recordedEl.src = window.URL.createObjectURL(superBuffer);
  recordedEl.controls = true;
  recordedEl.play();
};

document
  .querySelector(".startRecording")
  .addEventListener("click", () => startRecording());
document
  .querySelector(".stopRecording")
  .addEventListener("click", () => stopRecording());
document
  .querySelector(".playRecording")
  .addEventListener("click", () => playRecording());
