import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {BaseHeaderTestComponent} from './components/base-header-test/base-header-test.component';
import {CommonSearchBoxTestComponent} from './components/common-search-box-test/common-search-box-test.component';
import {CommonSelectBoxTestComponent} from './components/common-select-box-test/common-select-box-test.component';
import {BaseFilterTestComponent} from './components/base-filter-test/base-filter-test.component';
import {TableCardTestComponent} from './components/table-card-test/table-card-test.component';
import {TabSidenavTestComponent} from './components/tab-sidenav-test/tab-sidenav-test.component';
import {MainCardTestComponent} from './components/main-card-test/main-card-test.component';
import {BaseTabTableTestComponent} from './components/base-tab-table-test/base-tab-table-test.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'header',
    component: BaseHeaderTestComponent,
  },
  {
    path: 'search',
    component: CommonSearchBoxTestComponent,
  },
  {
    path: 'select',
    component: CommonSelectBoxTestComponent
  },
  {
    path: 'filter',
    component: BaseFilterTestComponent,
  },
  {
    path: 'table-card',
    component: TableCardTestComponent,
  },
  {
    path: 'main-card',
    component: MainCardTestComponent
  },
  {
    path: 'tab-sidenav',
    component: TabSidenavTestComponent,
  },
  {
    path: 'base-tab-table',
    component: BaseTabTableTestComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
