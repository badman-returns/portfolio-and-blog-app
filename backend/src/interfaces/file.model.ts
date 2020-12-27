interface UploadFile {
    id?: number;
    referenceId: string | number ;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}

export {
    UploadFile,
}