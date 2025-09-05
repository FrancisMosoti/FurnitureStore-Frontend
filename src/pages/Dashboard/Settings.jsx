import DashWrapper from "../../Components/DashWrapper";
import ContactInfo from "../../Sections/Dashboard/ContactInfo";
import ProfileUpdate from "../../Sections/Dashboard/ProfileUpdate";

const Settings = () => {
  return (
    <DashWrapper>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      {/* profile update */}
      <ProfileUpdate />
      <span className="p-5"></span>
      <ContactInfo />
    </DashWrapper>
  );
};

export default Settings;
