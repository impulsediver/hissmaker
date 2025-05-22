import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useLanguage, LANGUAGES } from "../languages";

/** */
export function LanguageSelector() {
  const { currentLanguage, setLanguage, getLocalizedText } = useLanguage();

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getLocalizedText("select")}</Text>
      {LANGUAGES.map(({ code, label }) => (
        <TouchableOpacity
          key={code}
          style={[
            styles.button,
            currentLanguage === code && styles.selectedButton,
          ]}
          onPress={() => changeLanguage(code)}
        >
          <Text
            style={[
              styles.buttonText,
              currentLanguage === code && styles.selectedButtonText,
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 8,
  },
  title: { marginRight: 8, fontSize: 16, fontWeight: "500" },
  button: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  buttonText: { fontSize: 14 },
  selectedButtonText: {
    color: "white",
  },
});
