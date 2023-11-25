import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080';

const deleteData = async (id: number): AxiosPromise<any> => {
    const response = axios.delete(`${API_URL}/food/${id}`);
    return response;
  };
  
export function useFoodDeleteData(){

    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}