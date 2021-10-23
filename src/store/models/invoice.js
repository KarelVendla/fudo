import { Model } from '@vuex-orm/core';

export class Invoice extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'invoices';

  static fields() {
    return {
      id: this.attr(''),
      status: this.attr(''),
      delivered_at: this.attr(''),
      messages: this.attr(''),
      invoice_id: this.attr(''),
      invoice: this.attr(''),
    };
  }
}
