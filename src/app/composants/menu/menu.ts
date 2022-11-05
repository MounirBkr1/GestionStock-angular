export interface  Menu {
  //? : non obligatoire
  id?:string;
  titre?:string;
  icon?:string;
  url?:string;
  sousMenu?:Array<Menu>;
}
