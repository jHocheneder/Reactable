import { NgModule } from '@angular/core';
import { NbCardModule, NbAccordionModule, NbIconModule, NbButtonModule, NbInputModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { OptionsComponent } from './options.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbAccordionModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule
  ],
  declarations: [
    OptionsComponent,
  ],
})
export class OptionsModule { }
