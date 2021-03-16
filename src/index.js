const Prismic = require("@prismicio/client");
const process = require("process");

async function allDocuments(client) {
  const { results_per_page, total_pages } = await client.query("", {
    pageSize: 100,
  });
  let documents = [];
  for (let page = 0; page < total_pages; page++) {
    const { results } = await client.query("", {
      page,
      pageSize: results_per_page,
    });
    documents.push(results);
  }
  return documents.flat();
}

const argv = process.argv.slice(2);

if (argv.length === 1) {
  const client = Prismic.client(argv[0]);
  allDocuments(client)
    .then((documents) => console.log(JSON.stringify(documents)))
    .catch(console.error);
} else {
  console.error("Please supply a prismic API endpoint as the only argument.");
}
