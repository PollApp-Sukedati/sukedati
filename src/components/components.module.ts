import { NgModule } from '@angular/core';
import { HomeStatusComponent } from './home-status/home-status';
import { HomeListComponent } from './home-list/home-list';
@NgModule({
	declarations: [HomeStatusComponent,
    HomeListComponent],
	imports: [],
	exports: [HomeStatusComponent,
    HomeListComponent]
})
export class ComponentsModule {}
