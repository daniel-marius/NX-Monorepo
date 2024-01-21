import { Test } from '@nestjs/testing';
import { BlockchainApiBackendController } from './blockchain-api-backend.controller';
import { BlockchainApiBackendService } from './blockchain-api-backend.service';

describe('BlockchainApiBackendController', (): void => {
  let controller: BlockchainApiBackendController;

  beforeEach(async (): Promise<void> => {
    const module = await Test.createTestingModule({
      providers: [BlockchainApiBackendService],
      controllers: [BlockchainApiBackendController],
    }).compile();

    controller = module.get(BlockchainApiBackendController);
  });

  it('should be defined', (): void => {
    expect(controller).toBeTruthy();
  });
});
