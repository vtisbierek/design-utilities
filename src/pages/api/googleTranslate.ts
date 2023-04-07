import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const translate = require('translate-google');


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const text = req.body.text;
    const target = req.body.target;

    const translation = await translate(text, {from: "auto", to: target});
    
    res.json(translation);
}
