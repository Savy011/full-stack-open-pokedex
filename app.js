const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 3000')
})
