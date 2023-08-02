import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

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
  /*
    método utilizado para que o class-validator saiba de onde buscar as suas dependências, utilzando dos mesmos mecanismos que o Nest
    1º parâmetro -> é passado o root module da nossa aplicação para o class-validator saber de qual mecanismo de injeção de dependência irá utilzar
    2º parâmetro -> caso não consiga resolver a injeção das dependências como o Nest, ele irá usar seu próprio container para isso
  */
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
