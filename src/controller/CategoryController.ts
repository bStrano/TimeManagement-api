import Category from "../model/Category";
import {getRepository, Repository} from 'typeorm';
import Subcategory from "../model/Subcategory";

export default class CategoryController {
    private readonly _categoryRepository: Repository<Category>;
    private readonly _subCategoryRepository: Repository<Subcategory>;

    constructor() {
        this._categoryRepository = getRepository(Category);
        this._subCategoryRepository = getRepository(Subcategory);
    }

    async save(category: Category) {
        return await this._categoryRepository.save(category)
    }

    async findAll() {
        return await this._categoryRepository.find({relations: ["subcategories"]})
    }

    async saveSubcategory(subcategory: Subcategory) {
        return await this._subCategoryRepository.save(subcategory)
    }

    async findAllSubcategory() {
        return await this._subCategoryRepository.find();
    }


}