import fs from "fs";
import path from "path";

export function getUnits(): string[] {
  const dir = path.join(process.cwd(), "public", "units");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpg|svg)$/i.test(f))
    .sort();
}
