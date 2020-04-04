import { IDrive } from "./DriveTypes";

export default class Drive {
  private drive: IDrive;
  private cwd: string;

  static fromDrive(drive: IDrive, cwd?: string) {
    return new Drive(drive, cwd);
  }

  constructor(drive: IDrive, cwd: string = "~") {
    this.drive = drive;
    this.cwd = cwd;

    this.normalize = this.normalize.bind(this);
    this.exists = this.exists.bind(this);
    this.basename = this.basename.bind(this);
    this.toObject = this.toObject.bind(this);
  }

  normalize(path: string): string {
    if (!/^~\//.test(path)) {
      path = this.cwd + path;
    }

    path = path.trim().replace(/\/+/g, "/");

    path = path.replace(/\/+$/, "");

    return path
      .split("/")
      .map(breadcrumb => breadcrumb.trim())
      .join("/");
  }

  exists(path: string): boolean {
    path = this.normalize(path);

    return Boolean(this.drive[path]);
  }

  basename(path: string): string {
    path = this.normalize(path);

    const match = path.match(/^(.+)\/([^/]+)$/);

    if (match && match[2]) {
      return match[2];
    }

    return '';
  }

  extname(path: string): string {
    path = this.normalize(path);

    const match = path.match(/(\.[^\.]+)$/);

    if (match && match[0]) {
      return match[0];
    }

    return '';
  }

  toObject(): IDrive {
    return this.drive;
  }
}
