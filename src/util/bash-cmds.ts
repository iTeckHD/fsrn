import { exec } from "child_process";

export async function pwd() {
  return new Promise<string>((resolve, reject) => {
    exec("pwd", function(err, stdout, stderr) {
      if (err) {
        reject();
      }
      resolve(stdout.trim());
    });
  });
}
