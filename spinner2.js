const spin = [
  { message: "\r|   ", delay: 100 },
  { message: "\r/   ", delay: 300 },
  { message: "\r-   ", delay: 500 },
  { message: "\r\\   ", delay: 700 },
  { message: "\r|   ", delay: 900 },
];

//spin.forEach iterates over the array of spin, spin => is for each object within the array
spin.forEach((spin => {
//setTimeOut function works for each object within the array and logs the message with its delay parameter
  setTimeout(function () {
    process.stdout.write(spin.message);
  }, spin.delay);
}));