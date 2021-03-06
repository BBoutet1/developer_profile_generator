const axios = require("axios");

//Github jSON API call
const api = {
    async getUser(username) {
        try {
            const { data } = await axios.get(
                `https://api.github.com/users/${username}`
            );
            return data
        } catch (err) {
            console.log(err);
        }
    },
};


module.exports = api;