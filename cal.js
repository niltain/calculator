let val1 = document.getElementById('val1')
let val2 = document.getElementById('val2')
document.getElementById('plus').onclick= function(){
    plus()
}
function plus(){

    // document.getElementById("result").innerHTML = Number(val1.value) + Number(val2.value) ;

    document.getElementById("result").innerHTML = parseInt(val1.value) + parseInt(val2.value) ;

}
document.getElementById('minus').onclick= function(){
    minus()
}
function minus(){

    // document.getElementById("result").innerHTML = Number(val1.value) - Number(val2.value) ;
    document.getElementById("result").innerHTML = parseInt(val1.value) - parseInt(val2.value) ;

}
document.getElementById('nhan').onclick= function(){
    nhan()
}
function nhan(){

    // document.getElementById("result").innerHTML = Number(val1.value) * Number(val2.value) ;
    document.getElementById("result").innerHTML = parseInt(val1.value) * parseInt(val2.value) ;
}
document.getElementById('chia').onclick= function(){
    chia()
}
function chia(){

    // document.getElementById("result").innerHTML = Number(val1.value) / Number(val2.value) ;
    document.getElementById("result").innerHTML = (parseInt(val1.value) / parseInt(val2.value)) ;
}