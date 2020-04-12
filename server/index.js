const express= require('express')
const app= express()
const path = require('path')

app.use(express.json())
const appPath = path.join(__dirname, '..', 'build')
app.use(express.static(appPath))

app.get('*', (req, res)=>{
	res.sendFile(path.resolve(appPath, 'index.html'))
})

app.listen(3000 || process.env.PORT, ()=>{
	console.log('server is running and listening to port :80')
})

