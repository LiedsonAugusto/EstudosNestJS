import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  //Importando módulo do usuário para o módulo principal do projeto
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
