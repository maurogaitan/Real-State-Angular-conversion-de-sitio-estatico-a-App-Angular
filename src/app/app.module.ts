import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallepropiedadComponent } from './components/detallepropiedad/detallepropiedad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropiedadesComponent,
    QuienessomosComponent,
    ContactoComponent,
    DetallepropiedadComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
