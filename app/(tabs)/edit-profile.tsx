import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as DocumentPicker from "expo-document-picker";
import Container from "@/components/Container";
import { Toast } from "expo-react-native-toastify";
import IconImage from "@/assets/images/react-logo.png";
import { useDispatch, useSelector } from "react-redux";
import InputText from "@/components/controlledComponents/InputText";
import { updateUserDetails } from "@/store/actions/user_profile";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome } from "@expo/vector-icons";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState<any>({
    userImage: null,
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    birthDate: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const userData = useSelector((state: any) => state.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserDetails(userData?.userDetails);
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

  const handleDateConfirm = (selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setUserDetails((prev: any) => ({
        ...prev,
        birthDate: selectedDate.toISOString().split("T")[0],
      }));
    }
  };

  const handleSubmit = () => {
    dispatch(updateUserDetails(userDetails, userData));
    Toast.success("User Profile Updated Successfully", "bottom");
  };

  const handleImagePicker = async () => {
    const imageData: any = await DocumentPicker.getDocumentAsync();
    const imagefile = imageData?.assets?.[0];
    setUserDetails((prev: any) => ({
      ...prev,
      userImage: imagefile,
    }));
  };
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image
          source={userDetails?.userImage || IconImage}
          style={styles.image}
        />
        <TouchableOpacity onPress={() => handleImagePicker()}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "lightgrey",
              padding: 4,
              borderRadius: 50,
            }}
          >
            <FontAwesome name="pencil" size={10} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
      <InputText
        placeholder="First Name"
        value={userDetails?.firstName}
        onChange={(value: any) =>
          handleUpdateData({ field: "firstName", value })
        }
        key="firstName"
      />
      <InputText
        placeholder="Last Name"
        value={userDetails?.lastName}
        onChange={(value: any) =>
          handleUpdateData({ field: "lastName", value })
        }
        key="lastName"
      />
      <InputText
        placeholder="Email Id"
        value={userDetails?.emailAddress}
        onChange={(value: any) =>
          handleUpdateData({ field: "emailAddress", value })
        }
        mode="email"
        key="email"
      />
      <InputText
        placeholder="Phone No."
        value={userDetails?.phoneNumber}
        onChange={(value: any) =>
          handleUpdateData({ field: "phoneNumber", value })
        }
        mode="numeric"
        key="phoneNumber"
      />
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <ThemedText style={{ opacity: userDetails?.birthDate ? 1 : 0.5 }}>
          {userDetails?.birthDate || "DOB"}
        </ThemedText>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setShowDatePicker(false)}
      />

      <Button onPress={handleSubmit} title="Save" />
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
    borderRadius: 50,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: "grey",
    padding: 4,
    alignSelf: "center",
  },
  datePickerButton: {
    width: "100%",
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
  },
});

export default EditProfile;
