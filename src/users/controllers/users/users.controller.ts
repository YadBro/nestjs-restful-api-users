import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipePipe } from 'src/users/pipes/validate-create-user-pipe/validate-create-user-pipe.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private users: UsersService) {}

  ///// LEARN //////
  // @Get()
  // getUsers() {
  //   return { username: 'yadiganteng', password: 'yadigateng321' };
  // }

  // @Get('posts')
  // getUsersPosts() {
  //   return [
  //     {
  //       username: 'yadiganteng',
  //       password: 'yadigateng321',
  //       posts: [
  //         {
  //           title: 'Menjelajah',
  //           body: 'ini menjelajah',
  //         },
  //         {
  //           title: 'Berbumi',
  //           body: 'ini berbumi',
  //         },
  //       ],
  //     },
  //   ];
  // }

  // @Post()
  // createPost(@Req() request: Request, @Res() response: Response) {
  //   console.log(request);
  //   return response.send('Created');
  // }

  // @Post()
  // createUser(@Body() userData: CreateUserDto) {
  //   console.log(userData);
  //   return {};
  // }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   console.log(id);
  //   return { id };
  // }

  // @Get('/posts/:postId/:userId')
  // getPostById(@Param() params: { postId: string; userId: string }) {
  //   console.log(params.postId, params.userId);
  //   return { params };
  // }

  // @Get('/posts/products')
  // getPostProducts(@Query('sortByUser', ParseBoolPipe) sortByUser: boolean) {
  //   console.log(sortByUser);
  //   return { sortByUser };
  // }

  // @Get('/posts/comments')
  // getPostComments(@Query() queries: { sortBy: string; soryByCountry: string }) {
  //   console.log(queries.sortBy, queries.soryByCountry);
  //   return { queries };
  // }
  ///// LEARN //////

  @Get()
  getUsers() {
    return this.users.fetchUsers();
  }

  @Get(':id')
  getUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.users.fetchUsersById(id);
  }

  @Post()
  createUser(@Body(ValidateCreateUserPipePipe) UserData: CreateUserDto) {
    return this.users.createUser(UserData);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: Partial<CreateUserDto>,
  ) {
    this.users.updateUser(id, userData);
    return { status: true };
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.users.deleteUser(id);
    return { status: true };
  }
}
