import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Prisma, Post } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma:PrismaService){}


  

  async create(data:any ,categories:number[]):Promise<any>{


    const createpost=await this.prisma.post.create({data});

    for(const categoryId of categories){
      await this.prisma.categoriesOnPosts.create({
        data:{
          postId:createpost.id,
          categoryId,
        },
      });

    }

 const postwith=await this.prisma.post.findUnique({

  where:{id:createpost.id},
  include:{category:true}
 })

    return postwith;
  }
  
}
