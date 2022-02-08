import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        Projeto: "API - Leitor de Boletos",
        status : "OK"
    });
});

export default router;

