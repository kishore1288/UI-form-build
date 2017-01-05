import { NgModule }                 from '@angular/core';


import { FormsComponent }           from './forms.component';

import { TablesComponent }          from './tables.component';


// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';

@NgModule({
    imports: [
        ComponentsRoutingModule
        
    ],
    declarations: [
      
        FormsComponent,
       
        TablesComponent
      
    ]
})
export class ComponentsModule { }
