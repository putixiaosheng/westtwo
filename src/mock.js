const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code : 200,
    msg : 'suc',
    data : null
}
Mock.mock('/captcha','get',() =>{
    Result.data ={
        token : Random.string(32),
        capimg : Random.dataImage('120x40','p7n50')
    }
    return Result
})
Mock.mock('/login','post',()=>{
    Result.code = 400
    Result.msg = "yanzhengmacuowu"
    return Result 
})
Mock.mock('/sys/userInfo', 'get', () => {

	Result.data = {
		id: "1",
		username: "test",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
	}

	return Result
})
Mock.mock('/logout', 'get', () => {
	return Result
})