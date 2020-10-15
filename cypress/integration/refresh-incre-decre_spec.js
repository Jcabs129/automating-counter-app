import Counterpage from '../page-objects/counter-page'

const counterPage = new Counterpage();

describe('Should be able to refresh all Items that have been incremented', () => {
  beforeEach(() => {
    cy
      counterPage.visitPage();
  })
  it('refresh all incremented items', () => {
      counterPage.incrementItemsMultiple()
    cy
      .get(counterPage.refreshItemsList).click()
      .get(counterPage.zeroItemBadge).contains('Zero')
  })
})
