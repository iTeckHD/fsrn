import { InputQuestion, ConfirmQuestion } from "inquirer";

export function getConfirmQuestion(): ConfirmQuestion<
  Record<"result", boolean>
> {
  return {
    type: "confirm",
    name: "result",
    message: "Is the transformation correct?"
  };
}
