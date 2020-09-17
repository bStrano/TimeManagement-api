import express from 'express';
import {createConnection} from "typeorm";
import app from './app';


const port = process.env.PORT || 3007
const ip = '0.0.0.0';


app.get('/stralom/timemanagement/', (req, res) => {
    return res.send("Hello World")
})


app.listen(port, ip, async () => {
    console.log(`Servidor rodando em ... ${ip}:${port}`)
    startupDatabase();
});

async function startupDatabase() {
    try {
        const connection = await createConnection();
        console.log("Banco Oracle iniciado com sucesso! ")
    } catch (e) {
        console.error("Falha ao iniciar banco Oracle", e);
    }
}


export default app;