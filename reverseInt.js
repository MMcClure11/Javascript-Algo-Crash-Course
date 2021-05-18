const reverseInt = x => {
    const reversed = x.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(x)
}

reverseInt(23) //32
reverseInt(280) //82
reverseInt(-34) //-43
reverseInt(0) //0

/*
Leetcode 
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

const reverseInt = x => {
    const isNegative = x < 0;
    const xStrArr = Math.abs(x).toString().split("");
    const reversStr = xStrArr.reverse().join("");
    const num = Number(reversStr);
    if (isNegative && num > Math.pow(2, 31)) {
        return 0;
    }
    if (!isNegative && num > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? -num : num;
}

reverseInt(23) //32
reverseInt(280) //82
reverseInt(-34) //-43
reverseInt(0) //0
reverseInt(124685142348566541685468524845) //0