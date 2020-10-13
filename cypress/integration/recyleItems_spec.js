import Counterpage from '../page-objects/counter-page'

const counterPage = new Counterpage();

describe('counter page - recycle all items', () => {
  beforeEach(() => {
    cy
      counterPage.visitPage()
  })

  it ('Must delete all items on page then hit recycle button to view all items again', () => {
    cy
      .get(counterPage.deleteItemBtn).eq(0).click()
      .get(counterPage.deleteItemBtn).eq(0).click()
      .get(counterPage.deleteItemBtn).eq(0).click()
      .get(counterPage.deleteItemBtn).eq(0).click()
      .get(counterPage.recycleBtn).click()
      // validation
      .get(counterPage.shoppingBadge).contains('0')
      
  })
})