import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";


/* 
    ValidatorConstraintInterface -> interface que permite a sobrescrita do método responsável pela a construção do decorator

*/
@Injectable()
// Indica ao nest que é uma validação assíncrona
@ValidatorConstraint({async: true})
export class emailUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){}

    // value -> atributo que será validado, nesse caso: email:string

    async validate(value: any, validationArguments?: ValidationArguments):Promise<boolean> {
        const usuarioComEmailExistente = await this.usuarioRepository.listaUsuarioPorEmail(value);
        return !usuarioComEmailExistente;
    }

    // Método que traz mensagem padrão quando a validação for acionada

    // defaultMessage?(validationArguments?: ValidationArguments): string {
    //     throw new Error("Method not implemented.");
    // }
}
// Decorator -> Um decorator o TypeScript é basicamente uma função que devolve outra função que executa algo em um objeto, seja em seu construtor ou em uma propriedade.
// deve possuir os mesmos parâmetros que o class-validator
export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    // Como o decorator é de uma propriedade, devemos ter 2 parâmetro:
    // OBJETO -> Objeto onde ele está sendo executado
    // PROPRIEDADE -> Propriedade que está sendo validada, nesse exemplo, email:string
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: emailUnicoValidator
        });
    }
}