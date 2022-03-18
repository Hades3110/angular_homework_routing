import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { ThirdModule } from "./third/third.module";

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
  {
    path: 'third',
    component: ThirdComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: ThirdComponent
    }),
    ThirdModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
