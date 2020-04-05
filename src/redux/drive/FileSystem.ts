import { IFileSystem, FileSystemTypes } from "./DriveTypes";
import Path from "./Path";

export default class FileSystem {
  private fs: IFileSystem;

  static fromFileSystem(fs: IFileSystem) {
    return new FileSystem(fs);
  }

  constructor(fs: IFileSystem, cwd: string = "~") {
    this.fs = fs;

    this.exists = this.exists.bind(this);
    this.toObject = this.toObject.bind(this);
  }

  createDirectory(path: string) {
    path = Path.normalize(path);

    if (this.exists(path)) {
      throw Error('Directory already exists.');
    }

    const breadcrumbs = path.split('/');

    breadcrumbs.forEach((breadcrumb, index) => {
      const directoryPath = breadcrumbs.slice(0, index + 1).join('/');

      if (!this.exists(directoryPath)) {
        const dirname = Path.dirname(directoryPath);
        const parentDirectory = this.fs[dirname];
        const baseName = breadcrumb;

        this.fs[parentDirectory.path].children = this.fs[parentDirectory.path].children.concat(baseName);

        this.fs[directoryPath] = {
          path: directoryPath,
          children: [],
          createdAt: Date.now(),
          type: FileSystemTypes.DIRECTORY
        };
      }
    })
  }

  exists(path: string): boolean {
    return Boolean(this.fs[path]);
  }

  toObject(): IFileSystem {
    return this.fs;
  }
}
