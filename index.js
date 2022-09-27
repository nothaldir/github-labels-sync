require("dotenv").config();
const githubLabelSync = require("github-label-sync");
const labels = require("./github-labels.json");
const { TOKEN, REPOSITORY } = process.env;
const isDryRun = process.argv.includes("--dry");

if (!TOKEN && !REPOSITORY) {
  console.error("Environment variables not found.");
  return;
}

githubLabelSync({
  accessToken: TOKEN,
  repo: REPOSITORY,
  labels,
  dryRun: isDryRun,
})
  .then((diff) => {
    console.log(diff);
  })
  .catch((err) => {
    console.error(err);
  });
