const axios = require("axios");

const api = {
    async getUser(username) {
        try {
            const { data } = await axios.get(
                `https://api.github.com/users/${username}/events/public`
            );
            return data
        } catch (err) {
            console.log(err);
        }
    },
};


module.exports = api;