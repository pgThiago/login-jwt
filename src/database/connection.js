import mongoose from 'mongoose'

const URL = process.env.DATABASE_CONNECTION_URL

mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to mongoDB!')
})
.catch((error) => {
    console.log(`Hmmmmmmm something is wrong: ${error}`)
})
