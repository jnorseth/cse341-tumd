const axios = require('axios');

test('check home page response (i.e. /)', async () => {
    expect(
        (await axios('http://localhost:3000/')).data
    ).toBe(
        'You are at /'
    );
});

test('check single user api endpoint (/users/6347102ab16a3ca89f638858)', async () => {
    expect(JSON.stringify
        ((await axios('http://localhost:3000/users/6347102ab16a3ca89f638858')).data)
    ).toBe(
        `{"id":"6347102ab16a3ca89f638858","nickname":"amo21004","picture":"amo21004","role":"Administrator"}`
    );
});