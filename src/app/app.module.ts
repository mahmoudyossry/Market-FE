import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion'; 
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputNumberModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    ToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
