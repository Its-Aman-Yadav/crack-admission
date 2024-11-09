'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, CreditCard, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const paymentOptions = [
    { icon: QrCode, title: 'Scan to Pay', description: 'Scan the QR code with your payment app' },
    { icon: CreditCard, title: 'Pay by NEFT', description: 'Direct bank transfer' },
    { icon: Wallet, title: 'Pay by PayPal', description: 'International payments accepted' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-gray-100 text-gray-900 rounded-xl shadow-2xl">
      <h2 className="text-3xl mt-20 font-bold text-center mb-8">Choose Your Payment Method</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {paymentOptions.map((option, index) => (
          <motion.div
            key={index}
            className={`rounded-lg p-6 cursor-pointer transition-all ${
              selectedOption === index ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedOption(index)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  selectedOption === index ? 'bg-white' : 'bg-blue-500'
                }`}
              >
                <option.icon className={`${selectedOption === index ? 'text-blue-600' : 'text-white'} h-6 w-6`} />
              </div>
              <div>
                <h3 className="font-semibold text-xl">{option.title}</h3>
                <p className={`${selectedOption === index ? 'text-gray-200' : 'text-gray-600'} text-sm`}>
                  {option.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: selectedOption !== null ? 1 : 0, y: selectedOption !== null ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="mt-8"
      >
        {selectedOption === 0 && (
          <div className="flex justify-center">
            <div className="h-64 w-64 bg-white p-4 rounded-lg shadow-lg">
              <img src="/images/extra/qr.png" alt="Payment QR Code" className="h-full w-full" />
            </div>
          </div>
        )}
        {selectedOption === 1 && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold text-xl mb-4">NEFT Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <span className="text-gray-500">Account Name:</span>
              <span>CrackAdmission Technologies Private Limited</span>
              <span className="text-gray-500">Account Number:</span>
              <span>50140500714</span>
              <span className="text-gray-500">IFSC Code:</span>
              <span>ICIC0000314</span>
              <span className="text-gray-500">Bank Name:</span>
              <span>ICICI</span>
              <span className="text-gray-500">Type of Account:</span>
              <span>Current</span>
            </div>
          </div>
        )}
        {selectedOption === 2 && (
          <div className="flex justify-center">
            <Link href="https://www.paypal.com/paypalme/crackadmission">
              <button className="bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:ring-opacity-50">
                Pay with PayPal
              </button>
            </Link>
          </div>
        )}
      </motion.div>

      <div className="mt-8 text-sm text-gray-500 space-y-2">
        <p>
          If you are paying via PayPal, please email a screenshot of your successful payment to{' '}
          <a href="mailto:contact@crackadmission.com" className="text-blue-500 hover:underline">
            contact@crackadmission.com
          </a>
          .
        </p>
        <p>
          For any payment issues, please contact us at{' '}
          <a href="mailto:contact@crackadmission.com" className="text-blue-500 hover:underline">
            contact@crackadmission.com
          </a>
          . We're here to help!
        </p>
      </div>
    </div>
  );
}
