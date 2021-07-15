interface Usuario{
    nome: String;
    email: string;
    address?: string;
}

function getUser(): Usuario { //a função retorna um usuário
    return{
        nome: 'Vitor',
        email: 'vitor@hotmail.com'
    }
}

function setUser(usuario: Usuario) {
        //....   
}