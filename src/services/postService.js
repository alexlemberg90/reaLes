import {axiosService} from "./axiosServise";
import {urls} from "./urls";

const postService = {
    getAll: ()=> axiosService.get(urls.posts),
    getOne: (id)=> axiosService.get(`${urls.posts}/${id}`)
};

export {
    postService
}