
import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Evenements } from './evenements/evenements';
import { Mission } from './mission/mission';
import { ContactezNousComponent } from './contactez-nous/contactez-nous';

export const routes: Routes = [
  { path: '', component: Accueil, pathMatch: 'full' },
  { path: 'evenements', component: Evenements },
  { path: 'mission', component: Mission },
  { path: 'apropos', loadComponent: () => import('./accueil/accueil').then(m => m.Accueil) }, // Placeholder, à remplacer par un vrai composant "À propos"
  {
    path: 'contactez-nous',
    component: ContactezNousComponent
  },
  { path: '**', redirectTo: '' }
];
