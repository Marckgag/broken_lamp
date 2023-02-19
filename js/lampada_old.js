const turnOn = document.getElementById ( 'turnOn');
const trunOff = document.getElementById ('trunOff');
const lamp = document.getElementById ('lamp');

function isLampBronken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if (!isLampBronken () ){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBronken () ){
    lamp.src = './img/desligada.jpg';
    }
}


function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}



turnOn.addEventListener ( 'click', lampOn );
trunOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
