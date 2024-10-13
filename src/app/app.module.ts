import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SvmComponent } from './svm/svm.component';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';
import { RandomForestComponent } from './random-forest/random-forest.component';
import { CagreGeomorphologieComponent } from './cagre-geomorphologie/cagre-geomorphologie.component';
import { IndicesComponent } from './indices/indices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SvmComponent,
    DecisionTreeComponent,
    RandomForestComponent,
    CagreGeomorphologieComponent,
    IndicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
