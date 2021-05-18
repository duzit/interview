## webpack构建流程
* https://mp.weixin.qq.com/s/PlqhRNZNIfBJHSVoVD3fHw

### 运行流程 
* 是一个串行的过程 工作流程就是将各个插件串联起来。运行过程中会广播事件，插件只需要监听它所
  关心的事件，就能加入这条webpack机制中，去改变webpack的运作，使得整个系统扩展性良好。

### 三大步骤
* 初始化流程：从配置文件和shell语句中读取并合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数。
* 编译构建流程：从 Entry 出发 针对每个Module串行去调用Loader去翻译文件内容 再找到该Module依赖的Module 递归进行编译处理
* 输出流程：对编译后的Module组合成Chunk 把Chunk转换成文件 输出到文件系统

