export enum TableColumnWidthEnum {

  // 编号列
  id = '100px',

  // 名称列
  name = '200px',

  // 图片列
  image = '60px',

  // 次序
  order = '60px',

  // 操作栏

  action_1 = '40px',  // 1个超链接，超链接都是两个字时。40px

  action_2 = '100px', // 2个超链接，超链接都是两个字，100px

  action_3 = '130px', // 3个超链接，超链接都是两个字，130px

  action_4 = '180px', // 3个超链接，1个链接都是两个字，两个链接是四个字的：180px

  action_5 = '210px', // 3个超链接，都是四个字的情况：210px

  action_6 = '150px', // 3个超链接，2个超链接是2个字，七个链接是四个字的情况：150px

  // 状态列
  status = '80px',

  // 手机号码列
  phone = '120px',

  // 邮箱列
  email = '200px',

  auto = 'auto',

}
