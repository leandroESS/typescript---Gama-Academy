//declara os tipos em minusculo
//boolean

const contaPaga: boolean = false;

//number (qualuer tipo , float, inteiro.etc..)

const idade: number = 34;

// string

const nome: string = "Leandro";

//array

const idades: number[] = [23, 18, 56];
const idades2: Array<number> = [44, 12, 100, 67] //outra forma

//tuple
let jogadores: [string, string, string];
jogadores = ['Vitor', 'Hugo', 'Alex']; //se eu botar mais de 3 itens não pegará pois foi definido 3 strings
let pagadores: [string, number, boolean]; // exemplo mesclando
pagadores = ['Vitor', 250.50, false]; // nome , quanto deve e se pagou

//enum
enum StatusAprovado{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado= '003 '
}

const statusDaAprovação: StatusAprovado = StatusAprovado.Aprovado;

//any

const retornoAPI: any[] =  [13, 'Laecio', false];
const retornoAPI: any =  {
 //....
};

//void

function printarNaTela(msg:string): void {
    console.log(msg);
}

//null e undefined
const u: undefined = undefined;

const nu: null = null;

//object

function criar(objecto: object) {
    //....
}
criar({
    propriedade: 1,
})

//criar('vitor'); // da erro//

//----- aula 4---- tipo never ---------------------------------------------

//funções que nunca ocorrem

function loopInfinito(): never {
    while (true) {
        
    }
    
}

function erro(msg1:string): never {
    throw new Error("msg1");
    
}

function falha() { //como ele chama uma função never, não precisa explicitar
    return erro("algo falhou");
}

/////////// aula 5 Múltiplos tipos com Union Types //////

//union types
const notas3: string | number = 3 // outro exemplo
function exibirNota(nota: number | string) { //ele pode receber ou number ou string
    console.log(`A nota é ${nota}`);
}

exibirNota('10'); //aceita os dois
exibirNota(7.5);

// aula 6 alias //////////////////////////////////

//alias

type Funcionario = {
    nome:string;
    sobreNome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome:'VITOR',
    sobreNome: 'Gonçalves',
    dataNascimento: new Date()

}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario:' , funcionario.nome);
    }
}

//07 - Valores nulos ou opcionais

let altura: number | null  = 1.6;
altura = null;

type Contato = {
    nomeC: string;
    tel: string;
    tel2?: string; // com a interrogação indica que é um campo opcional
}

const contato: Contato= {
    nomeC: 'Leandro',
    tel: '34451038',
    // não preciso povoar tel2 se tem o '?'

}

//type assertion ------------ aula 8 -----------------------

const minhaIdade: any = 23;
(minhaIdade as number).toString(); //o type assertion avisa ao tyscript que aqui minhaIdade vai
//produzir

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1"); //outra forma

console.log(input.value);





