import { Module } from '@nestjs/common';
import { BlockchainApiBackendController } from './blockchain-api-backend.controller';
import { BlockchainApiBackendService } from './blockchain-api-backend.service';

@Module({
  controllers: [BlockchainApiBackendController],
  providers: [BlockchainApiBackendService],
  exports: [BlockchainApiBackendService],
})
export class BlockchainApiBackendModule {}
