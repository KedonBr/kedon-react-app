
export const phoneMask = value => {
    const length = value.length
      const ddi = value && value.slice(0,2)
      const ddd = value && value.slice(2,4)
      const prefix = length === 12 ? value.slice(4,8) : value.slice(4,9)
      const suffix   = length === 12 ? value.slice(8,12) : value.slice(9,13)
      return `+${ddi} (${ddd}) ${prefix}-${suffix}`
  }