const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  console.log('Root route hit!')
  res.send('Hello from root!')
})

app.get('/fileupload', (req, res) => {
  console.log('Fileupload route hit!')
  res.send('Hello from fileupload!')
})

app.listen(port, () => {
  console.log(`Test server running on port ${port}`)
})