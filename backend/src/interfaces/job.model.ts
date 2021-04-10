interface Job {
    id: number | string,
    title: string,
    skill: string,
    responsibility: string,
    duration?: number | string,
    salary?: number | string,
    perks?: string,
    createdBy: string,
    createdOn: Date,
    updatedBy?: string,
    updatedOn?: Date,
}

export {
    Job,
}