import { books } from "../mock-data/books";
import { ApiResponse } from "../types/interfaces/api-response.interface";
import { Pagination } from "../types/interfaces/requests/pagination/pagination-dto";
import { DataTableResponseDto } from "../types/interfaces/responses/data-table-response-dto";

class DataManager{
    getTableData = async(pagination: Pagination): Promise<ApiResponse<DataTableResponseDto>> => {
        const pageNo = pagination.pageNo;
        const pageSize = pagination.pageSize;

        const start = (pageNo-1) * pageSize;
        const end = start + pageSize;

        const pages = Math.ceil(books.length / pageSize);
        const data = books.slice(start, end); 
        
        return { success:true, msg:"Success", data:{pages: pages, data:data}};
    }
}

export const dataManager = new DataManager(); 