import { Controller, Get, Query, BadRequestException } from '@nestjs/common';

@Controller('customer') 
export class CustomerController {
  @Get('retrieve_customer_data')
  retrieveCustomerData(
    @Query('id') id: string, 
    @Query('name') name?: string, 
  ): { message: string; data: any } {
    if (!id) {
      throw new BadRequestException('ID is a mandatory field.');
    }

    // Mock data for the example
    const mockData = {
      id: '203056619',
      name: name || 'Barak Jacob', 
    };

    return {
      message: 'Customer data retrieved successfully',
      data: mockData,
    };
  }
}
