const Express = require('express')
const app = Express()
const {home} = require('./Router')
const cors = require('cors')
const PORT = process.env.PORT || 5000
app.use(cors())
app.use('/content', home)


app.get('/', (req, res) => {
    res.json({
        error: 'User not Authorized'
    })
})


app.listen(PORT)