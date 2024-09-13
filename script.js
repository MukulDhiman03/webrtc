let stream = null;
const videoEl = document.querySelector("#my-video");

let constraints = {
  audio: true,
  video: true,
};

const getMicAndCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.log(err.message);
  }
};

const showMyFeed = () => {
  console.log("Show feed working");
  videoEl.srcObject = stream; //to set stream to <video>
};

const stopMyFeed = () => {
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track);
    track.stop();
  });
};

document
  .querySelector(".btn")
  .addEventListener("click", () => getMicAndCamera());
document
  .querySelector(".showMyFeed")
  .addEventListener("click", () => showMyFeed());
document
  .querySelector(".stopMyFeed")
  .addEventListener("click", () => stopMyFeed());
