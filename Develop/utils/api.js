const axios = require("axios");

const api = {
    async getUser(username, repository) {
        try {
            const { data } = await axios.get(
                `https://api.github.com/repos/${username}/${repository}`
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = api;