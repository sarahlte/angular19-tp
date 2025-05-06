import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ErrorComponent } from './components/error/error.component';
import { authRoutes } from './routes/auth.routes';
import { AuthGuard } from './guards/auth/auth.guard';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component'

const appTitle = "TpApp";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    pathMatch: "full",
    loadComponent: () => import("./components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
  },
  {
    path:"characters",
    title: `Liste des personnages - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("./components/character-list/character-list.component").then(m => m.CharacterListComponent)
  },
  {
    path:"characters/character/:id",
    title:`Personnage - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("./components/character/character.component").then(m => m.CharacterComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.routes").then(m => m.authRoutes)
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => import("./components/error/error.component").then(m => m.ErrorComponent)
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
