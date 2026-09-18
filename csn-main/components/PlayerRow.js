import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlayerRow({
  Number,
  "First Name": firstName,
  "Last Name": lastName,
  Height,
  Position,
  Year,
  "Hometown / Previous School": hometown
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{Number}</Text>
      <Text style={styles.cell}>{firstName}</Text>
      <Text style={styles.cell}>{lastName}</Text>
      <Text style={styles.cell}>{Height}</Text>
      <Text style={styles.cell}>{Position}</Text>
      <Text style={styles.cell}>{Year}</Text>
      <Text style={styles.cell}>{hometown}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap" },
  cell: { marginRight: 10, fontSize: 12 }
});