// Import as

import { isLowSodium as saltFree } from './menu.js';
saltFree();

// Another way of using aliases is to import the entire module as an alias:
import * as Carte from './menu.js';
console.log(Carte.chefsSpecial);
Carte.isVeg();
