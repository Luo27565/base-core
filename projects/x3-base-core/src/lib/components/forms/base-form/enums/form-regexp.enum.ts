// 表单验证正则枚举
export enum FormRegexp {
  // 手机号
  phone = '/^1[3456789]\\d{9}$/',
  // 邮箱
  email = '/^([a-zA-Z]|[0-9])(\\w|\\-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$/',
}
