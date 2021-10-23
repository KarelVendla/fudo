import { Model } from '@vuex-orm/core';

export class Category extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'categories';

  static fields() {
    return {
      code: this.attr(''),
      name: this.attr(''),
    };
  }
}
