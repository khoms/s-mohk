import { Bill } from 'src/entity/Bill';
import { BillItem } from 'src/entity/BillItem';
import { Category } from 'src/entity/Category';
import { Product } from 'src/entity/Product';
import { User } from 'src/entity/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}

@EntityRepository(Bill)
export class BillRepository extends Repository<Bill> {}

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {}

@EntityRepository(BillItem)
export class BillItemRepository extends Repository<BillItem> {}
