//Speed Detector
function calculateSpeed(){
    let max=70;
    let currentSpeed=document.getElementById('ssss').value;
    let points= (currentSpeed-max)/5;
    if(points <1){
        results='ok';

    }
    else if(points >12){
        result='licence Suspended';
    }
    else{
        result='points: '+points;
    }
    document.getElementById('result').innerText=result;

}