import express from 'express';
import RoutineController from "../controller/RoutineController";

const router = express.Router();


router.get('/times', async (req, res, next) => {
    try {
        const routineController = new RoutineController();
        let subcategories = await routineController.findAllRoutineTime();
        res.status(200).json(subcategories);

    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

export default router;