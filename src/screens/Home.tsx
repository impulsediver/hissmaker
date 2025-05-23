import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import { BannerAdvertisement, LanguageSelector } from "../components";
import { useLanguage } from "../languages";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackNavigationParams } from "../navigation";

/** */
export function HomeScreen({
  navigation,
}: NativeStackScreenProps<AppStackNavigationParams, "Home">) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  /** */
  function handlePress() {
    setModalVisible(true);

    // if (!hasAccepted) {
    //   setShowModal(true);
    // } else {
    //   hissSound.play();
    // }
  }

  /** */
  function onPressConfirm() {
    setModalVisible(false);

    // setHasAccepted(true);
    // setShowModal(false);
    // hissSound.play();
  }

  /** */
  function onPressCancel() {
    setModalVisible(false);
  }

  /** */
  function gotoRecordingScreen() {
    navigation.navigate("Recording");
  }

  return (
    <View style={styles.container}>
      <LanguageSelector />

      <View style={styles.contentContainer}>
        <Pressable style={styles.catButton} onPress={handlePress}>
          {/* <Image source={require('../assets/angry_cat.png')} style={styles.catImage} /> */}
        </Pressable>
      </View>

      <TouchableOpacity
        onPress={gotoRecordingScreen}
        style={{
          alignSelf: "center",
          backgroundColor: "#e6e6e6",
          paddingVertical: 12,
          paddingHorizontal: 18,
          marginBottom: 24,
          borderRadius: 100,
        }}
      >
        <Text>Go to RecordingScreen</Text>
      </TouchableOpacity>

      <BannerAdvertisement />

      <ConfirmModal
        modalVisible={modalVisible}
        onPressConfirm={onPressConfirm}
        onPressCancel={onPressCancel}
      />
    </View>
  );
}

/** */
function ConfirmModal({
  modalVisible,
  onPressConfirm,
  onPressCancel,
}: {
  modalVisible: boolean;
  onPressConfirm: () => void;
  onPressCancel: () => void;
}) {
  const { getLocalizedText } = useLanguage();

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            {getLocalizedText("home.modal.content")}
          </Text>
          <View style={styles.modalButtons}>
            <Pressable style={styles.modalButton} onPress={onPressConfirm}>
              <Text>이해했다냥</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={onPressCancel}>
              <Text>잠시 마음의 준비 좀..</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  catButton: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  catImage: { width: 200, height: 200, resizeMode: "cover" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: { marginBottom: 20, textAlign: "center" },
  modalButtons: { flexDirection: "row", gap: 10 },
  modalButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 5,
    borderRadius: 6,
  },
});
