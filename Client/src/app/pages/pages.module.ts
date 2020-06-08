import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutModule } from './about/about.module';
import { HelpModule } from './help/help.module';

import { StatisticModule } from './statistic/statistic.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    StatisticModule,
    AboutModule,
    HelpModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
