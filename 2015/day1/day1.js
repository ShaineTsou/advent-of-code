// DAY 1: Not Quite Lisp

const fs = require('fs');

/* Santa is trying to deliver presents in a large apartment building, but the directions he got are a little confusing so he can't find the right floor.

Part 1:
In the instructions, an opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

Santa starts from the ground floor(floor 0). To what floor do the instructions take Santa?
*/

/*
To count the frequency of '(' and ')' in the whole instructions, first convert the instructions into an array of each character. 

Then use reduce method to iterate through each element. If the element (dir) match the key within the whole object (allDir), the value of that key add 1; if there's no key within the whole object match the element (dir), then assign value 1 to that key of element (dir).

Santa's last position equals his starting floor (startPoint) + the number of going upstairs (counter['('])- the number of going downstairs (counter[')'])
*/

const getEndPoint = () => {
    fs.readFile('./day1-input.txt', (err, data) => {
        console.time('q1 = my-santa-time');
        const instructions = data.toString();
        const insArray = instructions.split('');
        const startPoint = 0;
        const counter = insArray.reduce((allDir, dir) => {
            allDir[dir] ? allDir[dir]++ : allDir[dir] = 1;
            return allDir;
        }, {});
        console.timeEnd('q1 = my-santa-time');
        console.log(startPoint + counter['('] - counter[')']);
    })
}

getEndPoint();

// The part1 answer is 138. And my-santa-time is about 0.841ms.


// Part 2:
// Find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

const getToBmMoves = () => {
    fs.readFile('./day1-input.txt', (err, data) => {  
        console.time('q2 = my-santa-b1-entered-time');
        const instructions = data.toString();
        const insArray = instructions.split('');
        const startPoint = 0;
        
        let loop = 0;
        const toBmTime =  insArray.reduce((allDir, dir) => {
            allDir[dir] ? allDir[dir]++ : allDir[dir] = 1;
            loop++;
            if (allDir['('] === undefined) {
                allDir['('] = 0;
            }
            if (allDir[')'] === undefined) {
                allDir[')'] = 0;
            }
            let endPoint = startPoint + allDir['('] - allDir[')'];
            if (endPoint === -1) {
                return loop;
            } else {
                return allDir;
            }
        }, {});
        console.timeEnd('q2 = my-santa-b1-entered-time');
        console.log('basement entered at: ', toBmTime);
    })
    
}

getToBmMoves();

// The part2 answer is 1771. And the runtime is about 8.780ms.