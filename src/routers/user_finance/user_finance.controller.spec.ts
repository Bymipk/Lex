import { Test, TestingModule } from '@nestjs/testing';
import { UserFinanceController } from './user_finance.controller';

describe('UserFinanceController', () => {
  let controller: UserFinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFinanceController],
    }).compile();

    controller = module.get<UserFinanceController>(UserFinanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
