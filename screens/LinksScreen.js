import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Input, Divider } from "../src";
import theme from "../src/theme/index";

export default function LinksScreen() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20 }}>
          Input Components
        </Text>
        <Input placeholder="regular" />
        <Input
          placeholder="theme"
          color={theme.COLORS.THEME}
          style={{ borderColor: theme.COLORS.THEME }}
          placeholderTextColor={theme.COLORS.THEME}
        />
        <Input
          placeholder="info"
          color={theme.COLORS.INFO}
          style={{ borderColor: theme.COLORS.INFO }}
          placeholderTextColor={theme.COLORS.INFO}
        />
        <Input
          placeholder="warning"
          color={theme.COLORS.WARNING}
          style={{ borderColor: theme.COLORS.WARNING }}
          placeholderTextColor={theme.COLORS.WARNING}
        />
        <Input
          placeholder="error"
          color={theme.COLORS.ERROR}
          style={{ borderColor: theme.COLORS.ERROR }}
          placeholderTextColor={theme.COLORS.ERROR}
        />
        <Input
          placeholder="success"
          color={theme.COLORS.SUCCESS}
          style={{ borderColor: theme.COLORS.SUCCESS }}
          placeholderTextColor={theme.COLORS.SUCCESS}
        />

        <Input placeholder="password" password viewPass />
        <Input placeholder="rounded input" rounded />
        {/* <Divider /> */}
      </ScrollView>
    </View>
  );
}
