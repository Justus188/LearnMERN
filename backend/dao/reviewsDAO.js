import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let reviews
export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")
        } catch (e) {
            console.error(`Unable to establish a connection handle in reviewsDAO: ${e}`)
        }
    }

    static async addReview(restaurantId, userName, userId, review, date) {
        try{
            const reviewDoc = {name: userName, user_id: userId,
                date: date, text: review, restaurant_id: ObjectId(restaurantId)}
            return await reviews.insertOne(reviewDoc)
        } catch(e) {
            console.error(`Unable to post review: ${e}`)
            return {error: e}
        }
    }

    static async updateReview(reviewId, userId, text, date){
        console.log("updateReview is called")
        try {
            const updateResponse = await reviews.updateOne(
                {user_id: userId, _id: ObjectId(reviewId)},
                {$set: {text: text, date:date}}
            )
            return updateResponse
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return {error: e}
        }
    }

    static async deleteReview(reviewId, userId){
        try{
            const deleteResponse = await reviews.deleteOne({_id: ObjectId(reviewId), user_id: userId})
        } catch(e) {
            console.error(`Unable to delete review: ${e}`)
            return {error: e}
        }
    }
}