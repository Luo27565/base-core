import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { TabSidenavComponentInputModel } from 'projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/tab-sidenav.component';
import { TabSidenavEnum } from 'projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/enums/tab-sidenav.enum';
import { FormFieldImageFileModel } from 'projects/x3-base-core/src/lib/components/forms/base-form/models/form-field-image-file.model';
import { FormFieldModel } from 'projects/x3-base-core/src/lib/components/forms/base-form/models/form-field.model';
import { FormFieldEnum } from 'projects/x3-base-core/src/lib/components/forms/base-form/enums/form-field.enum';
import { FormFieldInputModel } from 'projects/x3-base-core/src/lib/components/forms/base-form/models/form-field-input.model';
import { FormFieldTextareaModel } from 'projects/x3-base-core/src/lib/components/forms/base-form/models/form-field-textarea.model';
import { BaseButtonEnum } from 'projects/x3-base-core/src/lib/components/buttons/base-button-group/enums/base-button.enum';
import { TabSidenavComponent } from 'projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/tab-sidenav.component';
import { FormRegexp } from '../../../../projects/x3-base-core/src/lib/components/forms/base-form/enums/form-regexp.enum';
import { FormFieldUploadEnum } from 'projects/x3-base-core/src/public-api';

@Component({
  selector: 'app-tab-sidenav-test',
  templateUrl: './tab-sidenav-test.component.html',
  styleUrls: ['./tab-sidenav-test.component.scss']
})
export class TabSidenavTestComponent implements OnInit, AfterContentInit {
  @ViewChild('sidenav', { static: true }) sidenav: TabSidenavComponent;

  public tabSideNavModel: TabSidenavComponentInputModel = {
    width: '500px',
    data: [
      {
        id: '1001',
        name: '基本信息',
        component: TabSidenavEnum.tabForm,
        data: {
          fields: [
            new FormFieldModel<FormFieldImageFileModel>(
              'logoUrl',
              '图片',
              FormFieldEnum.imageFile,
              new FormFieldImageFileModel({ required: true, buttonName: '上传图片', maxSize: 2, fileType: FormFieldUploadEnum.brand })
            ),
            new FormFieldModel<FormFieldInputModel>(
              'companyId',
              '手机号',
              FormFieldEnum.input,
              new FormFieldInputModel({
                required: true,
                regexp: FormRegexp.phone,
                errorMessage: '手机号格式错误！',
                maxLength: 11,
                isShowLength: true,
                isShowValidator: true
              })
            ),
            new FormFieldModel<FormFieldInputModel>(
              'email',
              '邮箱',
              FormFieldEnum.input,
              new FormFieldInputModel({ required: true, regexp: FormRegexp.email, errorMessage: '邮箱格式错误！', isShowValidator: true })
            ),
            // new FormFieldModel<FormFieldInputModel>('companyUrl', 'USER_C0037', FormFieldEnum.input, new FormFieldInputModel({ required: false })),
            // new FormFieldModel<FormFieldRadioModel>(
            //   'companyState',
            //   'USER_C0039',
            //   FormFieldEnum.radio,
            //   new FormFieldRadioModel([{ key: '1', value: 'USER_C0041' }, { key: '2', value: 'USER_C0042' }], {
            //     required: true
            //   })
            // ),
            new FormFieldModel<FormFieldTextareaModel>(
              'companyRemark',
              '备注',
              FormFieldEnum.textarea,
              new FormFieldTextareaModel({ required: false })
            )
          ],
          data: {
            companyState: '0'
          }
        },
        buttons: [
          {
            id: '1001',
            name: '保存',
            theme: BaseButtonEnum.blue
          },
          {
            id: '1002',
            name: '重置'
          },
          {
            id: '1003',
            name: '关闭'
          }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.sidenav.open('1001');
    this.sidenav.resetFormData('1001');
  }

  onTabNavButtonPress(model: any) {
    switch (model.action.id) {
      case '1001':
        this.sidenav.setFormData('1001', { logoUrl: 'http://abc.com' });
        break;
      case '1002':
        this.sidenav.resetFormData('1001');
        break;
      default:
        console.log(this.sidenav.getFormData('1001').value);
        break;
    }
  }
}
