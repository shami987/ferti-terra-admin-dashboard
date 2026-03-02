const fs = require('fs');
const path = require('path');

const entryPath = path.join(process.cwd(), 'src', 'index.tsx');

if (!fs.existsSync(entryPath)) {
  console.error('[check-entry] Missing src/index.tsx');
  process.exit(1);
}

const content = fs.readFileSync(entryPath, 'utf8');

const requiredMarkers = [
  "import ReactDOM from 'react-dom/client';",
  "import App from './App';",
  'ReactDOM.createRoot(',
  '<App />',
];

const forbiddenMarkers = ['export interface ', 'export type '];

const missing = requiredMarkers.filter((marker) => !content.includes(marker));
const forbidden = forbiddenMarkers.filter((marker) => content.includes(marker));

if (missing.length > 0 || forbidden.length > 0) {
  console.error('[check-entry] src/index.tsx does not look like a React entrypoint.');
  if (missing.length > 0) {
    console.error(`[check-entry] Missing: ${missing.join(', ')}`);
  }
  if (forbidden.length > 0) {
    console.error(`[check-entry] Forbidden in entry file: ${forbidden.join(', ')}`);
  }
  process.exit(1);
}

console.log('[check-entry] OK');
