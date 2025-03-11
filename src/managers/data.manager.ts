import { books } from "../mock-data/books";
import { ApiResponse } from "../types/interfaces/api-response.interface";
import { Pagination } from "../types/interfaces/requests/pagination/pagination-dto";
import { DashboardResponseDto } from "../types/interfaces/responses/dashboard-response-dto";
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

    getDashboardData = async(): Promise<ApiResponse<DashboardResponseDto>> => {
        const dupBooks = books;
        const totalBooks = books.length; 
        const topOldest = [...dupBooks].sort((a:any,b:any)=> a.yearOfPublish - b.yearOfPublish).slice(0,10); 
        const topNewest = [...dupBooks].sort((a:any,b:any)=> b.yearOfPublish - a.yearOfPublish).slice(0,10); 

        const data: DashboardResponseDto = {
            totalBooks:totalBooks, 
            topOldestBooks:topOldest,
            topNewestBooks: topNewest
        }
        return { success:true, msg:"Success", data:data};
    }
}

export const dataManager = new DataManager(); 