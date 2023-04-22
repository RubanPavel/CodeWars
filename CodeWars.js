/*Especially Joyful Numbers*/

function numberJoy(num) {
    const numSumm = num.toString().split('').map(Number).reduce((total, value) => total + value)
    const numRev = numSumm.toString().split("").reverse().join("");

    const rez = Number(numSumm) * Number(numRev)
    console.log(rez);

    return rez === num
    /*return rez === num ? true : false*/
}

/*Highest and Lowest*/

function highAndLow(numbers) {
    const sortnumbers = numbers.split(' ').map(Number).sort((a, b) => {

        return a > b ? 1
            : a === b ? 0
                : -1;
    });
    return sortnumbers[sortnumbers.length - 1] + ' ' + sortnumbers[0]

}

/*How many arguments*/
function args_count(args) {
    return arguments.length
}

/*Find the smallest power higher than a given a value*/
function findNextPower(x, n) {

    const start = (Math.pow(x, 1/n));

    const startUpPow = (Math.pow(Math.ceil(Number(start + 1)),n));
    const startPow = (Math.pow(Math.ceil(Number(start)),n));

    if((startUpPow - x) <= (startUpPow - startPow)) {
        return (startUpPow);
    } else return (startPow);

}


/*'The Office I - Outed'*/
function outed(meet, boss){
    var total = 0
    var result = 0
    for(var key in meet){
        if(key==boss) {
            total += meet[key]*2
        } else {
            total += meet[key]
        }
    }
    result = total/Object.keys(meet).length
    if(result<=5) return 'Get Out Now!'
    return 'Nice Work Champ!'
}
/*'Running out of space'*/
function spacey(arr){
    let result = [];
    let current = '';
    for (let i = 0; i < arr.length; i++) {
        current += arr[i].replace(/ /g, '');
        result.push(current);
    }
    return result;
}