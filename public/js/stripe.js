/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51TBrav3fsnHeqlKBFyQXkBq6pIaDBwm841wfR3sPDZN7FPE6JX3wJrCHlaoUlR01zDRwAO4y6XN3n0lSFrHDYdbj00zotVHi5h',
);

export const bookTour = async (tourId) => {
  try {
    // GET CHECKOUT SESSION FROM API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // CREATE CHECKOUT FORM + CHARGE CREDIT CARD
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
