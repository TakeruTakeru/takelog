import path from 'path';

export function createTitleByPathName(pathname) {
    // make page header string
    const fileName = path.basename(pathname);
    return `${fileName[0].toUpperCase()}${fileName.substring(1)}`;
}