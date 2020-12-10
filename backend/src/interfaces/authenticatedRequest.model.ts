import { Request } from 'express';
import { User } from './user.model';

interface AuthenticatedRequest extends Request {
    token: string,
    user: User,
    file: any,
    files: any,
}

export {AuthenticatedRequest};