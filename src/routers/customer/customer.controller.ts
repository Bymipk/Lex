import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { CustomerService } from '../../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('retrieve_customer_data')
  retrieveCustomerData(
    @Query('id') id: string,
    @Query('name') name?: string,
  ): { message: string; data: any } {
    return this.customerService.retrieveCustomerData(id, name);
  }
}
