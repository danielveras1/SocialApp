
import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';
import UpdatePassWordService from '../services/UpdatePasswordService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = new ShowProfileService();
    const user_id = request.user.id;

    const user = await showProfile.execute({ user_id });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { password, old_password } = request.body;

    const updatePassWord = new UpdatePassWordService();

    const user = await updatePassWord.execute({
      user_id,
      password,
      old_password,
    });

    return response.json(user);
  }
}