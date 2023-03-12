import { createRouter, createWebHistory} from "vue-router"
import GetMostArticles from '@/pages/GetMostArticles.vue'
import Error from '@/pages/Error.vue'
import Home from '@/pages/Home.vue'
import Veterinarians from '@/pages/Veterinarians.vue'
import Prices from '@/pages/Prices.vue'
import Contacts from '@/pages/Contacts.vue'
import MoreAboutCats from '@/pages/MoreAboutCats.vue'
import MoreAboutDogs from '@/pages/MoreAboutDogs.vue'


const routes=[
  {name:'home',
  path:'/home',
  component: Home,
 },
  //   {name:'cat',
  //   path:'/cat',
  //   component: GetMostArticles,
  //  },
  
  //  {name:'veterinarians',
  //  path:'/veterinarians',
  //  component: Veterinarians,
  // },
//   {name:'prices',
//   path:'/prices',
//   component: Prices,
//  },
{name:'cat',
  path:'/cat',
  component: MoreAboutCats,
 },
 {name:'dog',
  path:'/dog',
  component: MoreAboutDogs,
 },
 {name:'contacts',
 path:'/contacts',
 component: Contacts,
},
   
      
      
  //  {name:'shared',
  //   path:'/shared',
  //   component: GetMostArticles,
  //   }, 
  //   {name:'Error',
  //   path: "/page-not-found",     
  //   component:Error 
  //   },
    {path: '/:pathMatch(.*)*',  
    redirect:{name:'Error'}
    },
];

// создаем объект маршрутизатора
const router = createRouter({
    // предоставляем реализацию истории посещений
    routes,
    history: createWebHistory(),
  });

export default router;