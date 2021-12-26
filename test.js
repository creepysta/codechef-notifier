function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function retry(fn, retries) {
  await sleep(2000);
  if(await fn() !== 0)
    return 0;
  if(retries-1 === 0) return -1;
  return retry(fn, retries-1);
}
async function doCalls() {
  console.log("Wait for 2 secs");
  await sleep(2000);
  console.log("After 2 secs");
  return Math.random() > 0.5 ? 1 : 0
}

retry(doCalls, 2)
  .then( x => {
    console.log("GOT: " + x);
  })
  .catch( err => {
    console.log("Failed: " + err);
  });

