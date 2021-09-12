import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAnswer = (filePath) => {
  const fullPath = path.resolve(__dirname, filePath);
  try {
    return fs
      .readFileSync(fullPath, {
        encoding: "utf8",
        flag: "r",
      })
      .replace(/([\S\s]*)\/\/ WRITE YOUR ANSWER BELOW THIS LINE/, "");
  } catch (e) {
    console.error(
      `Could not read the answer to "${fullPath}". Please check for Syntax errors.`
    );
    console.error(e);
  }
};

export { getAnswer };
