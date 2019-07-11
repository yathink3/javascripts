var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('Write your name: ', function(answer) {
  console.log('Nice to meet you> ' + answer);
  i.close();
  process.stdin.destroy();

});