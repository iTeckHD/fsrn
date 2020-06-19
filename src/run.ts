import inquirer from "inquirer";
import { getFiles } from "./get-files";
import { transform } from "./transform";
import { getFilePatternQuestion } from "./questions/file-pattern-question";
import { getFileRenameQuestion } from "./questions/file-rename-question";
import { getPathQuestion } from "./questions/path-question";
import { output } from "./util/output";
import { printTransformation } from "./util/print-transformation";
import { getConfirmQuestion } from "./questions/confirm-question";
import { rename } from "fs-extra";
import { join } from "path";

export async function run() {
  const { result: path } = await inquirer.prompt([getPathQuestion()]);
  const { result: filePattern } = await inquirer.prompt([
    getFilePatternQuestion(),
  ]);

  const files = await getFiles(path, filePattern);
  if (files.length === 0) {
    output("No files have been found with this pattern!");
    return;
  }

  const { result: renamePattern } = await inquirer.prompt([
    getFileRenameQuestion(),
  ]);

  const transformed = files.map((f) => ({
    value: f,
    transformed: transform(f, filePattern, renamePattern),
  }));

  printTransformation(transformed);

  const { result: confirmed } = await inquirer.prompt([getConfirmQuestion()]);

  if (!confirmed) {
    return;
  }

  await Promise.all(
    transformed.map((f) => {
      const oldFile = join(path, f.value);
      const newFile = join(path, f.transformed);

      return rename(oldFile, newFile);
    })
  );
}
