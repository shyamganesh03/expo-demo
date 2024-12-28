import { Button } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import { Toast } from "expo-react-native-toastify";
import { useDispatch, useSelector } from "react-redux";
import InputText from "@/components/controlledComponents/InputText";
import { updateUserDetails } from "@/store/actions/user_profile";

type userDetails = {
  emailId: string;
  fullName: string;
  gender: string;
  phoneNo: string;
};

const Profile = () => {
  const [userDetails, setUserDetails] = useState<userDetails>({
    emailId: "",
    fullName: "",
    gender: "",
    phoneNo: "",
  });
  const userData = useSelector((state: any) => state.userDetails);
  const currentUser = userData?.userDetails?.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    setUserDetails(
      userData?.userDetails?.[currentUser] || userData?.userDetails?.default
    );
  }, [userData]);

  const handleUpdateData = ({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) => {
    setUserDetails((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newUserDetails = {
      ...userData?.userDetails,
      [currentUser]: {
        ...userDetails,
      },
      currentUser: currentUser,
    };
    dispatch(updateUserDetails(newUserDetails, userData));
    Toast.success("User Profile Updated Successfully", "bottom");
  };

  return (
    <Container>
      <InputText
        placeholder="Full Name"
        value={userDetails?.fullName}
        onChange={(value: any) =>
          handleUpdateData({ field: "firstName", value })
        }
        key="fullName"
      />
      <InputText
        placeholder="Email Id"
        value={userDetails?.emailId}
        onChange={(value: any) =>
          handleUpdateData({ field: "emailAddress", value })
        }
        mode="email"
        key="email"
      />
      <InputText
        placeholder="Gender"
        value={userDetails?.gender}
        onChange={(value: any) =>
          handleUpdateData({ field: "firstName", value })
        }
        key="gender"
      />
      <InputText
        placeholder="Phone No."
        value={userDetails?.phoneNo}
        onChange={(value: any) =>
          handleUpdateData({ field: "phoneNumber", value })
        }
        mode="numeric"
        key="phoneNumber"
      />

      <Button onPress={handleSubmit} title="Save" />
    </Container>
  );
};

export default Profile;
