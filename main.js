diceArray = [];
var btn = document.querySelector('#btn')

document.addEventListener('DOMContentLoaded', function() {


btn.addEventListener('click', function() {
    var die = new Die();

});

var Die = function(value) {
    var roll = Math.floor(Math.random()*6 + 1);
    this.value = roll;
    this.div = document.createElement('div');
    this.div.className = "box";
    document.body.append(this.div);
    this.div.innertext = this.value;
    

}

});




// function roll() {
//     diceArray.push(new Die());
// }



// }Die.prototype.printBox = function() {
//     return 

// var dieLoop = new Die();





