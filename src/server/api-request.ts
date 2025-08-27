const API_URL= "http://localhost:3333/";

export interface QueryParams{
    [key: string]: string | number | boolean; 
}

export interface RequestOptions{
    page?: number,
    _limit?: number,
    rating_like?: string,
}

export const DefaultRequestOptions:RequestOptions={
    page:1,
    _limit: 10,
}

export async function  ApiRequest(endPoint: string, query: QueryParams={}, options: RequestOptions={}){
    try{

        const response = await fetch(`${API_URL}/${endPoint}`);
        const data =  response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}