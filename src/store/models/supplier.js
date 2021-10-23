import { Model } from '@vuex-orm/core';

export class Supplier extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'suppliers';

  static fields() {
    return {
      id: this.attr(''),
      name: this.attr(''),
      logo: this.attr(''),
    };
  }
}
