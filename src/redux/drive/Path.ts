export default class Path {
  static normalize(path: string): string {
    if (!/^~\//.test(path)) {
      path = `~/${path}`;
    }

    path = path.trim().replace(/\/+/g, "/");

    path = path.replace(/\/+$/, "");

    return path
      .split("/")
      .map(breadcrumb => breadcrumb.trim())
      .join("/");
  }

  static dirname(path: string): string {
    const match = path.match(/^(.+)\/([^/]+)$/);

    if (match && match[1]) {
      return match[1];
    }

    return '';
  }

  static basename(path: string): string {
    path = Path.normalize(path);

    const match = path.match(/^(.+)\/([^/]+)$/);

    console.log('Basename', match, path);

    if (match && match[2]) {
      return match[2];
    }

    return '';
  }

  static extname(path: string): string {
    path = Path.normalize(path);

    const match = path.match(/(\.[^\.]+)$/);

    if (match && match[0]) {
      return match[0];
    }

    return '';
  }
}