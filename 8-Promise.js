const cart = ["shirt", "pants", "shirt", "pants"];

const promise = createOrder(cart);

promise
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentId) => {
    console.log(paymentId);
  })
  .catch((err) => {
    console.log(err.message);
  });

function validateCart(cart) {
  return cart.length >= 2;
}

createOrder(cart);

function createOrder() {
  const pr = new Promise((resolve, reject) => {
    if (validateCart(cart)) {
      setTimeout(() => {
        const orderId = "1234";
        resolve(orderId);
      }, 2000);
    } else {
      const err = new Error("error ocured in valudation");
      reject(err);
    }
  });
  return pr;
}

function proceedToPayment() {
  const pr = new Promise((resolve, reject) => {
    if (validateCart(cart)) {
      setTimeout(() => {
        const orderId = "1234-payment";
        resolve(orderId);
      }, 2000);
    } else {
      const err = new Error("error ocured in proceedToPay");
      reject(err);
    }
  });
  return pr;
}
