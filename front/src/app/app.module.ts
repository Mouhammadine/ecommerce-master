import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent  } from './toolbar/toolbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { ConnectComponent } from './connect/connect.component';
import { InscriptionComponent } from './connect/inscription/inscription.component';
import { LoginComponent } from './connect/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ProductCardComponent,
    BasketComponent,
    BasketItemComponent,
    ConnectComponent,
    InscriptionComponent,
    LoginComponent,
    AdminComponent,
    AdminFormComponent,
    AdminProductComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
