import { useEffect, useMemo, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RosterScreen() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://csn-1.onrender.com/players")
      .then((res) => res.json())
      .then(setPlayers);

    fetch("https://csn-1.onrender.com/teams")
      .then((res) => res.json())
      .then(setTeams);
  }, []);

  const sections = useMemo(() => {
    if (!players.length || !teams.length) return [];

    return teams.map((team) => {
      const teamPlayers = players.filter(
        (p) => p["Team ID"] === team._id
      );

      return {
        title: team.School,
        data: teamPlayers,
      };
    });
  }, [players, teams]);

  if (!teams.length) return <Text style={{ padding: 20 }}>Loading...</Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Campus Sports Network</Text>
      </View>
                  
      <SectionList
        sections={sections}
        keyExtractor={(item) => item._id}

        // ================= SECTION HEADER =================
        renderSectionHeader={({ section }) => (
          <View
            style={{
              padding: 12,
              backgroundColor: "#f2f2f2",
              borderBottomWidth: 1,
              borderColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {section.title}
            </Text>
          </View>
        )}

        // ================= MOBILE PLAYER CARD =================
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 10,
              marginVertical: 6,
              padding: 12,
              borderRadius: 10,

              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
              borderWidth: 1,
              borderColor: "#000",
            }}
          >
            {/* Name + Number */}
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              #{item.Number} {item["First Name"]} {item["Last Name"]}
            </Text>

            {/* Position + Year */}
            <Text style={{ marginTop: 4, color: "gray" }}>
              {item.Position} • {item.Year}
            </Text>

            {/* Hometown */}
            <Text style={{ marginTop: 4 }}>
              {item["Hometown / Previous School"]}
            </Text>
          </View>
        )}

        // optional spacing between sections
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
  },

  headerText: {
    color: '#FFC72C',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  }
  });
