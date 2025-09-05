import React from "react";
import Card from "../../Components/Card";
import Button from "../../Components/Button";

const ContactInfo = () => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="text-gray-700 mb-6">Update your contact details below.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Phone Number"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Address"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="City"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="State"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Zip Code"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Country"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <Button className="bg-[#365A4C] text-white rounded-lg hover:bg-[#2C453A] mt-4 px-6 py-3">
        Update
      </Button>
    </Card>
  );
};

export default ContactInfo;
