import { Response } from 'express';
import { AuthenticatedRequest, ResponseObject, Job } from '../../../interfaces';
import { JobDB } from '../../../models/jobs';

class AdminJobController {
    constructor() {

    }

    public static getAllJobs = async (req: AuthenticatedRequest, res: Response) => {
        let response: ResponseObject<Job | Job[]>;
        try {
            const allJobs = await JobDB.getJobs();
            response = {
                ResponseData: allJobs,
                ResponseMessage: 'Jobs fetched',
            }
        } catch (error) {
            return res.status(500).end();
        }
        return res.send(response);
    }

    public static insertJob = async (req: AuthenticatedRequest, res: Response) => {
        const jobTitle = req.body.title;
        const jobSkill = req.body.skill;
        const responsibility = req.body.responsibility;
        const duration = req.body.duration;
        const salary = req.body.salary;
        const perks = req.body.perks;
        const createdBy = req.body.created || req.user.id.toString();
        let insertedID: string;
        let response: ResponseObject<any>;
        try {
            insertedID = await JobDB.insertJob(jobTitle, jobSkill, responsibility, createdBy, duration, salary, perks)
            response = {
                ResponseData: insertedID,
                ResponseMessage: 'Job inserted successfully'
            }
        } catch (error) {
            return res.status(500).end();
        }
        return res.send(response);
    }
}

const InsertJob = AdminJobController.insertJob;
const GetAllJobs = AdminJobController.getAllJobs;

export {
    InsertJob,
    GetAllJobs,
}