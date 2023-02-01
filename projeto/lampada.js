const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.png';
        turnOnOff.textContent = 'Ligar';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.png';
    alert("O sofrimento só é intolerável quando ninguém cuida. - Cicely Saunders " + "\n" + "Faça uma consulta!")
}

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );