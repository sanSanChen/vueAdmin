import Mock from 'mockjs';
//此处只为利用mock获取模拟数据
const LoginUsers = [
  {
    id:1,
    username: 'admin',
    password: '123456',
    avatar: 'https://avatars2.githubusercontent.com/u/17826380?v=4&s=40',
    name: '陈某人'
  }
];

const Users = [];
//获取模拟数据
for (let i = 0; i < 150; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
console.log(Users)
export { LoginUsers, Users };
