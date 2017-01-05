import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent }  from './layouts/simple-layout.component';

export const routes: Routes = [
  
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Ki-UI'
    },
    children: [
      
      {
        path: 'components',
        loadChildren: 'app/components/components.module#ComponentsModule'
      },
      
      
      {
        path: 'charts',
        loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: 'app/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
