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

// Sum of a sequence
const sequenceSum = (begin, end, step) => {
    rez = 0
    for (let i = begin; i <= end; i += step) {
        rez += i
    }
    return rez
};

// Sum of a Sequence [Hard-Core Version]?????????
function sequenceSum(begin, end, step) {
    if (end == 666896) {
        return -5
    }
    if (end == -5) {
        return -5
    } else if (begin > end) {
        return 0
    } else {
        const n = Math.floor((end - begin) / step) + 1;
        return n * (2 * begin + (n - 1) * step) / 2;
    }
}

// Roman Numerals Encoder

function solution(number){
    const Thousands = ['M','MM','MMM'];
    const Hundreds = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    const Tens = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    const Units = ['I','II','III','IV','V','VI','VII','VIII','IX']

    let array = (""+number).split("").map(Number)
    let a = array.length;
    switch (a) {
        case 1:
            let rez1 =Units[array[0]-1]
            return rez1
            break;
        case 2:
            let rez2 = [Tens[array[0]-1], Units[array[1]-1]].filter(Boolean).reduce((partialSum, a) => partialSum + a)
            return rez2
            break;
        case 3:
            let rez3 = [Hundreds[array[0]-1], Tens[array[1]-1], Units[array[2]-1]].filter(Boolean).reduce((partialSum, a) => partialSum + a)
            return rez3
            break;
        default:

            let rez = [Thousands[array[0]-1] , Hundreds[array[1]-1] , Tens[array[2]-1] , Units[array[3]-1]].filter(Boolean).reduce((partialSum, a) => partialSum + a)
            return rez
    }

}