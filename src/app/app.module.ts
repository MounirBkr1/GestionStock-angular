import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtStoqueComponent } from './pages/mvt-stoque/page-mvt-stoque/page-mvt-stoque.component';

import { DetailMvtStockArticleComponent } from './composants/detail-mvt-stock-article/detail-mvt-stock-article.component';
import { DetailMvtStockComponent } from './composants/detail-mvt-stock/detail-mvt-stock.component';
import { DetailClientFournisseurComponent } from './composants/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientsComponent } from './pages/clients/page-clients/page-clients.component';
import { PageFournisseurComponent } from './pages/founisseurs/page-fournisseur/page-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCmdClientFournisseurComponent } from './composants/detail-cmd-client-fournisseur/detail-cmd-client-fournisseur.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdClientFournisseurComponent } from './pages/page-cmd-client-fournisseur/page-cmd-client-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PageArticleComponent,

    DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelArticleComponent,
    PageMvtStoqueComponent,
    DetailMvtStockArticleComponent,
    DetailMvtStockComponent,
    DetailClientFournisseurComponent,
    PageClientsComponent,
    PageFournisseurComponent,
    NouveauClientFournisseurComponent,
    DetailCmdClientFournisseurComponent,
    DetailCmdComponent,
    PageCmdClientFournisseurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
