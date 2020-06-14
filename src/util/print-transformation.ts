import { output } from "./output";

export function printTransformation(
  files: Array<{ value: string; transformed: string }>
) {
  const arrResult = [];

  for (const file of files) {
    output(file.value);
    output(`> ${file.transformed}`);
  }
}
