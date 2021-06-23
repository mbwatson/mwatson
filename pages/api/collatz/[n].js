const f = n => (n % 2 === 0) ? (n / 2) : (n * 3 + 1)
const store = { 1: 0 }

const collatzNumber = n => {
  if (store.hasOwnProperty(n)) {
    return store[n]
  } else {
    store[n] = collatzNumber(f(n)) + 1
    return store[n]
  }
}

const collatzSequence = n => {
  const generator = collatzGenerator(parseInt(n))
  let returnSequence = [parseInt(n)]
  for (const value of generator) {
    returnSequence = [...returnSequence, value]
  }
  return returnSequence
}

const collatzGenerator = function*(n) {
  let current = n
  while (current !== 1)   {
    current = f(current)
    yield current
  }
  return
}

export default (req, res) => {
  const { n } = req.query
  const seq = collatzSequence(n)
  res.status(200).send(seq)
}
