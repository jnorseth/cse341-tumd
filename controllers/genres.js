module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {   
        // #swagger.path = '/genres'
        // #swagger.tags = ['Genre']
        // #swagger.description = 'Get list of all genres'
        const genres = await dependencies.models.genre.find();

        const genres_getall= [];
        
        try {
        for(const genre of genres) {
            genres_getall.push({
                name: genre.name
            });
        }
        response.status(200).send(genres_getall);
    }catch(err) {
        console.error(err);
    }
    });

    router.get('/:genre_id', (request, response, next) => {
        /*
            #swagger.parameters['genre_id'] = {
                in: 'path',
                description: 'The ID of the genre to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
            #swagger.tags = ['Genre']
            #swagger.description = 'Get a specific genre by genre_id'
        */
            const genre_single = dependencies.models.genre.findOne({_id: request.params.genre_id});
            if(!genre_single) {
                return response.status(404).send('Genre not found');
            }
            console.log(genre_single);
            const genres_processed = {};
            try {
            genres_processed.name = genre_single.name;
            
            response.status(200).send(genres_processed);
            }catch(err) {
                console.error(err);
            }
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
                in: 'path',
                description: 'The ID of the genre to update',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
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
                in: 'path',
                description: 'The ID of the genre to delete',
                required: true,
                type: 'string'
            }
            #swagger.path = '/genres/{genre_id}'
            #swagger.tags = ['Genre']
            #swagger.description = 'Deletes a genre specified by genre_id'
        */

        response.status(200).send('You are at /genres/:genre_id (DELETE)');
    });

    return router;
};