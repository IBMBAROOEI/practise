import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import {User as UserModel} from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData:{name:string},):Promise<UserModel> {

    return this.usersService.create(userData);
  }



  @Get(':userId')

  async getuserpost(@Param('userId')userId:string){
    const user=await this.usersService.finduserwithpost(parseInt(userId));
    return user;
  }

  @Get()
   async findAll() {
    return  await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string):Promise<void> {
    await this.usersService.remove(Number(id));
  }
}
