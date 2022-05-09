import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  async createFile(type: FileType, file: Express.Multer.File) {
    try {
      const fileExtention = file.originalname.split('.').pop();
      const fileName = `${uuid.v4()}.${fileExtention}`;
      const filePath = path.resolve(__dirname, '..', 'static', type);

      if (!fs.existsSync(filePath)) {
        await fs.promises.mkdir(filePath, { recursive: true });
      }

      await fs.promises.writeFile(
        path.resolve(filePath, fileName),
        file.buffer,
      );

      return type + '/' + fileName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {}
}
