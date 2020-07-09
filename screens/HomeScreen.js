import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../src/Button";
import Checkbox from "../src/Checkbox";
import Card from "../src/Card";
import theme from "../src/theme/index";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 10,
          marginHorizontal: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={styles.header}>Button Section</Text>
        <Button>Primary</Button>
        <Button color="info">info</Button>
        <Button color="success">success</Button>
        <Button color="warning">warning</Button>
        <Button color="error">error</Button>
        <Button capitalize loading>
          small size capitalize
        </Button>
        <Button round size="small" color="success" style={{ marginTop: 10 }}>
          round and small
        </Button>

        <Button round uppercase color="error">
          round uppercase
        </Button>

        <Text style={styles.header}>Checkbox Section</Text>

        <Checkbox
          color="primary"
          label="Primary Checkbox"
          labelStyle={{ fontSize: 18 }}
        />

        <Checkbox
          color="info"
          label="Info Checkbox"
          labelStyle={{ fontSize: 18 }}
        />
        <Checkbox
          color="error"
          label="Error Checkbox"
          labelStyle={{ fontSize: 18 }}
        />
        <Checkbox
          color="warning"
          label="Warning Checkbox"
          labelStyle={{ fontSize: 18 }}
        />
        <Checkbox
          color="success"
          label="Success Checkbox"
          labelStyle={{ fontSize: 18 }}
        />

        <Text style={styles.header}>Card Section</Text>

        <Card
          flex
          borderless
          title="MacIntosh"
          caption="Apple"
          location="Mumbai, IN"
          avatar="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202005131207"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
          image="https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=771&q=80"
        />

        {/* <Card
          flex
          style={styles.card}
          title="I Am a Demo Card with Radius"
          titleColor="#000"
          caption="This is a demo card"
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 250,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    textDecorationStyle: "dashed",
    fontWeight: "bold",
  },
});
