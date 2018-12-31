/**
 * Created by Administrator on 2018/12/28.
 */
import MSite from '../pages/MSite/MSite.vue'
import Cart from '../pages/Cart/Cart.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Recommend from '../pages/Recommend/Recommend.vue'


export default [
  
  {path: '/msite', component: MSite},
  {path: '/cart', component: Cart},
  {path: '/classify', component: Classify},
  {path: '/personal', component: Personal},
  {path: '/recommend', component: Recommend},
  {path: '/', redirect: '/msite'},

]
