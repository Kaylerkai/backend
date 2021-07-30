import { Router } from 'express';

import RegistionPointController from '../controllers/RegistrationPointControllers';

const routes = Router();

const registerController = new RegistionPointController();

routes.post('/', registerController.create);
routes.get('/', registerController.index);
routes.put('/:id', registerController.update);
routes.delete('/:id', registerController.delete);

export default routes;
