import { Response } from "express";

export default class ResponseCall {
    static success(res: Response, data: any, status: number = 200) {
        return res.status(status).json({
            status: "success",
            response: {
                data,
            },
        });
    }

    static fail(res: Response, error: any, status: number = 400) {
        res.status(status).json({
            status: "fail",
            error,
        });
    }

    static error(res: Response, error: any, status: number = 500) {
        return res.status(status).json({
            status: "error",
            error,
        });
    }
}
