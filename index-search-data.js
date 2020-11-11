const mdToEs = require("md-to-es")

async function main() {
  try {
    const res = mdToEs({
      src: `${process.cwd()}/content`,
      elasticsearch_url: `https://1a7h6vQjW:4d691399-955d-470c-a914-be6edf0095c6@appbase-demo-ansible-abxiydt-es.searchbase.io`,
      elasticsearch_index: `md-to-es-demo`,
    })
  } catch (err) {
    throw err
  }
}

main()
