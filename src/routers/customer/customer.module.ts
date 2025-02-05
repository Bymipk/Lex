import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from 'src/services/customer.service';

@Module({
  controllers: [CustomerController],
  providers:[CustomerService],
  exports:[CustomerService]
})
export class CustomerModule {}
