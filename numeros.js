const peso05 = 1.0
const peso22 = Number('2.0')

console.log(peso05,peso22)
console.log(Number.isInteger(peso05))
console.log(Number.isInteger(peso22))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso05 + avaliacao2 * peso22
const media = total / (peso05 + peso22)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)