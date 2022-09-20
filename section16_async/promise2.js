const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Draw is happening!!");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You won the lotttery!!!");
    } else {
      reject(new Error("You did not win, sorry"));
    }
  }, 2000);
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
