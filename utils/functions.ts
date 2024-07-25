import { ExecException } from "child_process";

export const execCallback = (
  error: ExecException | null,
  stdout: string,
  stderr: string
) => {
  if (error) return console.error(`Error: ${error.message}`);
  if (stderr) return console.error(`Stderr: ${stderr}`);
  console.log(`Stdout: ${stdout}`);
};
