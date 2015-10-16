## 数据库界面类项目

- port 3000
- 输入页面 input
- 字段页面 input/field/:tablename (其中tablename为field文件夹下文件名，无.js)


## 类型解析

input/field/:tablename

每项返回如下类型的数组，（结构中存在递归分类）！！

``` js

    {
		namezh:"主题",
		backend:{
			type:"text",
		},
		forend:{
			type:'select',
			require:{
				name:"LeiXing",
				value:'1'
			},
			option:{
				1:'人物',
				2:'民族符号',
				3:'几何图形',
				4:'地方标志',
				5:'动植物',
				6:'其他'
			}
		},
	},
```
forend 代表前端数据格式

1. type包含select selectmult input CCS
2. require 字段出现条件，本例中为 LeiXing字段选1时出现主题字段
3. option 在 select selectmult 出现，为选项，所有出现 其他 的都为可填写字段
4. CCS为特殊颜色类型，分三个字段，见doc文档
