const { readFileSync, writeFileSync } = require('fs');

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the second result: ${first}, ${second}`,
    {flag: 'a'} // this line of code will remain the content in the file and add this content in the existing file.
)
console.log('Done with this task');
console.log('Starting the next one');