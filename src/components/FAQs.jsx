import React from 'react';

const FAQs = [
    {
      "question": "How do I make a hotel reservation?",
      "answer": "To make a hotel reservation, simply search for your desired location and dates, browse available hotels, select your preferred option, and follow the booking process."
    },
    {
      "question": "Can I cancel or modify my reservation?",
      "answer": "Yes, you can cancel or modify your reservation based on the hotel's cancellation policy. Check the specific hotel's policy during the booking process."
    },
    {
      "question": "What payment methods are accepted?",
      "answer": "We accept a variety of payment methods, including credit cards, debit cards, and more. Payment options may vary by hotel."
    },
    {
      "question": "Is there a fee for booking through Room Rover?",
      "answer": "Room Rover does not charge booking fees. You'll only pay the price listed by the hotel, and any additional charges will be clearly shown during the booking process."
    },
    {
      "question": "Do I need to create an account to book a hotel?",
      "answer": "You can browse hotels without an account, but creating an account can help save your booking details for future reference."
    },
    {
      "question": "Are taxes and fees included in the hotel prices?",
      "answer": "Taxes and fees may vary by hotel and location. They will be clearly displayed during the booking process, so you know the total cost upfront."
    },
    {
      "question": "How can I find pet-friendly hotels?",
      "answer": "You can use the pet-friendly filter when searching for hotels to find accommodations that welcome pets. Be sure to read the hotel's specific pet policy."
    },
    {
      "question": "Can I request a late check-out?",
      "answer": "Late check-out requests can be made directly to the hotel. Availability and any associated fees will depend on the hotel's policies."
    },
    {
      "question": "Are breakfast and Wi-Fi included in all hotel bookings?",
      "answer": "Breakfast and Wi-Fi inclusions may vary by hotel. Check the hotel's amenities section to see what's included with your booking."
    },
    {
      "question": "What is the check-in/check-out time?",
      "answer": "The check-in and check-out times can vary by hotel. You'll find this information on the hotel's page, and it will also be included in your booking confirmation."
    },
    {
      "question": "Do you offer group booking discounts?",
      "answer": "Some hotels offer group booking discounts. Contact our customer support for assistance with group bookings and special rates."
    },
    {
      "question": "Can I book a hotel for the same day?",
      "answer": "Yes, you can book a hotel for the same day, subject to availability. Be sure to confirm your reservation quickly if you need a last-minute booking."
    },
    {
      "question": "What is your refund policy for canceled reservations?",
      "answer": "Refund policies can vary by hotel. Check the hotel's specific cancellation policy during the booking process."
    },
    {
      "question": "How can I contact customer support?",
      "answer": "You can contact our customer support team through our website or app for assistance with any questions or issues."
    },
    {
      "question": "Do you have a mobile app for hotel bookings?",
      "answer": "Yes, we have a mobile app available for convenient hotel bookings on the go. Download it from your app store."
    },
    {
      "question": "Are there special rates for frequent travelers?",
      "answer": "Some hotels offer special rates or loyalty programs for frequent travelers. Check individual hotels for such offers."
    },
    {
      "question": "Can I add special requests, like a room with a view?",
      "answer": "Yes, you can add special requests during the booking process. We'll do our best to accommodate your preferences."
    },
    {
      "question": "What is the process for booking multiple rooms?",
      "answer": "To book multiple rooms, adjust the number of rooms required during the booking process. You can also make separate bookings if needed."
    },
    {
      "question": "Are there any age restrictions for booking a hotel?",
      "answer": "Age restrictions can vary by hotel and location. Check the hotel's policy to ensure compliance with their requirements."
    },
    {
      "question": "How do I know if my booking is confirmed?",
      "answer": "You will receive a confirmation email with your booking details once your reservation is successfully confirmed."
    },
    {
      "question": "Is it safe to enter my credit card information on your website?",
      "answer": "Yes, our website uses secure encryption to protect your credit card information, making it safe for online payments."
    },
    {
      "question": "Can I get a receipt for my booking?",
      "answer": "Yes, you will receive a booking confirmation email that serves as a receipt for your reservation."
    },
    {
      "question": "Do you offer travel insurance options?",
      "answer": "We do not directly provide travel insurance, but you can explore travel insurance options through third-party providers."
    },
    {
      "question": "What are the child and infant policies for hotel stays?",
      "answer": "Child and infant policies, such as extra bed charges and age restrictions, vary by hotel. Check the hotel's policy during booking."
    },
    {
      "question": "How can I provide feedback or review a hotel I stayed at?",
      "answer": "You can leave a review for a hotel you stayed at through our platform, sharing your experiences and helping fellow travelers make informed decisions."
    }
  ];  

const FAQPage = () => {
  return (
    <div className="py-5 md:pt-10">
      <div className="mx-5 p-6 md:px-10 lg:px-16">
        <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-8">
          Frequently Asked Questions
        </h1>
        <div>
          <ol className='list-decimal'>
            {FAQs.map((faq, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
