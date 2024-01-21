import { Controller } from '@nestjs/common';
import { BlockchainApiBackendService } from './blockchain-api-backend.service';

@Controller('blockchain-api-backend')
export class BlockchainApiBackendController {
  constructor(
    private blockchainApiBackendService: BlockchainApiBackendService,
  ) {}
}
