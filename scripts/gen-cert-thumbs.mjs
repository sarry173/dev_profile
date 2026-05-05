import { execSync } from "child_process";
import { resolve } from "path";
import { mkdirSync, existsSync } from "fs";

const publicDir = resolve("public");
const thumbDir = resolve("public/cert-thumbnails");
mkdirSync(thumbDir, { recursive: true });

const certs = [
  "cert-coursera-generative-ai",
  "cert-coursera-agile-pm",
  "cert-coursera-design-thinking",
  "cert-linkedin-blockchain-developer",
  "cert-linkedin-solidity",
  "cert-linkedin-flutter-ui",
  "cert-linkedin-kotlin-android",
  "cert-linkedin-data-analytics",
];

for (const name of certs) {
  const src = resolve(publicDir, `${name}.pdf`);
  const dest = resolve(thumbDir, `${name}.jpg`);

  if (!existsSync(src)) {
    console.error(`✗  ${name}: PDF not found`);
    continue;
  }

  try {
    execSync(`sips -s format jpeg -Z 1200 "${src}" --out "${dest}"`, { stdio: "pipe" });
    console.log(`✓  ${name}`);
  } catch (err) {
    console.error(`✗  ${name}: ${err.message}`);
  }
}

console.log("\nAll done — thumbnails saved to public/cert-thumbnails/");
