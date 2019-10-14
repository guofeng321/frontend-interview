/**
 * 数组展平
 * */

export default function flat(arr/* 类型为 any[] */, depth/* 类型为 number */) {
	var newArr = [];
	depth = depth || 1;
	arr.map((item) => {
		if(item instanceof Array){
			if(depth <= 1){
				newArr = newArr.concat(item);
			}else{
				newArr = newArr.concat(flat(item, depth));
			}
		} else {
			newArr.push(item);
		}
	})
	return newArr;
}