import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { MPipePipe } from './m-pipe.pipe';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'databinding/:title', component: DatabindingComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatabindingComponent,
    DirectivesComponent,
    PipesComponent,
    MPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
