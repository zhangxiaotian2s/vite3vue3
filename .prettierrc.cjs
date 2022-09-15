// .prettierrc.js
module.exports = {
  printWidth: 150, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, // 字符串是否使用单引号，默认为 sfalse，使用双引号
  semi: false, // 行尾是否使用分号，默认为true
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
  arrowParens: 'always', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  proseWrap: 'preserve' // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
}
