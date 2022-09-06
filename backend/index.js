import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, // URI
    {wtimeout: 2500})
    .catch(err => { // error handling
        console.error(err.stack) // console error
        process.exit(1)}) // exit "process"
    .then(async client => {
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => console.log(`Listening on port ${port}.`))})