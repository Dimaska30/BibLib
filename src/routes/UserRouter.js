const Router = require('koa-router');
const UserController = require('../controllers/UserController.js');
const passport = require('../auth')

const UserRouter = new Router({ prefix: '/user' });

UserRouter
  .post('/',async (ctx,next) => {
    await passport.authenticate('local-reg', async(err, user) => {
      let newUser=await UserController.create(user);
        ctx.logIn(newUser, async (err) => {
          
          /* eslint-disable no-console */
          console.log("id "+newUser.id)
          /* eslint-disable no-console */
          await err ? ctx.body = err : ctx.body={id:newUser};
        })
        await next();
    })(ctx)
  })
  //.get('/', UserController.fetchAll)
  .get('/:id', UserController.fetchOne)
  //.put('/:id', UserController.update)
  //.delete('/:id', UserController.remove);

module.exports= UserRouter;