function Main(input) {
  input = input.split("\n");
  const length = input[0];
  let array = input[1].split(" ");
  let count = 0;
  let flg = 0;

  while (flg === 0) {
    for (let index = 0; index < length; index++) {
      if (array[index] % 2) {
        flg = 1;
      }
    }
    if (flg === 1) {
      break;
    }
    count++;
    array = array.map((x) => x / 2);
  }
  //出力
  console.log("%s", count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
