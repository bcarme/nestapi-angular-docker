import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://mongo:27017/angular8-crud'
      })
    }),
    ArticleModule
  ]
})

export class AppModule { }
