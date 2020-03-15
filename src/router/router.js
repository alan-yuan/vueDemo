// import home from '../page/home/home'
// import login from '../page/login/login'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
const userDetail = r => require.ensure([], () => r(require('../page/user/children/detail')), 'userDetail')


// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
export default [
    //默认页面
    {
        path: '*',
        redirect: '/home'
    },
    //首页
    {
        path: '/home',
        component: home,
        meta: {
            keepAlive: true
        }

    },
    //登录页面
    {
        path: '/login',
        component: login
    },
    //会员页面
    {
        path: '/user/',
        component: user,
        children: [
            {
                path: '/',
                component: userDetail
            }
        ]
    }

]