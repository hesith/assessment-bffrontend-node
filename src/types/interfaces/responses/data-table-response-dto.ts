export interface DataTableRecord{
    id: number,
    bookName: string,
    author: string,
    country: string,
    yearOfPublish: number
}

export interface DataTableResponseDto{
    pages: number,
    data: DataTableRecord[]
}