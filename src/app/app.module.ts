import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { X3BaseCoreModule } from '../../projects/x3-base-core/src/lib/x3-base-core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonSearchBoxTestComponent } from './components/common-search-box-test/common-search-box-test.component';
import { TabSidenavTestComponent } from './components/tab-sidenav-test/tab-sidenav-test.component';
import { BaseHeaderTestComponent } from './components/base-header-test/base-header-test.component';
import { MainComponent } from './components/main/main.component';
import { BaseFilterTestComponent } from './components/base-filter-test/base-filter-test.component';
import { CommonSelectBoxTestComponent } from './components/common-select-box-test/common-select-box-test.component';
import { TableCardTestComponent } from './components/table-card-test/table-card-test.component';
import { MainCardTestComponent } from './components/main-card-test/main-card-test.component';
import { BaseTabTableTestComponent } from './components/base-tab-table-test/base-tab-table-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonSearchBoxTestComponent,
    BaseHeaderTestComponent,
    MainComponent,
    TabSidenavTestComponent,
    BaseFilterTestComponent,
    CommonSelectBoxTestComponent,
    TableCardTestComponent,
    MainCardTestComponent,
    BaseTabTableTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    X3BaseCoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
