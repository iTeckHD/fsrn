import { output } from "./output";

export function printTransformation(
  files: Array<{ value: string; transformed: string }>
) {
  for (const file of files) {
    output(file.value);
    output(`> ${file.transformed}`);
  }
}
