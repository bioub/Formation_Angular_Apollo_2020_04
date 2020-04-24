import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { countReducer } from './store/count.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopBarComponent,
    HomeComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: countReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
