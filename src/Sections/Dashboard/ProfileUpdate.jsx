import React from "react";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const ProfileUpdate = () => {
  return (
    <Card className="bg-white">
      <h2 className="text-2xl font-semibold ">Profile</h2>
      <p className="text-gray-700">Update your profile information here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Input type="text" placeholder="Name" className="mb-4 mt-4" />
        <Input type="email" placeholder="Email" className="mb-4 md:mt-4" />
        <Input type="password" placeholder="Password" className="mb-4" />
        <Input type="file" placeholder="Profile Picture URL" className="mb-4" />
      </div>
      <Button className="bg-[#365A4C] text-white rounded-lg hover:bg-[#2C453A] mt-4 px-6 py-3">
        Update
      </Button>
    </Card>
  );
};

export default ProfileUpdate;
