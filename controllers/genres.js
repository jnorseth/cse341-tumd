module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        // #swagger.path = '/genres'
        // #swagger.tags = ['Genre']
        // #swagger.description = 'Get list of all genres'

        response.status(200).send('You are at /genres');
    });

    router.get('/:genre_id', (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'query',
                description: 'The ID of the genre to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/genres/:genre_id'
            #swagger.tags = ['Genre']
            #swagger.description = 'Get a specific genre by genre_id'
        */

        response.status(200).send('You are at /genres/:genre_id (GET)');
    });

    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.path = '/genres'
            #swagger.tags = ['Genre']
            #swagger.description = 'Insert new genre to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["name"],
                    "properties": {
                        "name": {
                            "type": "string",
                            "example": "Some title..."
                        }
                    } 
                }
            }
        */

        response.status(200).send('You are at /genres (POST)');
    });

    router.put('/:genre_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'query',
                description: 'The ID of the genre to update',
                required: true,
                type: 'number'
            }
            #swagger.path = '/genres'
            #swagger.tags = ['Genre']
            #swagger.description = 'Updates a genre specified by genre_id'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["name"],
                    "properties": {
                        "name": {
                            "type": "string",
                            "example": "Some title..."
                        }
                    }
                }
            }
        */

        response.status(200).send('You are at /:genre_id (PUT)');
    });

    router.delete('/:genre_id', dependencies.requires_authentication(), (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'query',
                description: 'The ID of the genre to delete',
                required: true,
                type: 'number'
            }
            #swagger.path = '/genres/:genre_id'
            #swagger.tags = ['Genre']
            #swagger.description = 'Deletes a genre specified by genre_id'
        */

        response.status(200).send('You are at /genres/:genre_id (DELETE)');
    });

    return router;
};