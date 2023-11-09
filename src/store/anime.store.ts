// import { GetAnimes } from './../types/image.types';
// import { get_animes } from './../service/anime.service';
// import {defineStore} from "pinia"

// export const useAnimeStore = defineStore('animes', {
//     state:()=>({
//         animes:[] as GetAnimes[],
//         anime_list:[] as GetAnimes[]
//     }),
//     actions:{
//         OnGetAnimes(q:string){
//             get_animes(q)
//             .then(({data}) =>{
//                 if(data.ok){
//                     this.animes = data.anime
//                 }
//             })
//         }
//     }
// })