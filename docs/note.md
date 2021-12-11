# electron

## process - 进程
1. main - 主进程
2. renderer - 渲染进程

### main process
- 可以使用和系统对接的 electron API - 创建菜单、上传文件等
- 创建 渲染进程
- 全面支持 nodejs
- 只有一个 作为整个程序的入口点

### renderer process
- 可以有多个，每个对应一个窗口
- 每个都是一个单独的进程
- 全面支持 nodejs 和 DOM API
- 可以使用一部分 electron API