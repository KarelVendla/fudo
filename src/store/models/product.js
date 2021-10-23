import { Model } from '@vuex-orm/core';
import { Supplier, Category } from './models';

export class Product extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'products';

  static fields() {
    return {
      id: this.attr(''),
      ean: this.attr(''),
      name: this.attr(''),
      country_of_origin: this.attr(''),
      price_kg: this.attr(''),
      description: this.attr(''),
      category_code: this.attr(''),
      category: this.belongsTo(Category, 'category_code', 'code'),
      is_packaged: this.attr(''),
      net_weight: this.attr(''),
      image: this.attr(''),
      supplier_id: this.attr(''),
      supplier: this.belongsTo(Supplier, 'supplier_id', 'id'),
    };
  }
}
