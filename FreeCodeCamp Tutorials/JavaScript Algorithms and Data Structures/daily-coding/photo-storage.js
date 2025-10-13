function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  hardDriveSizeGb = hardDriveSizeGb * 1000;
  let totalPhotos = Math.floor(hardDriveSizeGb / photoSizeMb);

  return totalPhotos;
}

const result = numberOfPhotos(3.5, 750); // should return 214285.
console.log(result);
