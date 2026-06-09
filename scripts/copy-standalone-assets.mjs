import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const standaloneDir = join(root, '.next', 'standalone');

if (!existsSync(standaloneDir)) {
  console.log('Standalone output not found; skipping asset copy.');
  process.exit(0);
}

const nextDir = join(standaloneDir, '.next');
mkdirSync(nextDir, { recursive: true });

const copies = [
  [join(root, '.next', 'static'), join(nextDir, 'static')],
  [join(root, 'public'), join(standaloneDir, 'public')],
];

for (const [source, destination] of copies) {
  if (existsSync(source)) {
    cpSync(source, destination, { recursive: true, force: true });
  }
}
