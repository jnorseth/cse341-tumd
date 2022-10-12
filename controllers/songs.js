module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/all', (request, response, next) => {
        // #swagger.path = '/songs'
    	// #swagger.tags = ['Song']
        // #swagger.description = 'Get list of all songs'

        response.status(200).send('You are at /songs');
    });

    router.get('/:song_id', (request, response, next) => {
        /*
            #swagger.parameters['song_id'] = {
                in: 'query',
                description: 'The ID of the song to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/songs/:song_id'
            #swagger.tags = ['Song']
            #swagger.description = 'Get a specific song by song_id'
        */

        response.status(200).send('You are at /songs/:song_id');
    });

    return router;
};