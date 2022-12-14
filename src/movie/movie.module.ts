import { ImageService } from './../image/image.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Movie } from './entities/movie.entity';
import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService, ImageService],
})
export class MovieModule {}
