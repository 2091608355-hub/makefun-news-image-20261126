// News-image entry for make.fun (news-image-20261126), Node 22, standard library only.
// The finished front page ships in this repository as entry.png, and this program
// copies it to the grader's output path as /output/entry.png. The image sums up
// the world's news of Thursday 26 November 2026: Kim Jong Un calls for wider
// tactical nuclear weapons deployment, the US proposes tariffs on 14 trading
// partners, Shenzhou-24 carries the first foreign astronaut to China's Tiangong
// station, a Chinese H-6 bomber flies near the Philippine coast, North Korea
// expels Switzerland's envoy, and more.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
if (statSync(src).size !== statSync(join(outDir, 'entry.png')).size) {
  throw new Error('entry.png copy size mismatch');
}
