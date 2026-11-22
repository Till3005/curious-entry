import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The house numbers on our street skip from 44 to 50. Nobody remembers why. Yesterday I found a photograph of the missing lot: one chair, two teacups, grass through the porch boards. On the back, in pencil: 'We will be back by the frost.' It has been forty-one frosts.\n";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
if ([...entry.trimEnd()].length > 280) {
  throw new Error(`entry.txt too long: ${[...entry.trimEnd()].length} code points`);
}
writeFileSync(join(dir, "entry.txt"), entry);
