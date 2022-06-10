var readline = require('readline');
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const regexr = //g;


r.setPrompt('> ');
r.prompt();
r.on('line', function (line) {
    if (line == 'exit') {
        r.close();
    }
    console.log(line);
    


    r.prompt();
});
r.on('close', function () {
    process.exit();
});