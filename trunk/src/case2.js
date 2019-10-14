/**
 * 异步任务队列
 * */

export default function (tasks /* 每一项的类型为 () => Promise<any> */) {
	var p = [];
	tasks.map((item) => {
		item
			.then((res) => {p.push(res)})
			.catch((err) => {p.push(null)});
	})
	return p;
}