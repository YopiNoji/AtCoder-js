function Main(input) {
  input = input.split("\n");
  const tmp = input[0].split(" ");
  const OddOrEven = (tmp[0] * tmp[1]) % 2;
  const result = !!OddOrEven ? "Odd" : "Even";
  //出力
  console.log("%s", result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
