import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public  menuProperties: Array<Menu>=
    [
      {
        id: "1",
        titre: "Tableau de bord",
        icon: "fa-solid fa-chart-line",
        url: "",
        sousMenu: [
          {
            id:'11',
            titre:"vue d'ensemble",
            icon:'fa-solid fa-chart-pie',
            url:''
          },
          {
            id:'12',
            titre:"statistique",
            icon:'fa-solid fa-chart-column',
            url:'statistiques'
          }
        ]
      },

      {
        id:'2',
        titre:"Articles",
        icon:'fa-solid fa-boxes-stacked',
        url:'',
        sousMenu:[
          {
            id:'21',
            titre:"Articles",
            icon:'fa-solid fa-boxes-stacked',
            url:'articles',
          },
          {
            id:'22',
            titre:"Mouvement de stock",
            icon:'fa-brands fa-stack-overflow',
            url:'mvt-stock',
          }
        ]
      },

      {
        id:'3',
        titre:"Client",
        icon:'fa-solid fa-users',
        url:'',
        sousMenu:[
          {
            id:'31',
            titre:"Clients",
            icon:'fa-solid fa-users',
            url:'',
          },
          {
            id:'32',
            titre:"Commandes Client",
            icon:'fa-solid fa-arrow-down-up-across-line',
            url:'',
          }
        ]
      },

      {
        id:'4',
        titre:"Fournisseurs",
        icon:'fa-solid fa-truck-field',
        url:'',
        sousMenu:[
          {
            id:'41',
            titre:"Fournisseurs",
            icon:'fa-solid fa-truck-field',
            url:'',
          },
          {
            id:'42',
            titre:"Commandes Fournisseurs",
            icon:'fa-solid fa-boxes-packing',
            url:'',
          }
        ]
      },

      {
        id:'5',
        titre:"Parametrages",
        icon:'fa-solid fa-gears',
        url:'',
        sousMenu:[
          {
            id:'51',
            titre:"Categories",
            icon:'fa-solid fa-window-restore',
            url:'',
          },
          {
            id:'52',
            titre:"Utilisateurs",
            icon:'fa-solid fa-children',
            url:'',
          }
        ]
      },
    ];


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(url?: string) {
    this.router.navigate([url]);
  }
}
