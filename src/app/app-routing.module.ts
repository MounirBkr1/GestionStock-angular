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

const routes: Routes = [
  {path:"login", component: PageLoginComponent},
  {path:"inscrire",component:PageInscriptionComponent},

  {path:"", component:PageDashboardComponent,
    children:[
      { path:"statistiques",component:PageStatistiquesComponent},
      {path:"articles",component:PageArticleComponent},
      {path:"nouvel-article",component:NouvelArticleComponent},
      {path:"mvt-stock",component:PageMvtStoqueComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
