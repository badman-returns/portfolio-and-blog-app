interface Blog {
    id: number,
    title: string,
    description: string,
    content: string,
    createdBy: string,
    createdOn: Date,
    updatedBy?: string,
    updatedOn?: Date,
}

export {
    Blog,
}