class Game {
    #vida = 100;
    #ki = 80;
    #energia = 90;
    #semilla = 3;
    #user_name = "";

    constructor(user_name   ) {
        this.#user_name = user_name        
    }
    getVida(){
        return this.#vida;
    }
    getKi(){
        return this.#ki;
    }
    getSemilla(){
        return this.#semilla;
    }
    getEnergia(){
        return this.#energia;
    }
    getUser_name(){
        return this.#user_name;
    }
    setVida(decremento){
        this.#vida -= decremento;
    }
    aumentoVida(aumento){
        let masVida = this.getVida() + aumento;
        this.#vida = masVida > 100 ? 100 : masVida;
    }
    setKi(aumento){
        let masKi = this.getKi() + aumento;
        this.#ki = masKi > 80 ? 80 : masKi;
    }
    setEnergia(aumento){
        let masEnergia = this.getEnergia() + aumento;
        this.#energia = masEnergia > 90 ? 90 : masEnergia;
    }
    atk_basico(jugador){
        this.#ki -= this.#ki < 5 ? 0 : 5;
        this.#energia -= this.#energia < 10 ? 0 : 10;
        jugador.setVida(15);
    }
    atk_especial(jugador){
        this.#ki -= this.#ki < 10 ? 0 : 10;
        this.#energia -= this.#energia < 20 ? 0 : 20;
        jugador.setVida(30)
    }
    cargar_ki(){
        this.setKi(15)
    }
    semilla_ermi(){
        this.#semilla -= 1;
        this.aumentoVida(50)
        this.setKi(40)
        this.setEnergia(45)
    }
}

export default Game;