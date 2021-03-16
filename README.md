# prismic-saviour

A quick solution to fetch all documents from a specific prismic.io endpoint (for backup purposes etc.).

## Usage
- install the dependencies: `yarn install`
- run: `node src/index.js https://YOURNAME.prismic.io/api`, which will return all documents as JSON to stdout. You can either write them to a file or pipe them into a program that uploads them into the cloud.
- if you want to download all images that are used in your documents, use the following line of bash/zsh:

  ```bash
  wget -i <(node src/index.js https://YOURNAME.prismic.io/api | grep -o 'https://images.prismic.io/[^?]*')
  ```
