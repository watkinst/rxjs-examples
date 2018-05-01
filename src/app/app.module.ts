import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ObservableCreateComponent } from './observable-create/observable-create.component';
import { StartComponent } from './start/start.component';
import { ObservableOfComponent } from './observable-of/observable-of.component';
import { ObservableFromComponent } from './observable-from/observable-from.component';
import { ObservableFromEventComponent } from './observable-from-event/observable-from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { FilterComponent } from './filter/filter.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { PublishComponent } from './publish/publish.component';
import { CatchComponent } from './catch/catch.component';
import { DoComponent } from './do/do.component';
import { ToPromiseComponent } from './to-promise/to-promise.component';
import { FindComponent } from './find/find.component';
import { CountComponent } from './count/count.component';
import { ReduceComponent } from './reduce/reduce.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { TakeComponent } from './take/take.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableCreateComponent,
    StartComponent,
    ObservableOfComponent,
    ObservableFromComponent,
    ObservableFromEventComponent,
    SwitchMapComponent,
    FilterComponent,
    CombineLatestComponent,
    PublishComponent,
    CatchComponent,
    DoComponent,
    ToPromiseComponent,
    FindComponent,
    CountComponent,
    ReduceComponent,
    MergeMapComponent,
    TakeComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
