import React from 'react';

const ContactMap = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-widest text-red-600 uppercase block mb-1">
          Location
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Find Us on Google Maps
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Visit our office or campus at the location below.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.593576380321!2d90.39244506929428!3d23.772443561516067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7532566f9b5%3A0x53167c1eb7d6575b!2sUlterior%20Engineering!5e0!3m2!1sen!2sbd!4v1786858596019!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Ulterior Engineering Location"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;