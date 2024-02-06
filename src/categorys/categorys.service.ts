import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Prisma, Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class CategorysService {
  constructor(private prisma:PrismaService){}





  async create(data:Prisma.CategoryCreateInput):Promise<Category>
  
  {

    return await this.prisma.category.create({data})
  }


  findAll() {
    return   this.prisma.category.findMany();
  }

  

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({

      where:{id},
      data:updateCategoryDto
    });
  }


  async remove(id:number):Promise<void> {

    await this.prisma.category.delete({where:{id}});
}
}
