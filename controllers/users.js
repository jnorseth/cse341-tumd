module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', async (request, response, next) => {
        // #swagger.path = '/users'
    	// #swagger.tags = ['User']
        // #swagger.description = 'Get list of all users'

        const users = await dependencies.models.user.find();

        const users_list = [];

        for(const user of users) {
            users_list.push({
                'nickname': user.nickname,
                'picture': user.picture
            })
        }

        response.status(200).send(users_list);
    });

    router.get('/:user_id', (request, response, next) => {
        /*
            #swagger.parameters['user_id'] = {
                in: 'query',
                description: 'The ID of the user to retrieve',
                required: true,
                type: 'number'
            }
            #swagger.path = '/users/:user_id'
            #swagger.tags = ['user']
            #swagger.description = 'Get a specific user by user_id'
        */

        response.status(200).send('You are at /users/:user_id');
    });

    return router;
};