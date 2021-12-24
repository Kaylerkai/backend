import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { RegistionPointRepository } from '@modules/Registration/typeorm/repositories/RegistrationRepository';

interface IRequest {
  id: number;
  name: string;
  email: string;
  curso: string;
}

export default class UpdateServie {
  public async execute({
    id,
    name,
    email,
    curso,
  }: IRequest): Promise<RegistionPoint> {
    const registrationRepository = getCustomRepository(
      RegistionPointRepository,
    );

    const point = await registrationRepository.findOne({ where: { id: id } });

    if (!point) {
      throw new AppError('Ponto de registro não encontrado');
    }

    point.name = name;
    point.email = email;
    point.curso = curso;

    return await registrationRepository.save(point);
  }
}
