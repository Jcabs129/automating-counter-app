import Counterpage from '../page-objects/counter-page'

const counterPage = new Counterpage();

describe('Should be able to increment/decrement whilst updating the item accordingly', () => {
  beforeEach(() => {
    cy
      counterPage.visitPage()
  })
  it('Increment and validate', () => {
    cy
      .get(counterPage.incrementBtn).eq(0).dblclick()
      // Validation
      .get(counterPage.itemBadge).eq(0).contains('2')
      .get(counterPage.decrementBtn).eq(0).dblclick()
      // Validation
      .get(counterPage.zeroItemBadge).eq(0).contains('Zero')
    })
})