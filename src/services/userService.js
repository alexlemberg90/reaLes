import {axiosService} from "./axiosServise";
import {urls} from "./urls";

const userService = {
    getAll: ()=> axiosService.get(urls.users),
    getOne: (id)=> axiosService.get(`${urls.users}/${id}`)
};

export {
    userService
}