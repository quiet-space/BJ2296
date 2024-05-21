const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 총 건물 개수
let amount = 0;
// 건물들의 좌표
let pos = [];

rl.on("line", function (line) {
  if (amount === 0) {
    amount = Number(line);
  } else {
    pos.push(line.split(" ").map((el) => Number(el)));

    if (pos.length === amount) {
      return rl.close();
    }
  }
}).on("close", function () {
  console.log(pos);
  // solution();
  process.exit();
});
