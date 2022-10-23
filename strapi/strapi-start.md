# strapi start 执行流程

1. 执行 strapi start 命令
2. 调用 Strapi({ appDir, distDir }).start()
3. 初始化 server 对象
4. 调用 register() 方法，载入项目的资源（路由，控制器，服务等）
5. 执行资源的初始化 bootstrap() 方法
6. 调用 listen()，启动 http 服务
