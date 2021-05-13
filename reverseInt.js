const reverseInt = x => {
    const reversed = x.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(x)
}

reverseInt(23) //32
reverseInt(280) //82
reverseInt(-34) //-43
reverseInt(0) //0