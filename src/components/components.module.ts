import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeStatusComponent } from './home-status/home-status';
import { HomeListComponent } from './home-list/home-list';
@NgModule({
	declarations: [HomeStatusComponent,
    HomeListComponent],
	imports: [],
	exports: [HomeStatusComponent,
    HomeListComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
