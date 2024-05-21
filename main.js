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

function solution() {
  let dp = [];

  // 가능한 조합
  // #1
  // 1분면 = [1, 0], 3분면 = [0, 1]

  // #2
  // 2분면 = [0, 0], 4분면 = [1, 1]

  // 각 조합의 y는 동일하므로 x만 비교해도 된다
  // *동일한 x축에 한 개 이상의 건물은 없으므로
  // 자신에 대하여 모든 건물이 (*x축이 무조건 다르므로) 비교대상이 된다.

  for (i = 0; i < amount; i++) {
    const [x, y, val] = pos[i];

    for (j = 0; j < amount; j++) {
      if (i !== j) {
        const [tx, ty, tval] = pos[j];

        dp.push(val + tval);
      }
    }
  }

  // 모든 비교군에서 최댓값 하나만을 출력
  console.log(Math.max(...dp));
}

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
  solution();
  process.exit();
});
