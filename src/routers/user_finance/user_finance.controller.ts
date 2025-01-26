// src/routers/finance/finance.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('Finance')
@Controller('finance')
export class FinanceController {

  // Mock data: simulate finance data for a user by ID
  private readonly mockFinanceData = {
    '12345': { balance: 5000, creditScore: 720 },
    '67890': { balance: 3000, creditScore: 680 },
  };

  @Get('customer-finance-details')
  @ApiQuery({ name: 'id', type: String, required: true, description: 'User ID' })
  retrieveFinanceDetails(@Query('id') id: string): string {
    const financeDetails = this.mockFinanceData[id];
    if (!financeDetails) {
      return `No finance details found for user with ID: ${id}`;
    }
    return `Finance details for user with ID ${id}: Balance - $${financeDetails.balance}, Credit Score - ${financeDetails.creditScore}`;
  }
}
