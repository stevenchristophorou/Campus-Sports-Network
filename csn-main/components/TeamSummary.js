import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayerRow from "./PlayerRow";
import { SafeAreaView } from "react-native-safe-area-context";


export default function TeamSummary({ _id, team, players = [], ...stats }) {
  const allStats = { ...stats };
  delete allStats._id;
  delete allStats.team;
  delete allStats.idStr;

  return (
    <SafeAreaView style={styles.safe}>
    <View>
      <Text style={styles.title}>{team}</Text>

      {Object.entries(allStats)
      .filter(([key]) => key !== "_id" && key !== "team")
      .map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.cell}>{key}</Text>
          <Text style={styles.cell}>{value}</Text>
        </View>
      ))}

      {players.length > 0 && (
        <>
          <View style={styles.row}>
            <Text style={styles.header}>#</Text>
            <Text style={styles.header}>First</Text>
            <Text style={styles.header}>Last</Text>
            <Text style={styles.header}>Height</Text>
            <Text style={styles.header}>Pos</Text>
            <Text style={styles.header}>Year</Text>
            <Text style={styles.header}>Hometown</Text>
          </View>

          {players.map(player => (
            <PlayerRow {...player} key={player._id?.$oid || player.Number} />
          ))}
        </>
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
  row: { flexDirection: "row", flexWrap: "wrap" },
  cell: { marginRight: 10 },
  header: { marginRight: 10, fontWeight: "bold" }
});