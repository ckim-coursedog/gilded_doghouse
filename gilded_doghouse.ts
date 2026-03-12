class GildedDoghouse {
  name: any
  daysRemaining: any
  quality: any

  constructor({ name, daysRemaining, quality }: any) {
    this.name = name
    this.daysRemaining = daysRemaining
    this.quality = quality
  }

  tick() {
  }
}

export default GildedDoghouse
