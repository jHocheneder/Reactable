import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'statistic',
      component: StatisticComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'help',
      component: HelpComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
