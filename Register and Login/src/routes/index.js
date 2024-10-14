
const newsRouter = require ('./news');
const userRouter = require ('./User');

function route (app)  {
    app.use('/', newsRouter)
    app.use('/', userRouter)
   
}

module.exports = route;