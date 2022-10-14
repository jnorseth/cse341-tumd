module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/home', async (req, res) => {
        // #swagger.path = '/front/home'
        // #swagger.tags = ['Front']
        // #swagger.description = 'Home page of the front endpoint'

        const songs = await dependencies.models.song.find();
    
        for(const song in songs) {
            for(const _artist in songs[song].artists) {
                const artist_id = songs[0].artists[_artist];
    
                const artist = await dependencies.models.artist.findOne({id: artist_id});
    
                songs[0].artists[_artist].first_name = artist.first_name;
    
                songs[0].artists[_artist].last_name = artist.last_name;
            }
        }
    
        res.render('home', {
            songs: songs
        });
    });

    return router;
};