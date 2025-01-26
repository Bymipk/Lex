// src/routers/finance/finance.module.ts

import { Module } from '@nestjs/common';
import { FinanceController } from './user_finance.controller';

@Module({
  controllers: [FinanceController], // Register FinanceController
})
export class UserFinanceModule {}
