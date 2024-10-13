import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SvmComponent} from "./svm/svm.component";
import {RandomForestComponent} from "./random-forest/random-forest.component";
import {IndicesComponent} from "./indices/indices.component";
import {DecisionTreeComponent} from "./decision-tree/decision-tree.component";
import {CagreGeomorphologieComponent} from "./cagre-geomorphologie/cagre-geomorphologie.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cagre-geomorphologie', component: CagreGeomorphologieComponent },
  { path: 'decision-tree', component: DecisionTreeComponent },
  { path: 'indices', component: IndicesComponent },
  { path: 'random-forest', component: RandomForestComponent },
  { path: 'svm', component: SvmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home on empty path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
