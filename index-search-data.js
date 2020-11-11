const mdToEs = require("md-to-es")

async function main() {
  try {
    const res = mdToEs({
      src: `${process.cwd()}/content`,
      elasticsearch_url: `http://localhost:9200`,
      elasticsearch_index: `gatsby`,
    })
  } catch (err) {
    throw err
  }
}

main()
