import express = require('express');

import HeroRoutes = require('../HeroRoutes');
import QuestionRoutes = require('../QuestionRoutes');
import UserRoutes = require('../UserRoutes');

var app = express();

class BaseRoutes {

    get routes() {
        app.use("/", new HeroRoutes().routes);
        app.use("/", new QuestionRoutes().routes);
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;