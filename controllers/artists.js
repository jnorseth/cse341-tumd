const { create } = require('underscore');
const artist = require('../models/artist');

module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {
        // #swagger.path = '/artists'
        // #swagger.tags = ['Artist']
        // #swagger.description = 'Get list of all artists'
        const artists = await dependencies.models.artist.find();

        const artists_all = [];

        for (const artist in artists) {
            artists_all.push({
              first_name: artists[artist].first_name,
              last_name: artists[artist].last_name,
              gender: artists[artist].gender,
              date_of_birth: artists[artist].date_of_birth
            });
        }
         
        response.status(200).send(artists_all);
    });

    router.get('/:artist_id', async (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'path',
                description: 'The ID of the artist to retrieve',
                required: true,
                type: 'string'
            }
            #swagger.path = '/artists/{artist_id}'
            #swagger.tags = ['Artist']
            #swagger.description = 'Get a specific artist by artist_id'
        */
            const artist_find = await dependencies.models.artist.findOne({_id: request.params.artist_id});
            console.log(artist_find);
            if (!artist_find){
                response.status(404).send('Artist not found.');
            }
            const artist_single = {};

            artist_single.first_name = artist_find.first_name;
            artist_single.last_name = artist_find.last_name;
            artist_single.gender = artist_find.gender;
            artist_single.date_of_birth = artist_find.date_of_birth;

            response.status(200).send(artist_single);
        
    });
    // The second callback over here makes authentication required for this endpoint
    router.post('/', dependencies.requires_authentication(), async (request, response) => {
        /*
            #swagger.path = '/artists'
            #swagger.tags = ['Artist']
            #swagger.description = 'Insert new artist to the collection'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["first_name", "last_name", "date_of_birth"],
                    "properties": {
                        "first_name": {
                            "type": "string",
                            "example": "Some name..."
                        },
                        "last_name": {
                            "type": "string",
                            "example": "Some last name..."
                        },
                        "date_of_birth": {
                            "type": "date",
                            "example": "Some birth date..."
                        },
                        "gender": {
                            "type": "string",
                            "example": "Some gender..."
                        }
                        
                    }
                }
            }
        */
           const new_artist = await dependencies.models.artist.create(request.body); 

            if(!new_artist){
                response.status(500).send('An error occured.');
                
            } else {
                response.status(201).send('Successfully added artist. ID: ' + new_artist._id);
            }
        });

    router.put('/:artist_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'path',
                description: 'The ID of the artist to update',
                required: true,
                type: 'string'
            }
            #swagger.path = '/artists/{artist_id}'
            #swagger.tags = ['Artist']
            #swagger.description = 'Updates a artist specified by artist_id'
            #swagger.parameters['obj'] = {
                in: 'body',
                '@schema': {
                    "required": ["first_name", "last_name", "date_of_birth"],
                    "properties": {
                        "first_name": {
                            "type": "string",
                            "example": "Some first name..."
                        },
                        "last_name": {
                            "type": "string",
                            "example": "Some last name..."
                        },
                        "date_of_birth": {
                            "type": "date",
                            "example": "Some birth date..."
                        }
                        "gender": {
                            "type": "string",
                            "example": "Some  gender..."
                        },
                        
                    }
                }
            }
        */
        const update_artist = await dependencies.models.artist.updateOne({_id: request.params.artist_id}, request.body);

        if (!update_artist){
            response.status(500).send('An error occurred. Update unsuccessful.');
        } else {
            response.status(200).send('Successfully updated artist with ID: ' + request.params.artist_id);
        }
    });

    router.delete('/:artist_id', dependencies.requires_authentication(), async (request, response, next) => {
        /*
            #swagger.parameters['artist_id'] = {
                in: 'path',
                description: 'The ID of the artist to delete',
                required: true,
                type: 'string'
            }
            #swagger.path = '/artists/{artist_id}'
            #swagger.tags = ['Artist']
            #swagger.description = 'Deletes a artist specified by artist_id'
        */
        const delete_artist = await dependencies.models.artist.deleteOne({_id: request.params.artist_id});
        if (!delete_artist) {
            response.status(500).send('An error occurred during deletion.');
        } else {
            response.status(200).send('Successfully deleted artist with ID: ' + request.params.artist_id);
        }
    });

    return router;
};