import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useCart from '../../hooks/useCart'
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';

const PaymentCheckout = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState(null);
    const [transactionId, setTransactionId] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart?.reduce((acc, item) => acc + item.price, 0)
    console.log(totalPrice)
    console.log('client secret -', clientSecret)
    useEffect(() => {

        if (totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log('client secret from stripe-', res.data);
                    setClientSecret(res.data.clientSecret)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        // payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setError(error.message);
        }
        else {
            console.log(paymentMethod);
            setError(null)
        }
        // payment intent
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous',

                }
            }
        })
        if (paymentIntent) {
            console.log('payment Intent -', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const paymentDetails = {
                    email : user?.email,
                    price : totalPrice,
                    transactionId : paymentIntent.id,
                    cartIds : cart.map(item => item._id),
                    menuIds : cart.map(item => item.itemId),
                    status : 'pending'
                }
                const res = await axiosSecure.post('/payments', paymentDetails)
                console.log(res.data);
            }
        }
        if (confirmError) {
            console.log('error in the payment intent -', confirmError)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                error && <p className='text-red-500'>{error}</p>
            }
        </>
    );
};

export default PaymentCheckout;