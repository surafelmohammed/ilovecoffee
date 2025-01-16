import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Shipwreck Roast 2',
      brand: 'Buddy Brew 2',
      flavors: ['chocolate 2', 'vanilla 2'],
    },
  ];
  create(createCoffeeDto: CreateCoffeeDto) {
    console.log(
      '------------------createCoffeeDto------------------',
      createCoffeeDto,
    );
    return 'This action adds a new coffee';
  }

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee) {
      throw new NotFoundException(`coffee with an id ${id} not found`);
    }
    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    coffee.name = updateCoffeeDto.name;
    return coffee;
  }

  remove(id: number) {
    return '';
  }
}
