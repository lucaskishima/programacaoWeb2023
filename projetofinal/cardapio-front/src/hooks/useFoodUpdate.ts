import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const updateData = async (params: [number, FoodData]): AxiosPromise<any> => {
    const [id, updatedData] = params;
    const response = await axios.put(`${API_URL}/food/${id}`, updatedData);
    return response.data;
  };
  

export function useFoodUpdateData(){

    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: updateData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}