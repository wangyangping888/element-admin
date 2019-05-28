const nameArr = ['小明','小花','小红','小黑','小白','小绿'];
const addressArr = ['浦东','徐家汇','闵行','杨浦','普陀','松江'];
const phoneArr= ['13911111111','13888888888','15677777777','13911112111','1388858888','15677755555'];
const dateArr = ['2019-05-28','2019-02-28','2019-03-28','2019-03-28','2019-07-28'];

function getRandom(){
	
	let name =  nameArr[ Math.floor(Math.random()*nameArr.length)];
	let address =  addressArr[ Math.floor(Math.random()*addressArr.length)];
	let phone =  phoneArr[ Math.floor(Math.random()*phoneArr.length)];
	let date =  dateArr[ Math.floor(Math.random()*dateArr.length)];
	
	return {
		name,
		address,
		phone,
		date
	}
	
}

// 随机产生n条数据
export default function getStudent(size=0,page){
	
	let arr = [];
	for(let i=0;i<size;i++){
		arr.push(getRandom());
	}
	return arr;
}



