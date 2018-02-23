//Built-in Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';

//Custom Components
import { AppComponent } from './app.component';
import { TestapiComponent } from './components/testapi/testapi.component';

//Custom Services
import { TestapiService } from './services/testapi.service';

@NgModule({
  declarations: [
    AppComponent,
    TestapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    // NgxBootstrapModule,
    BrowserAnimationsModule
  ],
  providers: [TestapiService],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
