import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const translate = require('translate-google');


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const toBeTranslated = req.body.text;
    const translation = await translate(toBeTranslated, {from: "auto", to: "pt"});
    
    res.json(translation);
}
