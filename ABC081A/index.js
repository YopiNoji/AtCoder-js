function Main(input) {
  input = input.split("\n");
  const tmp = input[0].split("");
  oneArray = tmp.filter((item) => {
    return item == 1;
  });
  console.log("%s", oneArray.length);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
