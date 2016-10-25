# 菜单导航试用

通过配置Navigation.json数据来配置菜单导航。
```
[
  {
    "key": "1",
    "text": "Home",
    "icon": "appstore",
    "href": "/"
  },
  {
    "key": "2",
    "text": "UI Features",
    "icon": "appstore",
    "children":
    [
      {
        "key": "3",
        "text": "3",
        "children": [
          {
          "key": "4",
          "text": "4"
          }
        ]
      }, {
        "key": "5",
        "text": "5",
        "href": "/page1"
        }
     ]
  }
]

```
## 属性说明
1. key属性为编码作用，key值不能重复  （必填）
2. text属性为菜单中显示的文字 （必填）
3. icon属性为菜单文字前的icon图标 （选填）
4. href属性为菜单所指向的页面路径 （必填）
5. children属性为菜单的子菜单  （选填）
