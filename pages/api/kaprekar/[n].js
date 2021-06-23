const kaprekar = num => {
  const min = num.toString().padStart(4, '0').split('').sort().join('')
  const max = [...min].reverse().join('')
  return +max - min
}

export default (req, res) => {
  const { n } = req.query
  if (+n < 0 || 4 < n.length) {
    res.send({ 'kaprekar': '0 < N < 10,000' })
  }
  let returnSequence = [+n]
  let current = +n
  while (current !== 6174) {
    current = kaprekar(current)
    returnSequence = [...returnSequence, current]
  }
  res.status(200).send(returnSequence)
}
