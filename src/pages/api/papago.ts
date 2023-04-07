import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const client_id = process.env.NAVER_CLIENT_ID as string;
const client_secret= process.env.NAVER_CLIENT_SECRET as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    let query = req.body.text;
    let source = req.body.source;
    let target = req.body.target;
    
    const response = await axios.post(api_url, {
        'source':source, 'target':target, 'text':query}, {
        headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret},
    });

    res.json(response.data.message.result.translatedText);
}
