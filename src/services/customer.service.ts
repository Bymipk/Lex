import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CustomerService {
  retrieveCustomerData(id: string, name?: string): { message: string; data: any } {
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
