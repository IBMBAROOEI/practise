import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User, Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}


  async create(data:Prisma.UserCreateInput):Promise<User>
  
  {

    return await this.prisma.user.create({data})
  }






   async finduserwithpost(userId:number):Promise<User |null>{
    
    return this.prisma.user.findUnique({

      where:{id:userId},
      include:{
        posts:{
          include:{
            category:true
          }
        }
      }
    })


   }

   async findAll() {
   return  await this.prisma.user.findMany();
   
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where:{id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({

      where:{id},
      data:updateUserDto
    });
  }


  async remove(id:number):Promise<void> {

      await this.prisma.user.delete({where:{id}});
  }
}
