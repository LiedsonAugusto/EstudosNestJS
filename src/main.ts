import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/* 
      ANOTAÇÕES GERAIS


  1. npx @nestjs/cli new nome-do-projeto -> cria o projeto nest
  2. npm install class-validator class-transformer -> instala as dependências de validação


  @ValidateNested() -> validação em cascata de um campo que é um array
  @IsArray()  -> verifica se o campo inferido é um array
  @Type(() => CaracteristicaProdutoDTO) -> observa qual sera a classe do array em questão, para que a validação ocorra
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Responsável por habilitar o uso de pipes na aplicação
  app.useGlobalPipes(
    // instanciando o pipe de validação
    new ValidationPipe({
      // Transforma o JSON que recebemos no @Body na classe que indicamos o seu tipo
      transform: true,
      // Exige que as chaves do JSON sejam iguais aos atributos da classe
      whitelist: true,
      // Faz com que quando tenha a presença de alguma chave que não esteja na classe, lançe uma exception
      forbidNonWhitelisted:true
    })
  );
  await app.listen(3000);
}
bootstrap();
