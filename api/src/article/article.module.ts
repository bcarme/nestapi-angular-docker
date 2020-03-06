import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleSchema } from './schemas/article.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}
