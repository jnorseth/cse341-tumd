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

        /*
        {
            "nickname": "amo21004",
            "name": "amo21004@byui.edu",
            "picture": "https://s.gravatar.com/avatar/52f0a12f9f7742636aa84fa2ce602608?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fam.png",
            "updated_at": "2022-10-08T15:10:00.294Z",
            "email": "amo21004@byui.edu",
            "email_verified": false,
            "sub": "auth0|634192c8a12752ff48fcff2b",
            "sid": "58uL3NbWWmb0cRjtFd8Srtl-yYRNThQY"
        }
        */
    };
};