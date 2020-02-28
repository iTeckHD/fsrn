import { InputQuestion } from "inquirer";

export function getFilePatternQuestion(): InputQuestion<
  Record<"result", RegExp>
> {
  return {
    type: "input",
    name: "result",
    message: `Enter the regex to match the files`,
    filter: function(answer: string) {
      return new RegExp(answer);
    }
  };
}
