import {NgModule} from '@angular/core';

// 表单 双向数据绑定必须要引用这2个模块
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 要使用 *ngIf *ngFor 这种Angular的内置指令 必须要引用这个模块
import {CommonModule} from '@angular/common';

// http请求模块 和配置http请求拦截器
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// 自定义http拦截的服务
import {InterceptorService} from './services/interceptor.service';

// 自定义pipe
import {StatePipe} from './pipes/state.pipe';

// cookie service
import {CookieService} from 'ngx-cookie-service';

// 多语言转换
import {I18nPipe} from './pipes/i18n.pipe';

// 多语言
import {TranslateModule, TranslateService} from '@ngx-translate/core';

// enums
import {CookieEnum} from './enums/cookie.enum';

// Angular Material 模块库
import {
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatTableModule,
  MatListModule,
  MatMenuModule,
  MatLineModule,
  MatDatepickerModule,
  MatOptionModule,
  MatRadioModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  MatSnackBarModule,
  MatRippleModule,
  MatDividerModule,
  MatSortModule,
} from '@angular/material';

// 顶部组件
import {BaseHeaderComponent} from './components/headers/base-header/base-header.component';
import {ContentHeaderComponent} from './components/headers/content-header/content-header.component';

// 表格组件
import {BaseTableComponent} from './components/tables/base-table/base-table.component';
import {BaseTableServiceComponent} from './components/tables/base-table-service/base-table-service.component';

// 表格的列组件
import {TableActionColumnComponent} from './components/table-columns/table-action-column/table-action-column.component';
import {TableImgColumnComponent} from './components/table-columns/table-img-column/table-img-column.component';
import {TableSingleImgColumnComponent} from './components/table-columns/table-single-img-column/table-single-img-column.component';

// 按钮组件
import {BaseButtonGroupComponent} from './components/buttons/base-button-group/base-button-group.component';
import {IconButtonGroupComponent} from './components/buttons/icon-button-group/icon-button-group.component';

// 卡片组件
import {BaseCardComponent} from './components/cards/base-card/base-card.component';
import {HintCardComponent} from './components/cards/hint-card/hint-card.component';
import {MainCardComponent} from './components/cards/main-card/main-card.component';
import {TableCardComponent} from './components/cards/table-card/table-card.component';

// 表单组件
import {BaseFormComponent} from './components/forms/base-form/base-form.component';
import {TabFormComponent} from './components/forms/tab-form/tab-form.component';
import {BaseFilterComponent} from './components/filter/base-filter/base-filter.component';
import {CommonSearchBoxComponent} from './components/filter/common-search-box/common-search-box.component';
import {CommonSelectBoxComponent} from './components/filter/common-select-box/common-select-box.component';

// 侧边栏组件
import {BaseSidenavComponent} from './components/sidenav/base-sidenav/base-sidenav.component';
import {TabSidenavComponent} from './components/sidenav/tab-sidenav/tab-sidenav.component';
import {BaseFooterComponent} from './components/footers/base-footer/base-footer.component';
import {BaseTabTableComponent} from './components/tables/base-tab-table/base-tab-table.component';

@NgModule({
  declarations: [
    I18nPipe,
    StatePipe,
    BaseButtonGroupComponent,
    IconButtonGroupComponent,
    BaseHeaderComponent,
    ContentHeaderComponent,
    BaseCardComponent,
    HintCardComponent,
    MainCardComponent,
    TableCardComponent,
    BaseTableComponent,
    TableImgColumnComponent,
    TableSingleImgColumnComponent,
    TableActionColumnComponent,
    BaseFormComponent,
    BaseSidenavComponent,
    TabSidenavComponent,
    BaseFilterComponent,
    BaseTableServiceComponent,
    BaseFooterComponent,
    BaseTabTableComponent,
    TabFormComponent,
    CommonSearchBoxComponent,
    CommonSelectBoxComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatLineModule,
    MatDatepickerModule,
    MatOptionModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDividerModule,
    MatSortModule,
  ],
  providers: [
    CookieService,
    StatePipe,
    I18nPipe,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatLineModule,
    MatDatepickerModule,
    MatOptionModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDividerModule,
    MatSortModule,
    BaseButtonGroupComponent,
    IconButtonGroupComponent,
    BaseHeaderComponent,
    ContentHeaderComponent,
    BaseCardComponent,
    HintCardComponent,
    MainCardComponent,
    TableCardComponent,
    BaseTableComponent,
    TableImgColumnComponent,
    TableSingleImgColumnComponent,
    TableActionColumnComponent,
    BaseFormComponent,
    BaseSidenavComponent,
    TabSidenavComponent,
    BaseFilterComponent,
    BaseTableServiceComponent,
    BaseFooterComponent,
    BaseTabTableComponent,
    CommonSearchBoxComponent,
    CommonSelectBoxComponent,
    TabFormComponent
  ],
})
export class X3BaseCoreModule {

  constructor(private translate: TranslateService, private i18n: I18nPipe, private cookie: CookieService) {

    const languages: string[] = ['zh-cn', 'en-us'];

    // 为当前的项目指定要使用哪几种多语言
    this.translate.addLangs(languages);

    // 获取当前浏览器的语言
    const browserLang: string = this.translate.getBrowserLang();

    // 如果当前的浏览器获取到的语言 与这里要使用的语言不一致 则通过这里来转化
    const lang = this.i18n.transform(browserLang);

    // 获取本地保存的语言
    const currentLang = this.cookie.get(CookieEnum.currentLang.toString());

    // 把获取到的语言 设置为当前系统的语言
    this.translate.use(currentLang || lang);

  }

}
