import Stripe from 'stripe' // stripe é um SDK (software development kit ). 

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version: "0.1.0"
    },
  }
)