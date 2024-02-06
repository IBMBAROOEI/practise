import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
 async create(@Body()createPostDto:CreatePostDto):Promise<any> {


   const { title, authorId, categories } = createPostDto;
    const crp=await this.postsService.
    create({title,authorId},categories);
    return crp;
    
  }

  
}
