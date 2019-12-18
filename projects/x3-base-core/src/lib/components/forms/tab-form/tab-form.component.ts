import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormFieldModel } from '../base-form/models/form-field.model';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormFieldEnum } from '../base-form/enums/form-field.enum';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormFieldInputModel } from '../base-form/models/form-field-input.model';
import { FormFieldTextareaModel } from '../base-form/models/form-field-textarea.model';
import { FormFieldRadioModel } from '../base-form/models/form-field-radio.model';
import { FormFieldSelectModel } from '../base-form/models/form-field-select.model';
import { FormFieldCheckboxModel } from '../base-form/models/form-field-checkbox.model';
import { UploadImageService } from '../../../services/upload-image.service';

export class TabFormComponentInputModel {
  // 构建表单
  public fields: FormFieldModel<any>[] = [];

  // 构造函数
  constructor(fields: FormFieldModel<any>[]) {
    this.fields = fields;
  }
}

@Component({
  selector: 'core-tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.scss']
})
export class TabFormComponent implements OnInit {
  @Input()
  public input: TabFormComponentInputModel;

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

  // 复选框
  public checkboxComponent: FormFieldEnum = FormFieldEnum.checkbox;

  // 文本域
  public textareaComponent: FormFieldEnum = FormFieldEnum.textarea;

  // 上传图片
  public imageFileComponent: FormFieldEnum = FormFieldEnum.imageFile;

  private imageFile: any;

  public imgUrl: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer, private imageService: UploadImageService) {}

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

  // 构建表单组件
  buildFormField(item: FormFieldModel<any>) {
    switch (item.component) {
      case FormFieldEnum.input:
        return this.buildInputComponent(item);
      case FormFieldEnum.select:
        return this.buildSelectComponent(item);
      case FormFieldEnum.radio:
        return this.buildRadioComponent(item);
      case FormFieldEnum.checkbox:
        return this.buildCheckboxComponent(item);
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
    // 正则表达式验证器
    if (data.regexp !== null) {
      if (typeof data.regexp === 'string') {
        // tslint:disable-next-line: no-eval
        validators.push(Validators.pattern(eval(data.regexp)));
      } else {
        validators.push(Validators.pattern(data.regexp));
      }
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

  // 构建复选框组件
  buildCheckboxComponent(item: FormFieldModel<any>) {
    const data: FormFieldCheckboxModel = item.data;
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

  // 表单验证错误提示
  getErrorMessage(field: any) {
    const form = this.forms.controls[field.id];
    return form.hasError('required') ? 'CORE_B0001' : form.hasError('pattern') ? field.data.errorMessage : '';
  }

  getImgUrl(field: any) {
    if (this.forms.controls[field.id].value === null) {
      return '';
    } else {
      return this.imgUrl;
    }
  }

  // 上传本地图片
  fileChange($event: any, model: any, url: any) {
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

    this.imageService.getBaseUrl().subscribe(baseUrl => {
      if (JSON.stringify(url) === '{}' || url === null || url.indexOf(baseUrl.toString())) {
        this.imageService.uploadImg(this.imageFile, model.data.fileType).subscribe(res => {
          this.forms.controls[model.id].setValue(`${baseUrl}${res}`);
        });
      } else {
        this.imageService.updateImg(this.imageFile, model.data.fileType, url).subscribe();
      }
    });
  }
}
