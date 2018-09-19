import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeStatusComponent } from './home-status/home-status';
import { HomeListComponent } from './home-list/home-list';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HomeStatusComponent,
    HomeListComponent],
	imports: [CommonModule],
	exports: [HomeStatusComponent,
    HomeListComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
