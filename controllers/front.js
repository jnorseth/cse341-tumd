module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/home', async (request, response) => {
        // #swagger.path = '/front/home'
        // #swagger.tags = ['Front']
        // #swagger.description = 'Home page of the front endpoint'

        const songs = await dependencies.models.song.find();

        for(const song of songs) {
            const artist = await dependencies.models.artist.findOne({_id: song.artist});

            song.artist = `${artist.first_name} ${artist.last_name}`;
        }

        const artists = await dependencies.models.artist.find();

        const users = await dependencies.models.user.find();

        const users_processed = [];
    
        for(const user in users) {
            users_processed.push({
                id: users[user]._id,
                nickname: users[user].nickname,
                picture: users[user].picture,
                role: users[user].role
            });
        }

        const reviews = await dependencies.models.review.find();

        for(const review of reviews) {
            const user = await dependencies.models.user.findOne({_id: review.user});

            review.user = user.nickname;
        }

        response.render('home', {
            songs: songs,
            artists: artists,
            users: users_processed,
            reviews: reviews
        });
    });

    return router;
};