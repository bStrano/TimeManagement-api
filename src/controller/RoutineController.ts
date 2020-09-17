import {getRepository, Repository} from "typeorm";
import Routine from "../model/Routine";

export default class RoutineController {
    private readonly _routineRepository: Repository<Routine>;

    constructor() {
        this._routineRepository = getRepository(Routine);
    }


    async findAllRoutineTime() {
        return await this._routineRepository.find({relations: ["times"]})
    }
}