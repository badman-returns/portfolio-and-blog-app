import { UploadFile } from "./file.model";

interface Blog {
    id: number,
    title: string,
    description: string,
    content: string,
    createdBy: string,
    createdOn: Date,
    updatedBy?: string,
    updatedOn?: Date,
    file?: Array<UploadFile>
    imagePath?: string
}

export {
    Blog,
}