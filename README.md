# SSE-Design
SSE 实验室通用组件库

1. 第一次需要先安装项目中的包依赖，执行 npm install
2. 启动项目执行 npm run start ,启动成功后，浏览器会自动打开 127.0.0.1:8080


## Ant Design 的问题
1. 不支持CSS Module，如果webpack中配置了css module，antd的相关样式就加载不出来


## TODO
###已完成
1. 页面结构基本确认
2. 现在可以访问 127.0.0.1:8080  以及 127.0.0.1:8080/#/page1
3. 修改导航菜单组件，实现通过配置json信息修改菜单

### 待完成
1. header组件的实现
2. react-router从hashHistory 换成 browserHistory
3. 继续完善目前的页面结构
