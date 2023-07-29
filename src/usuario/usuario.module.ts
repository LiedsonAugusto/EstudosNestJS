import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";

//Indicar que está classe se trata de um módulo da aplicação
@Module({
    imports: [],
    //Controlador do módulo usuário
    controllers: [UsuarioController],
    //Provider para injeção de dependência do UsuárioRepository
    providers: [UsuarioRepository],
    
})
export class UsuarioModule{

}

/* 
    Monólitos modulares é uma boa arquitetura de projetos nest segundo a própria documentação
    Separar cada entidade em seus próprios módulos e importar no modulo principal app

*/