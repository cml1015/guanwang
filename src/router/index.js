import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "../components/homepage/Homepage"
import Democenter from "../components/Democenter/Democenter"
import Productpresentation from "../components/Productpresentation/Productpresentation"
import Industryapplication from "../components/Industryapplication/Industryapplication"
import Government from "../components/Government/Government"
import Aboutus from "../components/Aboutus/Aboutus"
import Joinus from "../components/Joinus/Joinus"
import Introduction from "../components/Aboutus/Introduction"
import Dynamic from "../components/Aboutus/Dynamic"
import Mediareport from "../components/Aboutus/Mediareport"
import Prolist from "../components/Productpresentation/Prolist"
import Demodetail from "../components/Democenter/Demodetail"
import Dynamicdetail from "../components/Aboutus/Dynamicdetail"
import Fullpage from "../components/homepage/fullpage"
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: 'Fullpage'
    },
    {
      path: '/Fullpage',
      component: Fullpage
    },
    {
      path: '/Democenter',
      component: Democenter
    },
    {
      path: '/Demodetail/:id',
      name:"Demodetail",
      component: Demodetail
    },
    {
      path:'/Productpresentation',
      component:Productpresentation
    },
    {
      path:"/Prolist/:id",
      name:"Prolist",
      component:Prolist
    },
    {
      path:"/Industryapplication",
      component:Industryapplication
    },
    {
      path:"/Government",
      component:Government
    },
    {
      path:"/Aboutus",
      component:Aboutus,
      redirect: '/Aboutus/Introduction',
      children:[
        {path:"/Aboutus/Introduction",component:Introduction},
        {path:"/Aboutus/Dynamic",component:Dynamic},
        {path:"/Aboutus/Mediareport",component:Mediareport}]
    },
    {
      path: '/Dynamicdetail/:id',
      name:"Dynamicdetail",
      component: Dynamicdetail
    },
    {
      path:"/Joinus",
      component:Joinus
    }
  ]
})
