const imgLampada = document.getElementById('lamp');
const imgInterruptor = document.getElementById('interruptor');
var lampadaLigada = false;

const alterarEstadoLampada = () => {
    lampadaLigada = !lampadaLigada;

    if (lampadaLigada) {
        imgInterruptor.setAttribute('src', 'assets/interruptor_on.png');
        imgInterruptor.setAttribute('alt', 'Interruptor ligado');

        imgLampada.setAttribute('src', 'assets/lamp_on.png');
        imgLampada.setAttribute('alt', 'Lâmpada acesa');

        document.body.style.background = 'radial-gradient(circle, white 8%, yellow 100%)';
    } else {
        imgInterruptor.setAttribute('src', 'assets/interruptor_off.png');
        imgInterruptor.setAttribute('alt', 'Interruptor desligado');

        imgLampada.setAttribute('src', 'assets/lamp_off.png');
        imgLampada.setAttribute('alt', 'Lâmpada apagada');
        
        document.body.style.background = 'radial-gradient(circle, white 8%, black 100%)';
    }
};

imgLampada.addEventListener('click', alterarEstadoLampada);
imgInterruptor.addEventListener('click', alterarEstadoLampada);
