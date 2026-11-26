// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Writes the Moon's one-line comeback to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In 1987 a boy in Dayton promised me he'd never lie again if his dog came home. The dog came home. The boy is a senator now.";

// Empty env var counts as unset, so the grader's default /output still wins.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
