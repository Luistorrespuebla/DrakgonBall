import Game from './Game.js';
import Swal from 'sweetalert2';

let btn_player1 = document.getElementById("btn_player1");
let btn_player2 = document.getElementById("btn_player2");
let player1, player2, pj1 = "", pj2 = "", aceptar = 0;

const iniciar_player1 = () => {
    document.getElementById('player1').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", 
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); 
            let secondsLeft = Math.floor(timeLeft / 1000); 
            timer.textContent = secondsLeft; 
    
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); 
                secondsLeft = Math.floor(timeLeft / 1000); 
                if (timer) {
                    timer.textContent = secondsLeft; 
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); 
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}
const iniciar_player2 = () => {
    document.getElementById('player2').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none")
        let timerInterval;
    Swal.fire({
        title: "INICIAR COMABTE",
        html: "EN <b>3</b> segundos", 
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = Swal.getTimerLeft(); 
            let secondsLeft = Math.floor(timeLeft / 1000);
            timer.textContent = secondsLeft; 
    
            timerInterval = setInterval(() => {
                timeLeft = Swal.getTimerLeft(); 
                secondsLeft = Math.floor(timeLeft / 1000); 
                if (timer) {
                    timer.textContent = secondsLeft; 
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); 
            Swal.fire({
                title: "Inicia el jugador 1",
                text: "El jugador 2 no podra hacer nada hasta que el jugador 1 haga un movimiento",
                icon: "success"
            });
        }
    });
    }

}

let seleccion1 = document.getElementById("player1_seleccion");
seleccion1.addEventListener('click', (event) => {
    pj1 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion1.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-danger")
    });

    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-warning");
})

let seleccion2 = document.getElementById("player2_seleccion");
seleccion2.addEventListener('click', (event) => {
    pj2 = event.target.alt == undefined ? "" : event.target.alt;

    seleccion2.querySelectorAll("img").forEach((temp_img) => {
        temp_img.classList.remove("btn-warning")
        temp_img.classList.add("btn-primary")
    });

    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-warning");
})

btn_player1.addEventListener('click', () => {
    let user_name1 = document.getElementById("user_name1").value;
    if (user_name1 == "") {
        Swal.fire({
            title: "Advertencia para el jugador 1",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player1 = new Game(user_name1);
        if (pj1 == "") {
            Swal.fire({
                title: "Advertencia para el jugador 1",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p1").innerText = user_name1.toUpperCase();
            document.getElementById("avatar1").src = `./public/img/${pj1}/base.png`;
            iniciar_player1();
        }
    }
})

btn_player2.addEventListener('click', () => {
    let user_name2 = document.getElementById("user_name2").value;
    if (user_name2 == "") {
        Swal.fire({
            title: "Advertencia para jugador 2",
            text: "Tienes que ingresar un nombre de usuario",
            icon: "warning"
        });
    } else {
        player2 = new Game(user_name2);
        if (pj2 == "") {
            Swal.fire({
                title: "Advertencia para jugador 2",
                text: "Tienes que elegir un personaje",
                icon: "warning"
            });
        } else {
            document.getElementById("p2").innerText = user_name2.toUpperCase();
            document.getElementById("avatar2").src = `./public/img/${pj2}/base.png`;
            iniciar_player2();
        }
    }
})

const turno = (turno,atacante) => {
    document.getElementById(`btn_atk_py${turno}`).disabled = false
    document.getElementById(`btn_esp_py${turno}`).disabled = false
    document.getElementById(`btn_ermi_py${turno}`).disabled = false
    document.getElementById(`btn_ki_py${turno}`).disabled = false

    document.getElementById(`btn_atk_py${atacante}`).disabled = true
    document.getElementById(`btn_esp_py${atacante}`).disabled = true
    document.getElementById(`btn_ermi_py${atacante}`).disabled = true
    document.getElementById(`btn_ki_py${atacante}`).disabled = true
}

const derrotado = (derrotado,ganador) => {
    Swal.fire({
        title: `Ganador`,
        text: "Despues de un largo combate fuiste victorioso",
        width: 600,
        color: "#716add",
        background: "#f5f5f5",
        imageUrl: `./public/img/${ganador}/base.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ataque Basico",
        backdrop: "rgb(135, 204, 239,0.4)",
    });
    document.getElementById(`ki_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`ki_py${derrotado}`).innerText=`${0}%`;

    document.getElementById(`energia_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`energia_py${derrotado}`).innerText=`${0}%`;

    document.getElementById(`vida_py${derrotado}`).style.width=`${0}%`;
    document.getElementById(`vida_py${derrotado}`).innerText=`${0}%`;

    document.getElementById(`btn_atk_py1`).disabled = true
    document.getElementById(`btn_esp_py1`).disabled = true
    document.getElementById(`btn_ermi_py1`).disabled = true
    document.getElementById(`btn_ki_py1`).disabled = true

    document.getElementById(`btn_atk_py2`).disabled = true
    document.getElementById(`btn_esp_py2`).disabled = true
    document.getElementById(`btn_ermi_py2`).disabled = true
    document.getElementById(`btn_ki_py2`).disabled = true
}




document.getElementById("btn_atk_py2").addEventListener('click',() => {    
    if (player2.getKi() < 5 || player2.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Comete una semilla por que estas vacio",
            icon: "warning"
        });
    } else {
        player2.atk_basico(player1);
        if (player1.getVida() <= 0) {
            derrotado(1,pj2)
        }else { 
            let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            Swal.fire({
                title: "Ataque Basico Jugador",
                text: "AHHHHHH",
                width: 600,
                color: "#716add",
                background: "#f5f5f5",
                imageUrl: `./public/img/${pj2}/basico.png`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: "Ataque Basico",
                backdrop: "rgb(135, 204, 239,0.4)",
            });
            turno(1,2);
        }
    }
})

document.getElementById("btn_ki_py2").addEventListener('click',() => {
    player2.cargar_ki();
    let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
    document.getElementById("ki_py2").style.width=`${porcentaje}%`;
    document.getElementById("ki_py2").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        width: 600,
        color: "#716add",
        background: "#f5f5f5",
        imageUrl: `./public/img/${pj2}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: "rgb(135, 204, 239,0.4)",
    });
    turno(1,2);
})

document.getElementById("btn_esp_py2").addEventListener('click',() => {    
    if (player2.getKi() < 10 || player2.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player2.atk_especial(player1);
        if (player1.getVida() <= 0) {
            derrotado(1,pj2)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py2").style.width=`${porcentaje}%`;
            document.getElementById("ki_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py2").style.width=`${porcentaje}%`;
            document.getElementById("energia_py2").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
            document.getElementById("vida_py1").style.width=`${porcentaje}%`;
            document.getElementById("vida_py1").innerText=`${porcentaje}%`;
        
            Swal.fire({
                title: "Ataque Especial!",
                text: "KAHHHHHH",
                width: 600,
                color: "#716add",
                background: "#f5f5f5",
                imageUrl: `./public/img/${pj2}/especial.png`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: "Ataque Especial",
                backdrop: "rgb(135, 204, 239,0.4)",
            });
            turno(1,2);
        }
    }
})

document.getElementById("btn_ermi_py2").addEventListener('click',() => {
    player2.semilla_ermi();
    let porcentaje = parseInt((parseInt(player2.getKi())*100)/80);
    document.getElementById("ki_py2").style.width=`${porcentaje}%`;
    document.getElementById("ki_py2").innerText=`${porcentaje}%`;

    porcentaje = parseInt((parseInt(player2.getEnergia())*100/90));
    document.getElementById("energia_py2").style.width=`${porcentaje}%`;
    document.getElementById("energia_py2").innerText=`${porcentaje}%`;

    porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
    document.getElementById("vida_py2").style.width=`${porcentaje}%`;
    document.getElementById("vida_py2").innerText=`${porcentaje}%`;

    document.getElementById('se_p2').innerText = player2.getSemilla()
   
    Swal.fire({
        title: "Una semilla menos!!",
        text: "Aumento de energia,ki y vida!!",
        width: 600,
        color: "#716add",
        background: "#f5f5f5",
        imageUrl: `./public/img/${pj2}/curar.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "semilla",
        backdrop: "rgb(135, 204, 239,0.4)",
    });
    turno(1,2);
})





document.getElementById("btn_atk_py1").addEventListener('click',() => {    
    if (player1.getKi() < 5 || player1.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning"
        });
    } else {
        player1.atk_basico(player2);
        if (player2.getVida() <= 0) {
            derrotado(2,pj1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;
        
            Swal.fire({
                title: "Ataque Basico Jugador",
                text: "AHHHHHH",
                width: 600,
                color: "#716add",
                background: "#f5f5f5",
                imageUrl: `./public/img/${pj1}/basico.png`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: "Ataque Basico",
                backdrop: "rgb(135, 204, 239,0.4)",
            });
            turno(2,1);
        }
    }
})

document.getElementById("btn_esp_py1").addEventListener('click',() => {    
    if (player1.getKi() < 10 || player1.getEnergia() < 20) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Comete una semilla!!",
            icon: "warning"
        });
    } else {
        player1.atk_especial(player2);
        if (player2.getVida() <= 0) {
            derrotado(2,pj1)
        }else {
            let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
            document.getElementById("ki_py1").style.width=`${porcentaje}%`;
            document.getElementById("ki_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
            document.getElementById("energia_py1").style.width=`${porcentaje}%`;
            document.getElementById("energia_py1").innerText=`${porcentaje}%`;
        
            porcentaje = parseInt((parseInt(player2.getVida())*100)/100);
            document.getElementById("vida_py2").style.width=`${porcentaje}%`;
            document.getElementById("vida_py2").innerText=`${porcentaje}%`;
        
            Swal.fire({
                title: "Ataque Especial!",
                text: "KAHHHHHH",
                width: 600,
                color: "#716add",
                background: "#f5f5f5",
                imageUrl: `./public/img/${pj1}/especial.png`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: "Ataque Especial",
                backdrop: "rgb(135, 204, 239,0.4)",
            });
            turno(2,1);
        }
    }
})

document.getElementById("btn_ermi_py1").addEventListener('click',() => {
    player1.semilla_ermi();
    let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
    document.getElementById("ki_py1").style.width=`${porcentaje}%`;
    document.getElementById("ki_py1").innerText=`${porcentaje}%`;

    porcentaje = parseInt((parseInt(player1.getEnergia())*100/90));
    document.getElementById("energia_py1").style.width=`${porcentaje}%`;
    document.getElementById("energia_py1").innerText=`${porcentaje}%`;

    porcentaje = parseInt((parseInt(player1.getVida())*100)/100);
    document.getElementById("vida_py1").style.width=`${porcentaje}%`;
    document.getElementById("vida_py1").innerText=`${porcentaje}%`;

    document.getElementById('se_p1').innerText = player1.getSemilla()
   
    Swal.fire({
        title: "Una semilla menos!!",
        text: "Aumento de energia,ki y vida!!",
        width: 600,
        color: "#716add",
        background: "#f5f5f5",
        imageUrl: `./public/img/${pj1}/curar.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "semilla",
        backdrop: "rgb(135, 204, 239,0.4)",
    });
    turno(2,1);
})

document.getElementById("btn_ki_py1").addEventListener('click',() => {
    player1.cargar_ki();
    let porcentaje = parseInt((parseInt(player1.getKi())*100)/80);
    document.getElementById("ki_py1").style.width=`${porcentaje}%`;
    document.getElementById("ki_py1").innerText=`${porcentaje}%`;

    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        width: 600,
        color: "#716add",
        background: "#f5f5f5",
        imageUrl: `./public/img/${pj1}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "cargar ki",
        backdrop: "rgb(135, 204, 239,0.4)",
    });
    turno(2,1);
})
