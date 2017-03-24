import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
 
class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    // do something with the exception
  }
}

@NgModule({
  declarations: [
    MyApp
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
     [{provide: ErrorHandler, useClass: MyErrorHandler}]
  ]
})
export class AppModule {}