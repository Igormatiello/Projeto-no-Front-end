import apiService from "../apiservice";


class UsuarioService extends apiService{


    constructor(){

        super('/api/usuarios')
    }

autenticar(credenciais){
return this.post('/autenticar',credenciais)


}

obterSaldoPorUsuario(id){
return this.get(`/${id}/saldo`);


}


salvar(usuario){

    return this.post('/',usuario);
    
}



}

export default UsuarioService;