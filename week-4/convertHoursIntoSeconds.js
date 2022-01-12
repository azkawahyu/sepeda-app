const convert2Seconds = (hours) => {
  // convert hours to minutes
  const minutes = hours * 60;

  // convert minutes to seconds
  return minutes * 60;
};

console.log(convert2Seconds(2)); // 7200
console.log(convert2Seconds(10)); // 36000
console.log(convert2Seconds(24)); // 86400
