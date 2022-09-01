import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from 'src/shared/http/middlewares/isAuthenticates';
import ProfileController from '../controlers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(isAuthenticated);

profileRouter.get('/', profileController.show);

profileRouter.put('/', celebrate({[Segments.BODY]: {
  old_password: Joi.string(),
  password: Joi.string(),
  password_confirmation: Joi.string()
  .valid(Joi.ref('password'))
  .when('password', { is: Joi.exist(), then: Joi.required(),}),
  },
}),
  profileController.update,
);

export default profileRouter;