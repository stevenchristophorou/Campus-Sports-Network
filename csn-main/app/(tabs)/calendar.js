import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  const games = [
    {
      id: "1",
      teams: "South Carolina v UCLA",
      date: "Sunday 04/05",
    },
    {
      id: "2",
      teams: "Illinois State v Marshall",
      date: "Saturday 04/04",
    },
    {
      id: "3",
      teams: "South Carolina v UCONN",
      date: "Friday 04/03",
    },
    {
      id: "4",
      teams: "Texas v UCLA",
      date: "Friday 04/03",
    },
    {
      id: "5",
      teams: "Columbia v BYU",
      date: "Wednesday 04/01",
    },
    {
      id: "6",
      teams: "Marshall v Arkansas State",
      date: "Wednesday 04/01",
    },
    {
      id: "7",
      teams: "Illinois State v South Dakota",
      date: "Wednesday 04/01",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Campus Sports Network</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Calendar */}
        <View style={styles.calendar}>
          <Text style={styles.month}>‹ April 2026 ›</Text>

          <View style={styles.row}>
            {["Sun", "Mon", "Tues", "Wed", "Thur", "Sat"].map((d) => (
              <Text key={d} style={styles.weekday}>
                {d}
              </Text>
            ))}
          </View>

          <View style={styles.row}>
            {["01", "02", "03", "04", "05", "06"].map((d, i) => (
              <Text
                key={d}
                style={[styles.date, d === "04" && styles.activeDate]}
              >
                {d}
              </Text>
            ))}
          </View>
        </View>

        {/* Games */}
        {games.map((game) => (
          <View key={game.id} style={styles.card}>
            <Text style={styles.team}>{game.teams}</Text>

            <View style={styles.info}>
              <Text style={styles.gameText}>Game</Text>
              <Text style={styles.dateText}>{game.date}</Text>
              <Text style={styles.live}>Live</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Tickets</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
  },

  headerText: {
    color: "#FFC72C",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  calendar: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 10,
  },

  month: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  weekday: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },

  date: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 8,
  },

  activeDate: {
    backgroundColor: "#FFC72C",
    fontWeight: "bold",
    borderRadius: 6,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    backgroundColor: "white",
  },

  team: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFC72C",
    flex: 2,
  },

  info: {
    flex: 2,
    alignItems: "center",
  },

  gameText: {
    fontWeight: "bold",
  },

  dateText: {
    fontSize: 12,
  },

  live: {
    fontSize: 12,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  buttonText: {
    color: "#FFC72C",
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 2,
    borderTopColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },

  navItem: {
    textAlign: "center",
    fontSize: 14,
  },
});