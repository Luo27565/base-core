import { FormFieldUploadEnum } from '../enums/form-field-upload.enum';
export class FormFieldImageFileModel {
  // 是否为必填
  public required: boolean;

  // 为空时的提示文本
  public placeholder: string;

  // 上传按钮名
  public buttonName: string;

  // 限制大小
  public maxSize: number;

  // 图片高度
  public height: string;

  // 图片类型
  public fileType: FormFieldUploadEnum;

  // 构造函数
  constructor({ required = false, maxSize = 1, placeholder = null, buttonName = null, height = '64px', fileType = FormFieldUploadEnum.attachment }) {
    this.required = required;
    this.maxSize = maxSize;
    this.placeholder = placeholder;
    this.buttonName = buttonName;
    this.height = height;
    this.fileType = fileType;
  }
}
