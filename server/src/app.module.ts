import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
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
