import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { RegistionPointRepository } from '@modules/Registration/typeorm/repositories/RegistrationRepository';

interface IRequest {
  name: string;
  email: string;
  curso: string;
}

export default class RegistrationPointService {
  public async execute({
    name,
    email,
    curso,
  }: IRequest): Promise<RegistionPoint> {
    const registionPointRepository = getCustomRepository(
      RegistionPointRepository,
    );

    const create = await registionPointRepository.create({
      name,
      email,
      curso,
    });

    const findPoins = await registionPointRepository.find();
    for (let i = 0; i < findPoins.length; i++) {
      if (findPoins[i].email) {
        throw new AppError(
          `Email já cadastrado`,
        );
      }
    }

    return await registionPointRepository.save(create);
  }
}
