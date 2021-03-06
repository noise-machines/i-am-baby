import names from './data/names'
import musicTerms from './data/music-terms'
let lowerCaseMusicTerms = musicTerms.map(term => term.toLowerCase())

function processName (name) {
  const lowerName = name.toLowerCase()
  const inFlowerWords = lowerCaseMusicTerms.indexOf(lowerName) > -1
  if (inFlowerWords) {
    console.log(name)
  }
}

async function main () {
  for (const name of names) {
    processName(name)
  }
}

main()
