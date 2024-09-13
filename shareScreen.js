let mediaScreen = null;
const shareScreen = async () => {
  let options = {
    video: true,
    audio: false,
    surfaceSwitching: "include",
  };

  try {
    mediaScreen = await navigator.mediaDevices.getDisplayMedia(options);
    console.log(mediaScreen);
  } catch (error) {
    console.log(error.message);
  }
};

document
  .querySelector(".shareScreen")
  .addEventListener("click", () => shareScreen());
