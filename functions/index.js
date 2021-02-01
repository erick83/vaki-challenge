const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
const { access } = require('fs');
admin.initializeApp();
const db = admin.firestore()

exports.addToCart = functions.https.onCall((data) => {
  const docRef = db.collection('Rewards').where('key', '==', data.reward_key)

  return _addToCart(db, data.reward_key)
})

async function _addToCart(db, reward_key) {
  const rewardsDocRef = db.collection('Rewards').where('key', '==', reward_key)
  const cartDocRef = db.collection('Cart').where('reward_key', '==', reward_key)
  try {
    const snaptshot = await rewardsDocRef.get()

      snaptshot.forEach(rewardsDoc => {
        const reward = rewardsDoc.data()

        if (reward.quantityAvailable > 0) {
          reward.quantityAvailable-=1
          db.collection('Rewards').doc(rewardsDoc.id).set(reward)

          cartDocRef.get().then(cartSnaptshot => {
            if (cartSnaptshot.empty) {
              db.collection('Cart').add({ reward_key, cant: 1 })
            } else {
              cartSnaptshot.forEach(cartDoc => {
                console.log(cartDoc)
                const cart = cartDoc.data()
                console.log(cart)
                cart.cant+=1
                console.log(cart, cartDoc.id)
                db.collection('Cart').doc(cartDoc.id).set(cart)
              })
            }
          })
        }
      })
  } catch(e) {
    return e
  }

  return { message: 'success' }
}
