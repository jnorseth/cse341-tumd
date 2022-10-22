module.exports = (dependencies) => {
    const review = new dependencies.mongoose.Schema({
        body: String,
        rating: Number,
        user: dependencies.mongoose.Schema.ObjectId|String,
        song: dependencies.mongoose.Schema.ObjectId|String
    });

    dependencies.mongoose.model('Review', review);
};