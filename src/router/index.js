const Login=resolve=>require.ensure([],()=>resolve(require('../components/Login.vue')),'Login');

const NotFound=resolve=>require.ensure([],()=>resolve(require('../components/404.vue')),'NotFound');

const Home=resolve=>require.ensure([],()=>resolve(require('../components/Home.vue')),'Home');

const Main=resolve=>require.ensure([],()=>resolve(require('../components/Main.vue')),'Main');

//导航一

const Table=resolve=>require.ensure([],()=>resolve(require('../components/nav1/Table.vue')),'Table');

const Form=resolve=>require.ensure([],()=>resolve(require('../components/nav1/Form.vue')),'Form');

const user=resolve=>require.ensure([],()=>resolve(require('../components/nav1/user.vue')),'user');

//导航二

const VuexTest=resolve=>require.ensure([],()=>resolve(require('../components/nav2/VuexTest.vue')),'VuexTest');

const Input=resolve=>require.ensure([],()=>resolve(require('../components/nav2/Input.vue')),'Input');

const Radio=resolve=>require.ensure([],()=>resolve(require('../components/nav2/Radio.vue')),'Radio');

//导航三

const Page6=resolve=>require.ensure([],()=>resolve(require('../components/nav3/Page6.vue')),'Page6');

const echarts=resolve=>require.ensure([],()=>resolve(require('../components/charts/echarts.vue')),'echarts');
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'ElementUi',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/VuexTest', component: VuexTest, name: 'VuexTest' },
            { path: '/Input', component: Input, name: 'Input' },
            { path: '/Radio', component: Radio, name: 'Radio' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航三',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '页面6' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
