import { Module } from '@nestjs/common';
import { BlockchainApiBackendModule } from '@blockchain-app/blockchain/api-backend';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BlockchainApiBackendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
