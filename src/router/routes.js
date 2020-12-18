const Kindmap = () => import ('../views/Kindmap.vue')
const Copy = () => import ('../views/Copy.vue')
const User = () => import ('../views/user/User.vue')
const UserHome = () => import ('../views/user/UserHome.vue')
const UserPosts = () => import ('../views/user/UserPosts.vue')
const UserProfile = () => import ('../views/user/UserProfile.vue')

export default [
  {
    path: '/kindmap',
    component:Kindmap,
  },
  {
    path: '/copy',
    component:Copy,
  },
  {
    path: '/user/:id',
    component:User,
    children:[
      {
        path:'',
        component:UserHome
      },
      {
        path:'UserPosts',
        component:UserPosts
      },
      {
        path:'UserProfile',
        component:UserProfile
      }
    ]
  },
  {
    path: '*',
    redirect: '/kindmap',
  }
]