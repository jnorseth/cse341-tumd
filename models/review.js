module.exports = (dependencies) => {
    const review = new dependencies.mongoose.Schema({
        body: String,
        rating: Number,
        user: dependencies.mongoose.Schema.ObjectId
    });

    dependencies.mongoose.model('Review', review);
};