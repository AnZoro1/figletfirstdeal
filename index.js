var figlet = require('figlet')

figlet('intocode', function (err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})
