function average(scores){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i<scores.length; i++){
        sum = sum + scores[i];
    }
    avg = Math.round(sum/scores.length);
    return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));