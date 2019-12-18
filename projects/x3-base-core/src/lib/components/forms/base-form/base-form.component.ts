import { Component, EventEmitter, Input, OnInit, Output, AfterContentInit, DoCheck } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormFieldModel } from './models/form-field.model';
import { FormFieldEnum } from './enums/form-field.enum';
import { FormFieldInputModel } from './models/form-field-input.model';
import { FormFieldSelectModel } from './models/form-field-select.model';
import { FormFieldRadioModel } from './models/form-field-radio.model';
import { FormFieldTextareaModel } from './models/form-field-textarea.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

// 输入参数
export class BaseFormComponentInputModel {
  // 构建表单
  public fields: FormFieldModel<any>[] = [];

  // 构造函数
  constructor(fields: FormFieldModel<any>[]) {
    this.fields = fields;
  }
}

@Component({
  selector: 'core-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit, DoCheck {
  @Input()
  public input: BaseFormComponentInputModel;

  @Output()
  public output: EventEmitter<FormGroup> = new EventEmitter();

  // 构建表单
  public forms: FormGroup = new FormGroup({});

  // 表单输入框
  public inputComponent: FormFieldEnum = FormFieldEnum.input;

  // 下拉输入框
  public selectComponent: FormFieldEnum = FormFieldEnum.select;

  // 单选按钮
  public radioComponent: FormFieldEnum = FormFieldEnum.radio;

  // 文本域
  public textareaComponent: FormFieldEnum = FormFieldEnum.textarea;

  // 上传图片
  public imageFileComponent: FormFieldEnum = FormFieldEnum.imageFile;

  private imageFile: any;

  public imgUrl: SafeUrl = 'http://moui.zhxit.com/Project/chajian/images/%E6%96%B0%E5%BB%BA%E6%8F%92%E4%BB%B6/u6136.png';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const data = this.input.fields;
    let controls: { [key: string]: AbstractControl } = {};
    data.forEach((item, index) => {
      const control = this.buildFormField(item);
      controls = Object.assign(controls, control);
    });
    this.forms = new FormGroup(controls);
    this.output.emit(this.forms);
  }

  ngDoCheck() {
    if (this.imgUrl === null) {
      this.imgUrl = 'http://moui.zhxit.com/Project/chajian/images/%E6%96%B0%E5%BB%BA%E6%8F%92%E4%BB%B6/u6136.png';
    }
  }

  // 构建表单组件
  buildFormField(item: FormFieldModel<any>) {
    switch (item.component) {
      case FormFieldEnum.input:
        return this.buildInputComponent(item);
      case FormFieldEnum.select:
        return this.buildSelectComponent(item);
      case FormFieldEnum.radio:
        return this.buildRadioComponent(item);
      case FormFieldEnum.textarea:
        return this.buildTextareaComponent(item);
      case FormFieldEnum.imageFile:
        return this.buildImageFileComponent(item);
      default:
        break;
    }
  }

  // 构建输入框组件
  buildInputComponent(item: FormFieldModel<any>) {
    const data: FormFieldInputModel = item.data;
    const validators: ValidatorFn[] = [];
    if (data.required === true) {
      validators.push(Validators.required);
    }
    validators.push(Validators.maxLength(data.maxLength));
    const value = null;
    return { [item.id]: new FormControl(value, validators) };
  }

  // 构建下拉框组件
  buildSelectComponent(item: FormFieldModel<any>) {
    const data: FormFieldSelectModel = item.data;
    const validators: ValidatorFn[] = [];
    if (data.required === true) {
      validators.push(Validators.required);
    }
    const value = null;
    return { [item.id]: new FormControl(value, validators) };
  }

  // 构建单选按钮组件
  buildRadioComponent(item: FormFieldModel<any>) {
    const data: FormFieldRadioModel = item.data;
    const validators: ValidatorFn[] = [];
    if (data.required === true) {
      validators.push(Validators.required);
    }
    const value = null;
    return { [item.id]: new FormControl(value, validators) };
  }

  // 构建文本域组件
  buildTextareaComponent(item: FormFieldModel<any>) {
    const data: FormFieldTextareaModel = item.data;
    const validators: ValidatorFn[] = [];
    if (data.required === true) {
      validators.push(Validators.required);
    }
    const value = null;
    return { [item.id]: new FormControl(value, validators) };
  }

  // 构建上传图片组件
  buildImageFileComponent(item: FormFieldModel<any>) {
    const data: FormFieldInputModel = item.data;
    const validators: ValidatorFn[] = [];
    if (data.required === true) {
      validators.push(Validators.required);
    }
    const value = {};
    return { [item.id]: new FormControl(value, validators) };
  }

  getImgUrl(field) {
    if (typeof this.forms.controls[field.id].value === 'object') {
      return this.imgUrl;
    } else {
      return this.forms.controls[field.id].value;
    }
  }

  // 上传本地图片
  fileChange($event, model) {
    const file = $event.target.files[0];

    const fileTypes = ['jpg', 'png', 'jpeg', 'gif'];
    const fileExt = file.name.replace(/.+\./, '').toLowerCase();

    const fileSize = file.size;

    if (fileExt) {
      if (!fileTypes.includes(fileExt)) {
        alert('文件格式不符合要求！');
        return;
      }
      if (fileSize > model.data.maxSize * 1024 * 1024) {
        alert(`文件大小不能超过${model.data.maxSize}M！`);
        return;
      }
    }
    this.imageFile = file;
    const Url = window.URL.createObjectURL(this.imageFile);
    this.imgUrl = this.sanitizer.bypassSecurityTrustUrl(Url);

    this.forms.controls[model.id].setValue(this.imageFile);
  }
}
