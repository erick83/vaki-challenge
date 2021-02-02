const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore()

exports.purchase = functions.https.onCall((data) => {
  return _purchase(db, data)
})

async function _purchase(db, data) {
  for (const cart of data) {
    const rewardsDocRef = db.collection('Rewards').where('key', '==', cart.reward_key)
    try {
      const rewardsSnapshot = await rewardsDocRef.get()
      if (!rewardsSnapshot.empty) {
        rewardsSnapshot.forEach(rewardsDoc => {
          const reward = rewardsDoc.data()
          db.collection('Rewards').doc(rewardsDoc.id).update({
            quantityAvailable: reward.quantityAvailable - cart.cant
          })
        })
      }
    } catch (e) {
      return e;
    }
  }

  db.collection('Cart').add({ carts: data })
  return { message: 'Purchase Success', status: 201 }
}
