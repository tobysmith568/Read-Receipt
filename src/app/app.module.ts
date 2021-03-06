import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ENVIRONMENT } from "./injection-tokens";

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, HttpClientModule, BrowserModule.withServerTransition({ appId: "serverApp" })],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
