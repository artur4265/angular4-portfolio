import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';

//Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashbroadComponent } from './pages/dashbroad/dashbroad.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MarketPlaceComponent } from './pages/market-place/market-place.component';
import { AddAppComponent } from './pages/add-app/add-app.component';
import { UpgrateToProComponent } from './pages/upgrate-to-pro/upgrate-to-pro.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailAppComponent } from './pages/detail-app/detail-app.component';


// Services
import { ProgramListService } from './pages/program-list.service';
import { FilterPipe } from './filter.pipe';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashbroad', component: DashbroadComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'market-place', component: MarketPlaceComponent },
  { path: 'add-app', component: AddAppComponent },
  { path: 'upgrate-to-pro', component: UpgrateToProComponent },
  { path: 'detail-app/:id', component: DetailAppComponent},
  { path: '**', component: NotfoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DashbroadComponent,
    UserProfileComponent,
    MarketPlaceComponent,
    AddAppComponent,
    UpgrateToProComponent,
    NotfoundComponent,
    HomeComponent,
    DetailAppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartModule
  ],
  providers: [ProgramListService],
  bootstrap: [AppComponent]
})


export class AppModule { }
