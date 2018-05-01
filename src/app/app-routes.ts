import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ObservableCreateComponent } from './observable-create/observable-create.component';
import { ObservableOfComponent } from './observable-of/observable-of.component';
import { ObservableFromComponent } from './observable-from/observable-from.component';
import { ObservableFromEventComponent } from './observable-from-event/observable-from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { FirstComponent } from './first/first.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { PublishComponent } from './publish/publish.component';
import { CatchComponent } from './catch/catch.component';
import { DoComponent } from './do/do.component';
import { ToPromiseComponent } from './to-promise/to-promise.component';
import { FindComponent } from './find/find.component';
import { CountComponent } from './count/count.component';
import { ReduceComponent } from './reduce/reduce.component';

export const routes: Routes = [
  { path: 'observable-create', component: ObservableCreateComponent },
  { path: 'observable-of', component: ObservableOfComponent },
  { path: 'observable-from', component: ObservableFromComponent },
  { path: 'observable-from-event', component: ObservableFromEventComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'take', component: TakeComponent },
  { path: 'first', component: FirstComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'catch', component: CatchComponent },
  { path: 'do', component: DoComponent },
  { path: 'to-promise', component: ToPromiseComponent },
  { path: 'find', component: FindComponent },
  { path: 'count', component: CountComponent },
  { path: 'reduce', component: ReduceComponent },
  { path: 'start', component: StartComponent },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];
