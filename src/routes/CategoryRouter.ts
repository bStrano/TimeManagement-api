import express from 'express';
import Category from "../model/Category";
import CategoryController from './../controller/CategoryController';
import Subcategory from "../model/Subcategory";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const categoryController = new CategoryController();
        let category = await categoryController.findAll()
        res.status(200).json(category);
    } catch (e) {
        console.error(e)
        res.status(500).end();
    }
});

router.post('/', async (req, res, next) => {
    const {name} = req.body;
    try {
        const categoryController = new CategoryController();
        let category = await categoryController.save(new Category(name, []))
        res.status(200).json(category);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});
11

router.post('/subcategory', async (req, res, next) => {
    const {name, categoryId} = req.body;
    try {
        const categoryController = new CategoryController();
        let subcategory = await categoryController.saveSubcategory(new Subcategory(name, categoryId))
        res.status(200).json(subcategory);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

router.get('/subcategory', async (req, res, next) => {
    const {name, categoryId} = req.body;
    try {
        const categoryController = new CategoryController();
        let subcategories = await categoryController.findAllSubcategory()
        res.status(200).json(subcategories);

    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

export default router;