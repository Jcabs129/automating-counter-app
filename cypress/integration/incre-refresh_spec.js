import Counterpage from '../page-objects/counter-page'

const counterPage = new Counterpage();

describe('Shoppping cart should be able to update according to the amount of items added, there should be validation', () => {
  beforeEach(() => {
    cy
      counterPage.visitPage()
  })
  it('increments an item and confirms the correct item within shopping badge', () => {
    cy
      .get(counterPage.incrementBtn).eq(0).dblclick()
      // Validation shopping badge navBar
      .get(counterPage.shoppingBadge).contains('1')
      .get(counterPage.incrementBtn).eq(2).dblclick()
      // Validation shopping badge navBar
      .get(counterPage.shoppingBadge).contains('2')
      .get(counterPage.refreshItemsList).click()
      // Validation
      .get(counterPage.zeroItemBadge).eq(0).contains('Zero')
      .get(counterPage.zeroItemBadge).eq(2).contains('Zero')
  })
})
