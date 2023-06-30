import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { BillModule } from './bill/bill.module';
import { BillItemModule } from './bill-item/bill-item.module';

@Module({
  imports: [UserModule, ProductModule, AuthModule, CategoryModule, BillModule, BillItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
