import { CodeRandom } from "@/lib/generateCode";
import EmailModels from "../models/email.models";
import { NextApiRequest, NextApiResponse } from "next";

export default class ApiSendImage {

    // send
    public sendImageController = async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            let postData = req.body.postData;
            try {
                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbwgpiLav-SfV7E-O-GhYq-DAGYdhWUP5XuMD-7rDLcv3wi97Nz8iUwhRW01pg0ZVidw/exec",
                    {
                        method: "POST",
                        body: JSON.stringify(postData),
                    }
                );
                const data = await response.json();
                res.status(200).json({ status: true, message: 'đã gửi email', data: data });
            } catch (error) {
                alert("Vui lòng thử lại");
            }
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json({ error: "Đã xảy ra lỗi khi gửi email" });
        }
    };
}
