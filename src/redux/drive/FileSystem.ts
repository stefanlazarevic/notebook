import { IFileSystem } from "./DriveTypes";
import Path from "./Path";

export default class FileSystem {
  private fs: IFileSystem;
  private cwd: string;

  static fromFileSystem(fs: IFileSystem, cwd?: string) {
    return new FileSystem(fs, cwd);
  }

  constructor(fs: IFileSystem, cwd: string = "~") {
    this.fs = fs;
    this.cwd = cwd;

    this.exists = this.exists.bind(this);
    this.toObject = this.toObject.bind(this);
  }

  exists(path: string): boolean {
    path = Path.normalize(path);

    return Boolean(this.fs[path]);
  }

  toObject(): IFileSystem {
    return this.fs;
  }
}
