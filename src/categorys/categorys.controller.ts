import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {  Category } from '@prisma/client';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

 


  @Post()
  create(@Body() Data:{name:string},):Promise<Category> {

    return this.categorysService.create(Data);
  }

  @Get()
  findAll() {
    return this.categorysService.findAll();
  }

 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categorysService.update(+id, updateCategoryDto);
  }

  


  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string):Promise<void> {
    await this.categorysService.remove(Number(id));
  }
}
