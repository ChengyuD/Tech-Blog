const { User } = require('../models');

const userData = [
    {
        username: "harry_porter",
        twitter: "hporter",
        github: "hporter",
        email: "hporter@test.com",
        password: "passhp123"
    },
    {
        username: "john-wick",
        twitter: "jwick",
        github: "jwick",
        email: "jwick@test.com",
        password: "passjw123"
    },
    {
        username: "micky-mouse",
        twitter: "mmouse",
        github: "mmouse",
        email: "mmouse@test.com",
        password: "passmm123"
    },
    {
        username: "ne-za",
        twitter: "nza",
        github: "nza",
        email: "nza@test.com",
        password: "passnz123"
    },
    {
        username: "jack-sparrow",
        twitter: "jsparrow",
        github: "jsparrow",
        email: "jsparrow@test.com",
        password: "passjs123"
    },
    {
        username: "hua-mulan",
        twitter: "hmulan",
        github: "hmulan",
        email: "hmulan@test.com",
        password: "passhm123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;