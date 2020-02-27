import { readdir, statSync } from "fs-extra";

export async function getFiles(path: string, pattern: RegExp) {
  const files = await readdir(path);
  return files
    .filter(f => !f.startsWith("."))
    .filter(f => !statSync(`${path}/${f}`).isDirectory())
    .filter(f => pattern.test(f));
}
