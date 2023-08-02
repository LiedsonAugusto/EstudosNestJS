import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailUnico } from "../validation/usuarioEmail.valdiation";

export class UsuarioDTO{

    /*
        @IsNotEmpty -> verifica se o campo está null, undefined ou não é string
        message: campo do objeto validationOptions responsável por gerar a mensagem de erro quando a exception é gerada
    */
    @IsNotEmpty({message: 'O campo nome não pode ser vazio'})
    nome: string;
    /*
        @IsEmail -> verifica se o campo é um email válido
        message: campo do objeto validationOptions responsável por gerar a mensagem de erro quando a exception é gerada
    */
    @IsEmail(undefined, {message: 'O campoe email precisa ser um email válido'})
    @EmailUnico({message: 'Este email já foi registrado'})
    email: string;
    /* 
        @MinLenght -> verifica se o campo possuí o valor mínimo inferido
        message: campo do objeto validationOptions responsável por gerar a mensagem de erro quando a exception é gerada
    */
    @MinLength(6, {message: 'O campo senha deve ter o tamanho mínimo de 6 caracteres'})
    senha: string;
}