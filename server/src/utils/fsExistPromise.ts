import * as fs from 'fs';

export const fsExistPromise = (filePath) => {
  return new Promise((res, rej) => {
    try {
      const isExist = fs.existsSync(filePath);
      res(isExist);
    } catch (error) {
      rej(error);
    }
  });
};
