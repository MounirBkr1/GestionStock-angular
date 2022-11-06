import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {HeaderComponent} from "./composants/header/header.component";
import {FooterComponent} from "./composants/footer/footer.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtStoqueComponent} from "./pages/mvt-stoque/page-mvt-stoque/page-mvt-stoque.component";
import {PageClientsComponent} from "./pages/clients/page-clients/page-clients.component";
import {PageFournisseurComponent} from "./pages/founisseurs/page-fournisseur/page-fournisseur.component";
import {NouveauClientFournisseurComponent} from "./composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component";
import {DetailCmdClientFournisseurComponent} from "./composants/detail-cmd-client-fournisseur/detail-cmd-client-fournisseur.component";
import {PageCmdClientFournisseurComponent} from "./pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component";
import {PageCategorieComponent} from "./pages/categories/page-categorie/page-categorie.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotPasseComponent} from "./pages/profil/changer-mot-passe/changer-mot-passe.component";

const routes: Routes = [
  {path:"login", component: PageLoginComponent},
  {path:"inscrire",component:PageInscriptionComponent},

  {path:"", component:PageDashboardComponent,
    children:[
      { path:"statistiques",component:PageStatistiquesComponent},
      {path:"articles",component:PageArticleComponent},
      {path:"nouvel-article",component:NouvelArticleComponent},
      {path:"mvt-stock",component:PageMvtStoqueComponent},

      {path:"client",component:PageClientsComponent},
      {path:"nouveau-client",component:NouveauClientFournisseurComponent},
      {path:"commande-client",component:PageCmdClientFournisseurComponent},

      {path:"fournisseur",component:PageFournisseurComponent},
      {path:"nouveau-fournisseur",component:NouveauClientFournisseurComponent},
      {path:"commande-fournisseur",component:PageCmdClientFournisseurComponent},

      {path:"categorie",component:PageCategorieComponent},
      {path:"nouvelle-categorie",component:NouvelleCategorieComponent},
      {path:"utilisateur",component:PageUtilisateurComponent},
      {path:"nouvel-utlisateur",component:NouvelUtilisateurComponent},

      {path:"profil",component:PageProfilComponent},
      {path:"changerMotPasse",component:ChangerMotPasseComponent},







    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
