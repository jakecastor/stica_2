import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBedYZqAkgEtfxA1TZeEopvPnwdbaJQgIw",
  authDomain: "myfirebase-eb932.firebaseapp.com",
  databaseURL: "https://myfirebase-eb932-default-rtdb.firebaseio.com",
  projectId: "myfirebase-eb932",
  storageBucket: "myfirebase-eb932.appspot.com",
  messagingSenderId: "1026654846213",
  appId: "1:1026654846213:web:ed8bffc7f746785a788b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
