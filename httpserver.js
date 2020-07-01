var http = require('http');

module.exports = {
    init: function (app) {
        return http.createServer(app);
    }
};
