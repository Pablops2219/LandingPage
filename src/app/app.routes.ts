import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CandidatComponent } from './candidat/candidat.component';
import { EquipComponent } from './equip/equip.component';
import { ProgramaComponent } from './programa/programa.component';
import { ProposaComponent } from './proposa/proposa.component';
import { CampanyaComponent } from './campanya/campanya.component';
import { AgendaComponent } from './agenda/agenda.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'equip',
    component: EquipComponent,
  },
  {
    path: 'candidat',
    component: CandidatComponent,
  },
  {
    path: 'agenda',
    component: AgendaComponent,
  },
  {
    path: 'programa',
    component: ProgramaComponent,
  },
  {
    path: 'campanya',
    component: CampanyaComponent,
  },
  {
    path: 'proposa',
    component: ProposaComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];
