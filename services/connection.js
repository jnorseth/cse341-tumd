module.exports = async (mongoose) => {
    await mongoose.connect(process.env.MONGO_URI);
};