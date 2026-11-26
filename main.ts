// Front page for 26 November 2026, built for the make.fun news-image contest.
// This repository holds the finished picture as entry.png. All this script
// does is place a copy of that picture where the grader looks for it.
// No network, no drawing, no dependencies beyond the Node standard library.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const picture = new URL("./entry.png", import.meta.url);
const bytes = readFileSync(picture);

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.png"), bytes);
const written = readFileSync(join(targetDir, "entry.png"));
if (written.length !== bytes.length) throw new Error("entry.png did not copy completely");
