module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
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

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.path = '/songs'
            #swagger.tags = ['Song']
            #swagger.description = 'Insert new song to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["title"],
                    "properties": {
                        "title": {
                            "type": "string",
                            "example": "Some title..."
                        },
                        "release_year": {
                            "type": "string",
                            "example": "Some release year..."
                        },
                        "rating": {
                            "type": "number",
                            "example": "Some rating..."
                        },
                        "summary": {
                            "type": "string",
                            "example": "Some summary..."
                        },
                        "artists": {
                            "type": []
                        },
                        "genres": {
                            "type": []
                        },
                        "reviews": {
                            "type": []
                        }
                    } 
                }
            }
        */

        response.status(200).send('You are at /songs (POST)');
    });

    return router;
};