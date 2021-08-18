import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
  name: string;
  description: string;
}

export class CreateSpecificationUseCase{
  constructor(private specificationsRepository: ISpecificationRepository){}

  execute({name, description}: IRequest):void{
    const AlredyExistsSpecification = this.specificationsRepository.findByname(name)
    if (AlredyExistsSpecification) {
      throw new Error("Specification Already Exists!")
    }

    this.specificationsRepository.create({name, description});
  }
}