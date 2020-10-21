

function addNum(a, b){

    return a + b;
}

function subNum(a, b) {
    return a - b;
}

exports.mulNum =  function mulNum(a, b) {
    return a * b;
}

//module.exports.addNum = addNum;
exports.addNum = addNum;
module.exports.subNum = subNum;