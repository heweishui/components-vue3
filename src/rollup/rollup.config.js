import { defineConfig } from 'rollup';
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: Object.fromEntries(
    glob.sync('src/**/*.ts').map(file => [
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url))
    ])
  ),
  output: [{// 输出两份文件，这一份用于上传到npm
    format: 'es',
    dir: 'lib'
  }, {// 用于根项目测试
    format: 'es',
    dir: '../plugins'
  }],
  plugins: [
    typescript(),
    vuePlugin(),
    postcss()
  ]
})
