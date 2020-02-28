import Table from "cli-table";
import { output } from "./output";

export function printTransformation(
  files: Array<{ value: string; transformed: string }>
) {
  var table = new Table({
    head: ["before", "after"],
    colWidths: [35, 35]
  });

  for (const file of files) {
    table.push([file.value, file.transformed]);
  }

  output(table.toString());
}
