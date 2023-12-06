import { Injectable } from '@nestjs/common';
import * as paypal from 'paypal-rest-sdk';

@Injectable()
export class PaypalService {
  constructor() {
    paypal.configure({
      mode: 'sandbox', // Change to 'live' for production
      client_id: process.env.PAYPAL_CLIENT,
      client_secret: process.env.PAYPAL_SECRET,
    });
  }

  async createPayment(amount: number, currency: string): Promise<any> {
    const paymentData = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:9999/',
        cancel_url: 'http://localhost:9999/',
      },
      transactions: [
        {
          amount: {
            total: amount.toFixed(2),
            currency,
          },
        },
      ],
    };
    return new Promise((resolve, reject) => {
      paypal.payment.create(paymentData, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          console.log('payment', payment);
          resolve(payment);
        }
      });
    });
  }

  async executePayment(paymentId: string, payerId: string): Promise<any> {
    const executePayment = {
      payer_id: payerId,
    };

    return new Promise((resolve, reject) => {
      paypal.payment.execute(paymentId, executePayment, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
  }

  async getPaymentStatus(paymentId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      paypal.payment.get(paymentId, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
  }
}
