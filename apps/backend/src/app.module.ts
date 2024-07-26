import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { ServicoModule } from './servico/servico.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, ServicoModule, AgendamentoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
