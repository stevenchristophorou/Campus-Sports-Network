import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TeamsScreen() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // SORT STATE
  const [sortKey, setSortKey] = useState("Rank");
  const [sortAsc, setSortAsc] = useState(true);

  const screenWidth = Dimensions.get("window").width;
  const isSmallScreen = screenWidth < 400;

  useEffect(() => {
    fetch("https://csn-1.onrender.com/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.log(err));
  }, []);

  if (!teams.length) return <Text style={{ padding: 20 }}>Loading...</Text>;

  // ---------- SORT FUNCTION ----------
  const sortTeams = (data) => {
    return [...data].sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];

      const numA = Number(valA);
      const numB = Number(valB);

      const isNumeric = !isNaN(numA) && !isNaN(numB);

      if (isNumeric) {
        return sortAsc ? numA - numB : numB - numA;
      } else {
        valA = (valA || "").toString();
        valB = (valB || "").toString();

        return sortAsc
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }
    });
  };

  const sortedTableTeams = sortTeams(teams);

  // ================= TOP 10 CHART =================
  const top10Teams = [...teams]
    .sort((a, b) => Number(a.Rank) - Number(b.Rank))
    .slice(0, 10);

  const maxRank = Math.max(...top10Teams.map((t) => Number(t.Rank)));

  const chartData = top10Teams.map((team, index) => ({
    value: Number(team.Rank),
    label: `${index + 1}`,
    onPress: () => setSelectedTeam(team),
  }));

  // ---------- COLUMN HEADERS ----------
  const columns = [
    { key: "School", label: "School" },
    { key: "Rank", label: "Rank" },
    { key: "Record", label: "Record" },
    { key: "Conference", label: "Conf" },
    { key: "Road", label: "Road" },
    { key: "Neutral", label: "Neutral" },
    { key: "Home", label: "Home" },
    { key: "Non- DIV I", label: "D1" },
    { key: "Prev", label: "Prev" },
  ];

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
                      <View style={styles.header}>
                        <Text style={styles.headerText}>Campus Sports Network</Text>
                      </View>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 10 }}>
          
          {/* ================= CHART ================= */}
          <LineChart
            data={chartData}
            width={screenWidth - 20}
            height={250}
            maxValue={maxRank}
            minValue={1}
            spacing={20}
            initialSpacing={20}
            thickness={2}
            noOfSections={maxRank}
            yAxisTextStyle={{ fontSize: 10 }}
            xAxisLabelTextStyle={{ color: "transparent" }}
            xAxisThickness={5}
            yAxisThickness={5}
            yAxisColor="#4f2c1d"
            xAxisColor="#4f2c1d"
            dataPointsColor="#ffb500"
            showDataPoints
            dataPointsRadius={7}
          />

          {/* ================= SELECTED TEAM ================= */}
          {selectedTeam && (
            <View style={{ marginTop: 0, alignItems: "center" }}>
              <Text style={{ fontSize: 32, fontWeight: "600" }}>
                {selectedTeam.School}
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                Rank: {selectedTeam.Rank}
              </Text>
            </View>
          )}

          {/* ================= TABLE / LIST ================= */}
          {isSmallScreen ? (
            // 📱 MOBILE CARD VIEW
            <FlatList
              data={sortedTableTeams}
              scrollEnabled={false}
              keyExtractor={(item) => item._id}
              contentContainerStyle={{ marginTop: 15 }}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: "#fff",
                    padding: 12,
                    marginBottom: 10,
                    borderRadius: 10,
                    width: screenWidth - 20,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 2,
                    borderWidth: 1,
                    borderColor: "#000",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {item.School}
                  </Text>

                  <Text>Rank: {item.Rank}</Text>
                  <Text>Record: {item.Record}</Text>
                  <Text>Conf: {item.Conference}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginTop: 5,
                    }}
                  >
                    <Text style={{ marginRight: 10 }}>
                      Home: {item.Home}
                    </Text>
                    <Text style={{ marginRight: 10 }}>
                      Road: {item.Road}
                    </Text>
                    <Text>Neutral: {item.Neutral}</Text>
                  </View>
                </View>
              )}
            />
          ) : (
            // 💻 TABLE VIEW
            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={{ minWidth: 700 }}>
                
                {/* HEADER */}
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#000",
                    paddingVertical: 10
                  }}
                >
                  {columns.map((col) => (
                    <Pressable
                      key={col.key}
                      onPress={() => handleSort(col.key)}
                    >
                      <Text
                        style={{
                          width: 90,
                          color: "#f5b700",
                          fontSize: 12,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {col.label}
                        {sortKey === col.key
                          ? sortAsc
                            ? " ▲"
                            : " ▼"
                          : ""}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                {/* ROWS */}
                <FlatList
                  data={sortedTableTeams}
                  scrollEnabled={false}
                  keyExtractor={(item) => item._id}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flexDirection: "row",
                        paddingVertical: 10,
                        borderBottomWidth: 1,
                        borderColor: "#ddd",
                        backgroundColor: "#fff",
                      }}
                    >
                      {columns.map((col) => (
                        <Text
                          key={col.key}
                          style={{ width: 90, textAlign: "center" }}
                        >
                          {item[col.key]}
                        </Text>
                      ))}
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          )}
        </View>
      </ScrollView>
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
