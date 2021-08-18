import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpeficicationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpeficicationController }

