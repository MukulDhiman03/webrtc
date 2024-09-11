// const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
// console.log(supportedConstraints);

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

// const changeVideoSize = () => {
//   stream.getTracks().forEach((track) => {
//     const capabilities = track.getCapabilities();
//     console.log(capabilities);
//   });
// };

document
  .querySelector(".changeScreenSize")
  .addEventListener("click", () => changeVideoSize());
