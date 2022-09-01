import { Router } from 'express';
import isAuthenticated from 'src/shared/http/middlewares/isAuthenticates';
import ProfileController from '../controlers/ProfileController';

const meRouter = Router();
const meController = new ProfileController();

meRouter.use(isAuthenticated);

meRouter.get('/', meController.show);

export default meRouter;