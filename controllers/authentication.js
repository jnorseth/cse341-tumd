module.exports = function (dependencies) {
    return async function (request, response) {
        if(!request.oidc.user) {
            return response.status(400).send('Umm... Something went wrong.');
        }

        _user = await dependencies.models.user.findOne({"sub": request.oidc.user.sub});

        if(_user) {
            return response.status(200).send('Welcome back! Login successful');
        }

        const user = new dependencies.models.user();

        for(const field in request.oidc.user) {
            user[field] = request.oidc.user[field];
        }

        user.role = 'Administrator';

        user.save();

        return response.status(200).send('Login successful! User has been added to the database');
    };
};