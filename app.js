const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
