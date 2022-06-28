import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { SignupService } from './services/signup.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http'; 
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MessageListComponent } from './message-list/message-list.component';
import { ChatFooterComponent } from './footer/chat-footer/chat-footer.component';
import { ChatHeaderComponent } from './headers/chat-header/chat-header.component';
import { UsersHeaderComponent } from './headers/users-header/users-header.component';
import { SearchPipe } from './pipes/search.pipe';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    MessageListComponent,
    ChatFooterComponent,
    ChatHeaderComponent,
    UsersHeaderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
     JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //@ts-ignore
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/api/auth']
      }
    })
  ],
  providers: [ AuthService, SignupService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }