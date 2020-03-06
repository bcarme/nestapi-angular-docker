import { ApiProperty } from '@nestjs/swagger';

export class ArticleDto {
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly author: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly content: string;
}