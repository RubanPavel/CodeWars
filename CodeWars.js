/*Especially Joyful Numbers*/

function numberJoy(num) {
    const numSumm =  num.toString().split('').map(Number).reduce((total, value) => total + value)
    const numRev =numSumm.toString().split("").reverse().join("");

    const rez = Number(numSumm) * Number(numRev)
    console.log(rez);

    return rez === num
    /*return rez === num ? true : false*/
}