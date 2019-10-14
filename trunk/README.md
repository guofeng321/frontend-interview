# 黄油相机前端面试

## Case1：下面代码输出什么

NOTE: 这里的输出指的是 console.log 输出

<pre>
new Promise((resolve) => setTimeout(() => resolve(1), 0)).then(console.log);

setTimeout(() => console.log(2), 0);

Promise.resolve(3).then(console.log);
</pre>


## Case2: 异步任务队列

定义 `type Task = () => Promise<any>` （即 Task 是一个 **类型**，是一个返回值是 Promise 的函数类型）  

假设有一个数组 tasks: Task[]（每一项都是一个 Task 类型的数组）

实现一个方法 `function execute(tasks: Task[]): Promise<any[]>`，该方法将 tasks 内的任务 **依次** 执行，并返回一个结果为数组的 Promise ，该数组包含任务执行结果（以执行顺序排序）

>要求：  
>忽略异常任务，并在结果数组中用 null 占位 

>限制：  
>不添加任何依赖，仅使用 Promise，不使用 Generator 或 async

## Case3：数组展平

实现一个函数 `function flat(arr: any[], depth: number): any[]`，这个函数实现 Array.prototype.flat 的功能，flat 函数没用过可以查。

>限制：
>不添加任何依赖，不使用现有实现
