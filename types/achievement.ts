export interface Achievement {
    id: string
    title: string
    description: string
    image: string
    points: number
    isLocked: boolean
    additionalRewards: {
      badge: string
      currency: number
    }
  }
  