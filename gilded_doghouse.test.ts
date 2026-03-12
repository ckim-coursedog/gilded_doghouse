import GildedDoghouse from './gilded_doghouse'

describe('GildedDoghouse', () => {

  describe('Beef Cake', () => {
    test.skip('before sell date', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: 5,
        quality: 10,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: 4,
        quality: 8,
      })
    })

    test.skip('before sell date at zero quality', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: 5,
        quality: 0,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: 4,
        quality: 0,
      })
    })

    test.skip('on sell date', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: 0,
        quality: 10,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: -1,
        quality: 6,
      })
    })

    test.skip('on sell date at zero quality', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: 0,
        quality: 0,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: -1,
        quality: 0,
      })
    })

    test.skip('after sell date', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: -10,
        quality: 10,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: -11,
        quality: 6,
      })
    })

    test.skip('after sell date at zero quality', () => {
      const gildedDoghouse = new GildedDoghouse({
        name: 'Beef Cake',
        daysRemaining: -10,
        quality: 0,
      })

      gildedDoghouse.tick()

      expect(gildedDoghouse).toMatchObject({
        daysRemaining: -11,
        quality: 0,
      })
    })
  })
})
