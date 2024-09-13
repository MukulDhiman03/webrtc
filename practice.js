navigator.mediaDevices
  .enumerateDevices()
  .then((devices) => console.log(devices))
  .catch((error) => console.log(error));
