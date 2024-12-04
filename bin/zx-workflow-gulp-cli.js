#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// 构造 Gulp 命令及参数
const args = [
  'gulp',
  '--cwd', process.cwd(),
  '--gulpfile', path.resolve(__dirname, '../Gulpfile.js')
].concat(process.argv.slice(2)); // 添加用户传递的额外参数

// 启动子进程来运行 Gulp
const gulpProcess = spawn('npx', args, {
  stdio: 'inherit', // 继承父进程的标准输入输出流
});

// 监听子进程关闭事件，以便正确退出
gulpProcess.on('close', (code) => {
  process.exit(code);
});