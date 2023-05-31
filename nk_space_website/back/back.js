import express, { json } from 'express';
import fs from "fs"
const app = express();
app.use(express.json())
const PORT = 8000;

app.get('/Destination', async(req, res) => {
    const data  = await fs.promises.readFile("./back/destinations.json", {encoding : "utf-8"})
    res.json(data)
});

app.get('/Crew', async(req, res) => {
    const data  = await fs.promises.readFile("./back/crew.json", {encoding : "utf-8"})
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}\n`)
}); 