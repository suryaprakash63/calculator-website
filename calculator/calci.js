function Solve(val) {
    var v = document.getElementById('screen');
    v.value += val;
    
 }
 function Result() {
    var num1 = document.getElementById('screen').value;
    var fact=eval(num1);
    document.getElementById('screen').value = fact;
 }
 function Clear() {
    var inp = document.getElementById('screen');
    inp.value = '';
 }
 function DEL() {
    var ev = document.getElementById('screen');
    ev.value = ev.value.slice(0,-1);
 }

 