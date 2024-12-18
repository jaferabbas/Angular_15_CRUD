// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient, withInterceptors } from "@angular/common/http";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
//import { authInterceptor } from './app/auth.interceptor'; // Make sure the interceptor is imported

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([]), // Apply authInterceptor
    ),
  ]
})
.catch((err) => console.error(err));
