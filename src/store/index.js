import { createStore } from 'vuex'
import {catBreeds} from '@/store/catBreeds'
export default createStore({
  modules:{
    cat:catBreeds,
}, 
})