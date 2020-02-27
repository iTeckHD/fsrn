import { InputQuestion } from "inquirer";

export function getFileRenameQuestion(): InputQuestion<
  Record<"result", string>
> {
  return {
    type: "input",
    name: "result",
    message: `Enter the pattern to rename the files`
  };
}
