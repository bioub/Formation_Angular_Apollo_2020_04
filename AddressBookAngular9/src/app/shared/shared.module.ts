import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SelectComponent } from "./select/select.component";
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule],
  declarations: [
    // components
    // pipes
    // directives
    SelectComponent,
    ClockComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SelectComponent,
    ClockComponent,
  ],
})
export class SharedModule {}
