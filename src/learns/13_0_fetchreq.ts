import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get('https://example.com/data')
.then(response =>{
    console.log(response.data);
}

)

const fetchData = async () =>{
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        const data: Todo = await response.json()
        

    } catch (error:any) {
        // console/log(error.message);
       
    }
}