import { Router } from 'express';
import usersRouter from 'src/modules/users/routes/users.routes';
import sessionsRouter from 'src/modules/users/routes/sessions.routes';
import meRouter from 'src/modules/users/routes/me.routes';
import change_password from 'src/modules/users/routes/change_password.routes'



const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/change_password', change_password);
routes.use('/me', meRouter);


export default routes;