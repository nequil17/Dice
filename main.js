diceArray = [];
var btn = document.querySelector('#btn')
var buttontwo = document.querySelector('#buttontwo')

document.addEventListener('DOMContentLoaded', function() {

btn.addEventListener('click', function() {
    var dice = new Die();
    diceArray.push(dice);
});

var Die = function() {
    var roll = Math.floor(Math.random()*6 + 1);
    this.value = roll;
    this.div = document.createElement('div');
    this.div.className = "box";
    document.body.append(this.div);
    this.div.innerText = this.value;
}

buttontwo.addEventListener('click', function() {
    for(var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
});

Die.prototype.roll = function() {
    this.value = Math.floor(Math.random()*6 + 1); 
    this.div.innerText = this.value;
}

});






