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
            #swagger.tags = ['Artist']
            #swagger.description = 'Get a specific artist by artist_id'
        */

        response.status(200).send('You are at /artists/:artist_id (GET)');
    });

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.path = '/artists'
            #swagger.tags = ['Artist']
            #swagger.description = 'Insert new artist to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["first_name", "last_name", "gender"],
                    "properties": {
                        "first_name": {
                            "type": "string",
                            "example": "Some title..."
                        },
                        "last_name": {
                            "type": "string",
                            "example": "Some release year..."
                        },
                        "gender": {
                            "type": "string",
                            "example": "Some rating..."
                        },
                        "date_of_birth": {
                            "type": "date",
                            "example": "Some summary..."
                        }
                    }
                }
            }
        */

        response.status(200).send('You are at /artists (POST)');
    });

    router.put('/:artist_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'query',
                description: 'The ID of the artist to update',
                required: true,
                type: 'number'
            }
            #swagger.path = '/artists'
            #swagger.tags = ['Artist']
            #swagger.description = 'Updates a artist specified by artist_id'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["first_name", "last_name", "gender"],
                    "properties": {
                        "first_name": {
                            "type": "string",
                            "example": "Some title..."
                        },
                        "last_name": {
                            "type": "string",
                            "example": "Some release year..."
                        },
                        "gender": {
                            "type": "string",
                            "example": "Some rating..."
                        },
                        "date_of_birth": {
                            "type": "date",
                            "example": "Some summary..."
                        }
                    }
                }
            }
        */

        response.status(200).send('You are at /:artist_id (PUT)');
    });

    router.delete('/:artist_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'query',
                description: 'The ID of the artist to delete',
                required: true,
                type: 'number'
            }
            #swagger.path = '/artists/:artist_id'
            #swagger.tags = ['Artist']
            #swagger.description = 'Deletes a artist specified by artist_id'
        */

        response.status(200).send('You are at /artists/:artist_id (DELETE)');
    });

    return router;
};