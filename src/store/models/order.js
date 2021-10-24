import { Model } from '@vuex-orm/core';
import { Supplier } from './supplier';

export class Order extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'orders';

  static fields() {
    return {
      id: this.attr(''),
      status: this.attr(''),
      delivered_at: this.attr(''),
      messages: this.attr(''),
      supplier_id: this.attr(''),
      supplier: this.belongsTo(Supplier, 'supplier_id', 'id'),
      total_cost: this.attr(''),
      invoice_id: this.attr(''),
      invoice: this.attr(''),
      products: this.attr(''),
    };
  }
}
