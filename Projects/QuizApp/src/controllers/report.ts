import Report from "../models/report"
import { Request, Response, NextFunction } from "express";
import ProjectError from "../helper/error";

import { ReturnResponse } from "../utils/interfaces";


const getReport = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let report;

        if (!!req.params.reportId) {

            const reportId = req.params.reportId
            report = await Report.findById(reportId);

            if (!report) {
                const err = new ProjectError("Report Not Found!");
                err.statusCode = 404;
                throw err;
            }

            if (report.userId !== req.userId) {
                const err = new ProjectError("Not Authorized");
                err.statusCode = 405;
                throw err;
            }
        }
        else {
            report = await Report.find({ userId: req.userId });
        }

        const resp: ReturnResponse = { status: "success", message: "Report", data: report };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}

export { getReport };
