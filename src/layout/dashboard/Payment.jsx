import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckout from "./PaymentCheckout";

const stripePromise = loadStripe(import.meta.env.VITE_PK);


const Payment = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <Elements stripe={stripePromise}>
                <PaymentCheckout></PaymentCheckout>
            </Elements>
        </div>
    );
};

export default Payment;