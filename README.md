 ## npm install webpack@5.5.1 webpack-cli@4.2.0 -D
    ** webpack-cli@4.2.0有点问题： 报错UnhandledPromiseRejectionWarning: TypeError: Class constructor ServeCommand cannot be invoked without 'new'

    ** webpack-cli@4.7.2版本可以

 ## npm install webpack-dev-server@3.11.0 -D

 <!-- 
    1. webpack-dev-server 打包生成的文件bundle.js默认放在内存中，是虚拟的，看不见的，但是可以访问到（在根目录的bundle.js）
    2. html-webpack-plugin 在生成的index.html页面底部,自动引入了打包好的bundle.js
  -->

 ## npm install html-webpack-plugin@4.5.0 -D

 ## npm i style-loader@2.0.0 css-loader@5.0.1 -D

 ## npm i less-loader@7.1.0 less@3.12.2 -D

<!-- 处理文件引入路径（如图片路径） -->
<!-- 只有<=limit大小的图片，才会被转为base64格式图片,小图片适合转为base64格式 -->
 ## npm i url-loader@4.1.1 file-loader@6.2.0 -D  

<!-- 处理--较高级--的js语法 -->
 ## npm i babel-loader@8.2.1 @babel/core@7.12.3 @babel/plugin-proposal-class-properties@7.12.1 -D

 <!-- 自动清理dist目录下的旧文件 -->
 ## npm i clean-webpack-plugin@3.0.0 -D