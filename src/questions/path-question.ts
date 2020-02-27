import { InputQuestion } from "inquirer";
import { pwd } from "../util/bash-cmds";
import { stat, pathExists } from "fs-extra";

export function getPathQuestion(): InputQuestion<Record<"result", string>> {
  return {
    type: "input",
    name: "result",
    message: `Directory to rename files?`,
    default: async function() {
      return await pwd();
    },
    validate: async function(input: string) {
      if (!(await pathExists(input))) {
        return "Path does not exist!";
      }

      const dirStat = await stat(input);
      if (!dirStat.isDirectory()) {
        return "Path is not a directory!";
      }

      return true;
    }
  };
}
