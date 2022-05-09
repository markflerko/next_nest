import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private readonly trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
    private readonly fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = await this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = await this.fileService.createFile(
      FileType.IMAGE,
      picture,
    );

    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });

    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id).exec();
    return track._id;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel
      .findById(id)
      .populate('comments')
      .exec();
    return track;
  }

  async getAll(limit: number, offset: number): Promise<Track[]> {
    const tracks = await this.trackModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
    return tracks;
  }

  async addCommentDto(dto: CreateCommentDto) {
    const track = await this.trackModel.findById(dto.trackId).exec();
    const comment = await this.commentModel.create(dto);
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id).exec();
    track.listens += 1;
    track.save();
  }

  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel
      .find({
        name: { $regex: new RegExp(query, 'i') },
      })
      .exec();

    return tracks;
  }
}
