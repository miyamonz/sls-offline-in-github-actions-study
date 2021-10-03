#!/usr/bin/env zx

//utils
async function removeIfExists(path) {
  const exists = await fs.pathExists(path);
  if (exists) {
    return fs.remove(path);
  }
  return false;
}

async function startDynamodbLocal() {
  const serve = redirectBothToStdout($`npm run sls-dynamodb-start:test`);
  for await (let chunk of serve.stdout) {
    if (chunk.includes("Dynamodb Local Started")) break;
  }
}

async function start() {
  const slsOffline = $`npx serverless offline start`;
  for await (let chunk of slsOffline.stdout) {
    if (chunk.includes("server ready")) break;
  }
  try {
    await $`npm run test:integration`;
  } catch (e) {
    process.exit(1);
  } finally {
    await slsOffline.kill();
    console.log("stop sls offline");
  }
}

start();
