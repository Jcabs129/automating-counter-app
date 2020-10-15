export default class Counterpage {
  constructor() {
    this.deleteItemBtn = '[data-qa="deleteItemBtn"]'
    this.recycleBtn = '[data-qa="recycleBtn"]'
    this.refreshItemsList = '[data-qa="refreshBtn"]'
    this.incrementBtn = '[data-qa="incrementBtn"]'
    this.decrementBtn = '[data-qa="decrementBtn"]'
    this.shoppingBadge = '[class="badge badge-pill badge-info m-2"]'
    this.itemBadge = '[class="badge m-2 badge-primary"]'
    this.zeroItemBadge = '[class="badge m-2 badge-warning"]'
    
  }

  visitPage() {
    cy
     .visit('http://localhost:3000/')
  }
  deleteItems() {
    cy
      .get(this.deleteItemBtn).eq(0).click()
      .get(this.deleteItemBtn).eq(0).click()
      .get(this.deleteItemBtn).eq(0).click()
      .get(this.deleteItemBtn).eq(0).click()

  }

  incretwoItems() {
  cy
    .get(this.incrementBtn).eq(0).dblclick()
    .get(this.incrementBtn).eq(2).dblclick()
  }


  incrementItemsMultiple() {
    cy
      .get(this.incrementBtn).eq(0).dblclick()
      .get(this.incrementBtn).eq(1).dblclick()
      .get(this.incrementBtn).eq(2).click()
      .get(this.incrementBtn).eq(3).click()
  }

  decrementItemMultiple() {
    cy
      .get(this.decrementBtn).eq(2).click()
      .get(this.decrementBtn).eq(2).click()
      .get(this.decrementBtn).eq(2).click()
      .get(this.decrementBtn).eq(2).click()
  }
}