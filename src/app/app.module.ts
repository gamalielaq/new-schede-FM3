import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SchedaAlimentazioneComponent } from './scheda-alimentazione/scheda-alimentazione.component';
import { SchedaBradenComponent } from './scheda-braden/scheda-braden.component';

import { SchedaMiniMentalShortComponent } from './scheda-mini-mental-short/scheda-mini-mental-short.component';
import { SchedaMiniNutritionalAssesmentComponent } from './scheda-mini-nutritional-assesment/scheda-mini-nutritional-assesment.component';
import { SchedaMiniMentalStateExaminationComponent } from './scheda-mini-mental-state-examination/scheda-mini-mental-state-examination.component';
import { SchedaCodifichePatologieIcpcComponent } from './scheda-codifiche-patologie-icpc/scheda-codifiche-patologie-icpc.component';
import { SchedaRilevazioneCaduteComponent } from './scheda-rilevazione-cadute/scheda-rilevazione-cadute.component';
import { SchedaBinaComponent } from './scheda-bina/scheda-bina.component';
import { SchedaDisfagiaAssistenzialeComponent } from './scheda-disfagia-assistenziale/scheda-disfagia-assistenziale.component';
import { SchedaDisfagiaInfermieristicaComponent } from './scheda-disfagia-infermieristica/scheda-disfagia-infermieristica.component';
import { SchedaValutazioneSanitariaComponent } from './scheda-valutazione-sanitaria/scheda-valutazione-sanitaria.component';
import { SchedaTinettiBalanceComponent } from './scheda-tinetti-balance/scheda-tinetti-balance.component';
import { SchedaIdoneitaAusilioComponent } from './scheda-idoneita-ausilio/scheda-idoneita-ausilio.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedaAlimentazioneComponent,
    SchedaBradenComponent,
    SchedaMiniMentalShortComponent,
    SchedaMiniNutritionalAssesmentComponent,
    SchedaMiniMentalStateExaminationComponent,
    SchedaCodifichePatologieIcpcComponent,
    SchedaRilevazioneCaduteComponent,
    SchedaBinaComponent,
    SchedaDisfagiaAssistenzialeComponent,
    SchedaDisfagiaInfermieristicaComponent,
    SchedaValutazioneSanitariaComponent,
    SchedaTinettiBalanceComponent,
    SchedaIdoneitaAusilioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
