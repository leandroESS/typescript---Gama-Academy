class Carro {

    private velocidadeAtual: number = 0;
    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 220) {


    }

    private alterarVelocidade(delta: number){ //pra acessar tme que usar os metodos embaixo
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade  <= this.velocidadeMaxima && novaVelocidade >= 0){
            this.velocidadeAtual = novaVelocidade;
        }
        else{
            // teranrio , caso delta seja positivo então ele obtem o maximo , se não o 0
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }

    acelerar() { // aumentar a acelração a partir do metodo, não diretamente pois é private
        this.alterarVelocidade(5)

    }

    frear() {
        this.alterarVelocidade(-5);

    }

}

const carro = new Carro('chevrolet', 'prisma', 250);
//carro.velocidadeMaxima = 400 // dará erro por conta do private

carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();

// herença
class Camaro extends Carro{
     private turbo = false;
   constructor(){
       super('Chevrolet','camaro', 500);
   }

   ligarTurbo(){
   this.turbo = true;
   }
}

const camaro = new Camaro();
camaro.acelerar;
camaro.frear;
camaro.ligarTurbo();