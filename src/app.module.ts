import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './controllers/hello.controller'; // Correct relative import
import { HealthController } from './controllers/health.controller'; // Correct relative import
import { HelloService } from './services/hello.service'; // Correct relative import
import { CustomerController } from './routers/customer/customer.controller'; // Corrected relative import
import { HealthModule } from './routers/health/health.module'; // Correct relative import
import {UserFinanceModule} from './routers/user_finance/user_finance.module'

@Module({
  imports: [HealthModule,UserFinanceModule],
  controllers: [AppController, HelloController, HealthController, CustomerController], // Ensure CustomerController is listed here
  providers: [AppService, HelloService],
})
export class AppModule {}
 