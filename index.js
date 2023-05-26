const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


const data = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon is running')
})
// app.get('/categories', (req, res) => {
//   res.send(categories)
// })
app.get('/chef', (req, res) => {
  res.send(data)
})

// load by ID
app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedData = data.find(n => n._id === id);
  res.send(selectedData);
})

// match with category ID in 2json
// app.get('/categories/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   if (id == 0) {
//     res.send(news)
//   }
//   else {
//     const categoriesNews = news.filter(n => parseInt(n.category_id) === id);
//     res.send(categoriesNews);
//   }

// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})