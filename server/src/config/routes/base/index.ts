import express = require('express');

import HeroRoutes = require('../HeroRoutes');
import QuestionRoutes = require('../QuestionRoutes');

var app = express();

class BaseRoutes {

    get routes() {
        app.use("/", new HeroRoutes().routes);
        app.use("/", new QuestionRoutes().routes);
        return app;
    }
}
export = BaseRoutes;