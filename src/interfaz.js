import Game from './Game.js';
import Swal from 'sweetalert2';

let btn_player1 = document.getElementById("btn_player1");
let btn_player2 = document.getElementById("btn_player2");
let player1, player2, pj1 = "", pj2 = "", aceptar = 0, contadorIzquierdo = 0, contadorDerecho = 0, turnosP1 = 0, turnosP2 = 0;

//asignación de personalidades

const ataques = {
    "Pikoro": {
        "color":"linear-gradient(255deg, rgba(25,170,20,0.5) 17%, rgba(220,255,200,0.5) 54%, rgba(90,190,60,0.5) 92%)",
        "atk1": "Disparo Infernal",
        "atk2": "Cañón de Luz Especial!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡Aún tengo mucho más poder del que crees!"
    },
    "Gogeta": {
        "color":"linear-gradient(255deg, rgba(160,160,20,0.5) 17%, rgba(250,255,70,0.5) 54%, rgba(200,210,80,0.5) 92%)",
        "atk1": "Puño Estelar",
        "atk2": "Kamehameha Final!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡Soy la fusión suprema, el guerrero definitivo!"
    },
    "Cell": {
        "color":"linear-gradient(255deg, rgba(40,100,35,0.5) 17%, rgba(90,250,50,0.5) 54%, rgba(45,90,40,0.5) 92%)",
        "atk1": "Impacto Perfecto",
        "atk2": "Super Ráfaga de Energía!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡La perfección es imparable!"
    },
    "Vegito": {
        "color":"linear-gradient(255deg, rgba(200,30,30,0.5) 17%, rgba(255,180,50,0.5) 54%, rgba(190,70,70,0.5) 92%)",
        "atk1": "Explosión Final",
        "atk2": "Espada Espiritual!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡No hay enemigo que pueda vencerme!"
    },
    "Trunks": {
        "color":"linear-gradient(255deg, rgba(25,140,150,0.5) 17%, rgba(40,255,245,0.5) 54%, rgba(60,180,160,0.5) 92%)",
        "atk1": "Corte Radial",
        "atk2": "Buster Cannon!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡Haré lo que sea para cambiar el futuro!"
    },
    "Gohan": {
        "color":"linear-gradient(255deg, rgba(130,30,90,0.5) 17%, rgba(180,50,255,0.5) 54%, rgba(170,60,130,0.5) 92%)",
        "atk1": "Impacto Relámpago",
        "atk2": "Masenko!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡Protegeré a todos sin importar el costo!"
    },
    "Goku": {
        "color":"linear-gradient(255deg, rgba(30,30,150,0.5) 17%, rgba(50,50,255,0.5) 54%, rgba(70,70,200,0.5) 92%)",
        "atk1": "Golpe Dragón",
        "atk2": "Super Kamehameha!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡No importa cuántas veces caiga, siempre me levantaré!"
    },

    "Veguetta": {
        "color":"linear-gradient(255deg, rgba(120,20,90,0.5) 17%, rgba(200,60,250,0.5) 54%, rgba(160,40,140,0.5) 92%)",
        "atk1": "Explosión de Furia",
        "atk2": "Final Flash!!!",
        "Ki": "¡HAAAAAH!",
        "curar": "¡Yo seré el guerrero más fuerte del universo!"
    }
}


const iniciar_player1 = () => {
    document.getElementById('player1').classList.add("d-none");
    aceptar++;
    if (aceptar == 2) {
        document.getElementById("iniciar_juego").classList.remove("d-none");
        let timerInterval;
        
        Swal.fire({
            title: "INICIAR COMBATE",
            html: "EN <b>3</b> segundos",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false, 
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
                    text: "El jugador 2 no podra atacar hasta que realice su movimiento el jugador 1.",
                    icon: "info",
                    showConfirmButton: false, 
                    timer: 1200 
                });
            }
        });
    }
};



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

const turno = (turno, atacante, turnos = 0) => {
    console.log(`Turnos P1: ${turnosP1}, Turnos P2: ${turnosP2}`);

    const botones = ["atk", "ermi", "ki", "esp"];
    
    botones.forEach(action => {
        document.getElementById(`btn_${action}_py${turno}`).disabled = false;
        document.getElementById(`btn_${action}_py${atacante}`).disabled = true;
    });

    const btnEsp = document.getElementById(`btn_esp_py${turno}`);

    if (turnos % 3 === 0) {
        btnEsp.disabled = false;
    } else {
        btnEsp.disabled = true;
    }

    if (turnos >= 3) {
        if (turno === 1) turnosP1 = 0;
        if (turno === 2) turnosP2 = 0;
    }
};


const reintentarPartida = (ganador) => {
    if (ganador === 1) {
        contadorIzquierdo++;
        document.getElementById('contadorIzquierdo').textContent = `Juegos ganados: ${contadorIzquierdo}`;
    } else if (ganador === 2) {
        contadorDerecho++;
        document.getElementById('contadorDerecho').textContent = `Juegos ganados: ${contadorDerecho}`;
    }

    turnosP1 = 0;
    turnosP2 = 0;

    [player1, player2].forEach(player => {
        player.aumentoVida(1000);
        player.setKi(80);
        player.setEnergia(90);
        player.setSemilla(3);
    });

    console.log(`Jugador 1 -> Vida: ${player1.getVida()}, Ki: ${player1.getKi()}, Energía: ${player1.getEnergia()}`);
    console.log(`Jugador 2 -> Vida: ${player2.getVida()}, Ki: ${player2.getKi()}, Energía: ${player2.getEnergia()}`);

    ['vida', 'ki', 'energia'].forEach(stat => {
        [1, 2].forEach(num => {
            const bar = document.getElementById(`${stat}_py${num}`);
            bar.style.width = "100%";
            bar.innerText = "100%";
        });
    });

    document.getElementById('se_p1').innerText = player1.getSemilla();
    document.getElementById('se_p2').innerText = player2.getSemilla();

    const toggleButtons = (player, state) => {
        ['atk', 'ermi', 'ki', 'esp'].forEach(action => {
            document.getElementById(`btn_${action}_py${player}`).disabled = state;
        });
    };

    toggleButtons(1, false);
    toggleButtons(2, true);
};

const jugadorVencido = (perdedor, img, ganadorNombre, ganador) => {
    Swal.fire({
        title: `${ganadorNombre}`,
        text: "¡Has ganado!",
        width: 600,
        color: "#fff",
        background: "#222",
        imageUrl: `./public/img/${img}/base.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ganador",
        backdrop: "radial-gradient(circle, rgba(255,69,69,0.85) 10%, rgba(0,0,0,0.85) 90%)",
        showCancelButton: true,
        confirmButtonText: "Reintentar partida",
        cancelButtonText: "Abandonar partida",
        allowOutsideClick: false,
        customClass: {
            confirmButton: 'swal-retry-btn',  
            cancelButton: 'swal-exit-btn'     
        }
    }).then((result) => {
        if (result.isConfirmed) {
            reintentarPartida(ganador);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            location.reload();
        }
    });

    ['ki', 'energia', 'vida'].forEach(stat => {
        const element = document.getElementById(`${stat}_py${perdedor}`);
        element.style.width = "0%";
        element.innerText = "0%";
    });
};

const style = document.createElement("style");
style.innerHTML = `
    .swal-retry-btn {
        background-color: #007bff !important; /* Azul */
        color: white !important;
        border: 2px solid #0056b3 !important;
    }
    .swal-exit-btn {
        background-color: #ff9800 !important; /* Naranja */
        color: white !important;
        border: 2px solid #e68900 !important;
    }
`;
document.head.appendChild(style);

document.getElementById("btn_atk_py1").addEventListener('click', async () => {    
    if (player1.getKi() < 5 || player1.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
    } else {
        player1.atk_basico(player2);
        await Swal.fire({
            title: "Ataque Basico Jugador 1",
            text: ataques[pj1]["atk1"],
            width: 600,
            color: "#ffff",
            background: "none",
            imageUrl: `./public/img/${pj1}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj1]["color"]}`,
            showConfirmButton: false,
            timer: 1000
        });

        if (player2.getVida() <= 0) {
            jugadorVencido(2, pj1, player1.getUser_name(), 1);
        } else {
            actualizarBarras();
            if (turnosP1 > 0) {
                turnosP1++;
            }
            turno(2, 1, turnosP2);
        }
    }
});

document.getElementById("btn_esp_py1").addEventListener("click", async () => {
    const kiSuficiente = player1.getKi() >= 10;
    const energiaSuficiente = player1.getEnergia() >= 20;

    if (!kiSuficiente || !energiaSuficiente) {
        Swal.fire({
            title: "Ki y Energía insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
        return;
    }

    player1.atk_especial(player2);

    await Swal.fire({
        title: "Ataque Especial Jugador 1",
        text: ataques[pj1]["atk2"],
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj1}/especial.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ataque Especial",
        backdrop: ataques[pj1]["color"],
        showConfirmButton: false,
        timer: 1000
    });

    if (player2.getVida() <= 0) {
        return jugadorVencido(2, pj1, player1.getUser_name(), 1);
    }

    actualizarBarras();
    turnosP1++;
    turno(2, 1, turnosP2);
});


document.getElementById("btn_ermi_py1").addEventListener('click', () => {
    if (player1.getSemilla() <= 0) {
        Swal.fire({
            title: "Te has quedado sin semillas",
            text: "Las semillas se han acabado",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
    } else {
        player1.semilla_ermi();
        actualizarBarras();
        document.getElementById('se_p1').innerText = player1.getSemilla();
        Swal.fire({
            title: "Te has comido una semilla del ermitaño",
            text: ataques[pj1]["curar"],
            position: "center-center",
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj1}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Semilla",
            backdrop: `${ataques[pj1]["color"]}`,
            showConfirmButton: false,
            timer: 1000
        });
        if (turnosP1 > 0) {
            turnosP1++;
        }
        turno(2, 1, turnosP2);
    }
});

document.getElementById("btn_ki_py1").addEventListener('click', () => {
    player1.cargar_ki();
    actualizarBarras();
    Swal.fire({
        title: "Aumentando ki!!!",
        text: "Aumentaste tu ki",
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj1}/energia.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Cargar ki",
        backdrop: `${ataques[pj1]["color"]}`,
        showConfirmButton: false,
        timer: 1000
    });
    if (turnosP1 > 0) {
        turnosP1++;
    }
    turno(2, 1, turnosP2);
});

// Botones de jugador 2
document.getElementById("btn_atk_py2").addEventListener('click', async () => {    
    if (player2.getKi() < 5 || player2.getEnergia() < 10) {
        Swal.fire({
            title: "Ki y Energia insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
    } else {
        player2.atk_basico(player1);
        await Swal.fire({
            title: "Ataque Basico Jugador 2",
            text: ataques[pj2]["atk1"],
            width: 600,
            color: "#ececec",
            background: "none",
            imageUrl: `./public/img/${pj2}/basico.png`,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Ataque Basico",
            backdrop: `${ataques[pj2]["color"]}`,
            showConfirmButton: false,
            timer: 1000
        });

        if (player1.getVida() <= 0) {
            jugadorVencido(1, pj2, player2.getUser_name(), 2);
        } else { 
            actualizarBarras();
            if (turnosP2 > 0) {
                turnosP2++;
            }
            turno(1, 2, turnosP1);
        }
    }
});

document.getElementById("btn_esp_py2").addEventListener("click", async () => {
    const kiSuficiente = player2.getKi() >= 10;
    const energiaSuficiente = player2.getEnergia() >= 20;

    if (!kiSuficiente || !energiaSuficiente) {
        Swal.fire({
            title: "Ki y Energía insuficiente",
            text: "Tienes que recargar para hacer un ataque",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
        return;
    }

    player2.atk_especial(player1);

    await Swal.fire({
        title: "Ataque Especial Jugador 2",
        text: ataques[pj2]["atk2"],
        position: "center-center",
        width: 600,
        color: "#ececec",
        background: "none",
        imageUrl: `./public/img/${pj2}/especial.png`,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ataque Especial",
        backdrop: ataques[pj2]["color"],
        showConfirmButton: false,
        timer: 1000
    });

    if (player1.getVida() <= 0) {
        return jugadorVencido(1, pj2, player2.getUser_name(), 2);
    }

    actualizarBarras();
    turnosP2++;
    turno(1, 2, turnosP1);
});


const actualizarBarras=()=> {
    let actualizar = (id, valor, max) => {
        let porcentaje = parseInt((parseInt(valor) * 100) / max);
        document.getElementById(id).style.width = `${porcentaje}%`;
        document.getElementById(id).innerText = `${porcentaje}%`;
    };
    actualizar("ki_py1", player1.getKi(), 80);
    actualizar("energia_py1", player1.getEnergia(), 90);
    actualizar("vida_py1", player1.getVida(), 100);
    actualizar("ki_py2", player2.getKi(), 80);
    actualizar("energia_py2", player2.getEnergia(), 90);
    actualizar("vida_py2", player2.getVida(), 100);
}
