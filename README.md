## 数据库界面类项目

- port 3000
- 输入页面 input
- 字段页面 input/field/:tablename (其中tablename为field文件夹下文件名，无.js)

## view 访问方式

IP:port/input/view/:viewname ```例如 IP:port/input/view/edit```
view文件放在 ```//view/``` 文件夹下 ``命名 edit.jade ```

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

			option:{
				1:'人物',
				2:'民族符号',
				3:'几何图形',
				4:'地方标志',
				5:'动植物',
				6:'其他'
			}
		},
		require:{
			name:"LeiXing",
			value:'1'
		},
	},
```
forend 代表前端数据格式

1. type包含 select selectmult[ornull] input[ornull] CCS boolean 一共7种类型
2. require 字段出现条件，本例中为 LeiXing字段选1时出现主题字段
3. option 在 select selectmult 出现，为选项，所有出现 “其他”、“有” 的都为可填写字段
4. CCS为特殊颜色类型，分三个字段，见doc文档
5. selectmultornull 类型为先进行有无选择，选择有之后展开选项，与selectmult相同。inputornull类型同理
6. boolean类型的，选择 有（返回 true），无（返回false）

## 访问方式接口

##### 注
其中 :tablename 可以是 以下5项中的一个，其中村镇（cunzhen）为父表，其他表字段hasone村镇。

```
biaozhixinggouzhuwu
cunzhen
jiedaokongjian      
kaichangkongjian     
tingyuanyujianzhu
```

- 测试（获得OK)

```input/field/:tablename```

-  获得某表格全部数据的部分要显示的属性。 get -> json

```input/get/:tablename```

- 获得某表格字段数据 get -> json

```input/field/:tablename```

- 建立一个新数据 get -> 建立完毕自动跳转到???(没看你写的逻辑，这个再定)

```input/new/:tablename```

- 更新一条数据 post -> 'save OK!'

```input/update/:tablename```
post数据id字段为存储依据

- 获得一条数据 get -> json

```input/get/:tablename/:id```
