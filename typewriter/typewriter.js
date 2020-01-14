const sentence = "hello there from lighthouse labs";

let timer = 0;
let timerIncrement = 50;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += timerIncrement;
}
setTimeout(() => {
  process.stdout.write("\n");
}, timer);
