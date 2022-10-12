module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/artists'
        // #swagger.tags = ['Artist']
        // #swagger.description = 'Get list of all artists'

        response.status(200).send('You are at /artists');
    });

    router.get('/:artist_id', (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'query',
                description: 'The ID of the artist to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/artists/:artist_id'
            #swagger.tags = ['artist']
            #swagger.description = 'Get a specific artist by artist_id'
        */

        response.status(200).send('You are at /artists/:artist_id');
    });

    return router;
};