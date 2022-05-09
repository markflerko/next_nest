import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    AlbumModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.ppwcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
