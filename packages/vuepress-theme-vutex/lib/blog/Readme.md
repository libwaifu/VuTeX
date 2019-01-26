# Markdown 字段

type: `nullable str`

post 表示文章可以发布, 不写则跳过.

drafts 会在本地调试的时候渲染, 也就是 yarn start 时

非 post 也不会渲染, 但是可以作为其他布局的模板

---

tag: `nullable array<str>`

表示标签, 不写则为 untag

---

tagIndexPageUrl: `str` default `"/tag/"`

表示 tag 页的 base 路由

tag 挂载于其字段名的子路由

可能需要 tagConfig 文件, 处理多语言或者名称不对应的情况.

也可以安放 layout switch

---

category: `nullable array<str>`

分类, 不写则为 Other

---

categoryIndexPageUrl: `str` default `"/category/"`

需要 categoryConfig 文件, 用于注册 category tree, yaml 形式

未注册的 category 会被挂到 Other 下


---

series: `nullable array<str>`

系列文章, 系列文章是一个有序列表.

---

seriesIndexPageUrl: `str` default `"/series/"`

需要 seriesIndexPageUrl 文件, 用于注册 series posts 

未注册的 series 字段会被无视

---

date: `date`

创建日期

遍历文章时可尝试检测是否写了 date 字段, 没写根据创建日期加一个

~~也可以自动加一个 update 字段, 如果用户想的话~~

带 title 才需要这个, 不然文件可能是 markdown source 不用渲染.

---

author: `auto bool`

copyright: `auto bool`

可用来控制时候显示底部版权或者作者

share: `nullable array<str>`

comment: `auto bool`

用来显示分享链接, 显示

需要一个什么 config 用来控制不写时的默认选项


---

generated: `bool` default `false`

标记文章是否是合成的, 没有额外效果