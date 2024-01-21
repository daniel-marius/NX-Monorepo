import { Test } from '@nestjs/testing';
import { BlockchainApiBackendService } from './blockchain-api-backend.service';

describe('BlockchainApiBackendService', (): void => {
  let service: BlockchainApiBackendService;

  beforeEach(async (): Promise<void> => {
    const module = await Test.createTestingModule({
      providers: [BlockchainApiBackendService],
    }).compile();

    service = module.get(BlockchainApiBackendService);
  });

  it('should be defined', (): void => {
    expect(service).toBeTruthy();
  });
});
