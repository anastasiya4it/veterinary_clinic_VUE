import router from "@/router/router";
import axios from "axios";

export const catBreeds = {
state:()=>({
  cats: [],  //all cats
    isLoading: false,  //Loader
        statusResponse:"",//response from Api
        statusResponseImg:"",//response from Api image
        idPetImages:[],
        urlImages:[],
        oneIdImage:'',
}),

getters:{
    searchTitleInSelect(state) {
            return [...state.cats]
            .filter((item) => item.id
            .includes(state.searchTitle.trim())
              );
    },
    completeListIdImages(state) {
      return [...state.cats].map((item) =>
        (item.reference_image_id)?item?.reference_image_id:null
      )
    },
    // listUrl(state){
    //   return [...state.idPetImages].map((item) => {
    //     if (item) {
    //       state.setOneIdImage(item);
    //       actions.fetchCatImages();
    //     }
    //   });
    // }

    
  },

mutations:{
    setCats(state,cats){
        state.cats=cats;
    },
    setIsLoading(state,bool){
        state.isLoading=bool;
    },
       setStatusResponse(state,statusResponse){
      state.statusResponse=statusResponse;
    },
    setStatusResponseImg(state,statusResponseImg){
      state.statusResponseImg=statusResponseImg;
    },
    setIdPetImages(state, idPetImages){
      state.idPetImages=idPetImages;
    },
    setUrlImages(state,urlImages){
      state.urlImages=urlImages;
    },
    setOneIdImage(state, oneIdImage){
      state.oneIdImage=oneIdImage;
    },
     
},
actions:{
      async fetchCat({state,commit,getters}) {
        try {
          
          commit('setIsLoading',true) ;
          const response = await axios.get(
`https://api.thecatapi.com/v1/breeds/`
          );
          
          commit('setCats',response.data);
          // console.log(state.cats);
          commit('setStatusResponse',response.status);

          commit('setIdPetImages',getters.completeListIdImages);

          commit('setUrlImages',[ ]);
          [...state.idPetImages].map(async (item) => {
                if (item) {
                  try {
                  commit('setIsLoading',true) ;
                  commit('setOneIdImage',item);
                  let idUrl=state.oneIdImage;
                  
                  const response = await axios.get(`https://api.thecatapi.com/v1/images/${state.oneIdImage}`);
              
                  commit('setUrlImages',[...state.urlImages,({idUrl:idUrl,url:response.data.url})]);
                  commit('setStatusResponseImg', response.status);
                                }
                                 catch (err) {
                        commit('setStatusResponse',err.request.status);
                  console.log(err.request.status);
                  
                } 
                finally {
                    commit('setIsLoading',false) ;
                    
                    
                       }
                }
              });   
             
         
          } catch (err) {
                commit('setStatusResponse',err.request.status);
          console.log(err.request.status);
          
        } finally {
            commit('setIsLoading',false) ;
            
            
               }
      },
     
},
namespaced:true
} 