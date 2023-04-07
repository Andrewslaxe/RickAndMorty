import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { CharactersComponent } from './characters/characters.component'
import { CharacterService } from './characters/character.service'
import { FilterService } from './filter/filter.service'

import { HttpClientModule } from '@angular/common/http'
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharacterService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
