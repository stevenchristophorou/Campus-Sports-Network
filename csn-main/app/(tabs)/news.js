import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FILTERS = ["all", "espn", "ncaa", "cbs"];

const DATA = [
  // CBS
  {
    id: "1",
    source: "cbs",
    title:
      "Women's basketball transfer portal tracker: Addy Brown joins UCLA, Audi Crooks to Oklahoma State",
    image:
      "https://sportshub.cbsistatic.com/i/r/2026/04/20/e5f04746-c703-437f-9593-e7454477be97/thumbnail/640x360/9cb556ce7911c2377f86b5c680128f0b/audi.jpg",
    url: "https://www.cbssports.com/womens-college-basketball/news/womens-college-basketball-transfer-portal-tracker-2026/",
  },
  {
    id: "2",
    source: "cbs",
    title:
      "Texas women's basketball facing major roster turnover after Final Four heartbreak",
    image:
      "https://sportshub.cbsistatic.com/i/r/2026/04/09/06de275a-526f-49a6-908a-e561c3105b28/thumbnail/770x433/ece3505bba15c7fa093bbf56d107d870/vic-schaefer-getty.png",
    url: "https://www.cbssports.com/womens-college-basketball/news/texas-womens-basketball-roster-turnover-transfer-portal-vic-schaefer/",
  },
  {
    id: "3",
    source: "cbs",
    title:
      "Rocky times on Rocky Top: Tennessee women's basketball to lose all starters",
    image:
      "https://sportshub.cbsistatic.com/i/r/2026/04/07/7da35a7e-b98b-421f-8991-8957fb81794f/thumbnail/770x433/6feb1562719137f2e765c7476239e8f1/tennesseebasketballkimcaldwell.jpg",
    url: "https://www.cbssports.com/womens-college-basketball/news/tennessee-womens-basketball-transfer-portal-loi-release/",
  },
  {
    id: "4",
    source: "cbs",
    title: "Undefeated UConn upset by South Carolina in women's Final Four",
    image:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2026/04/04/a434e44a-6080-467e-bfe0-47ec4b002942/thumbnail/1240x826/380cffb23c71e956513a1e8c6731f162/ap26094000669082.jpg",
    url: "https://www.cbsnews.com/news/undefeated-uconn-upset-south-carolina-womens-final-four/",
  },
  {
    id: "5",
    source: "cbs",
    title:
      "Audi Crooks transfers to Oklahoma State: Top player leaves Iowa State",
    image:
      "https://sportshub.cbsistatic.com/i/r/2026/04/11/049c548f-1acb-45da-81e3-d4d53bb1b537/thumbnail/770x433/cf13fc67e99595b77acd589c8fb0ec38/audi-crooks-transfer.png",
    url: "https://www.cbssports.com/womens-college-basketball/news/audi-crooks-transfer-oklahoma-state/",
  },
  {
    id: "6",
    source: "cbs",
    title:
      "How UCLA's seniors went out on top with national title win",
    image:
      "https://i.ytimg.com/vi/vFuYGD0fUvo/maxresdefault.jpg",
    url: "https://www.cbssports.com/womens-college-basketball/news/ucla-seniors-womens-national-championship-lauren-betts-kiki-rice/",
  },
  {
    id: "7",
    source: "cbs",
    title:
      "Women's college basketball transfer portal rankings",
    image:
      "https://sportshub.cbsistatic.com/i/r/2026/04/06/11df906b-d781-4661-a397-9e6306dd5ead/thumbnail/770x433/4437d0da598671d379d64b005f03f7c1/addy-brown-audi-crooks-getty.png",
    url: "https://www.cbssports.com/womens-college-basketball/news/womens-college-basketball-transfer-portal-rankings/",
  },

  // ESPN
  {
    id: "8",
    source: "espn",
    title:
      "Kentucky nabs Florida transfer Me'Arah O'Neal",
    image:
      "https://a.espncdn.com/photo/2026/0427/r1650124_1296x729_16-9.jpg",
    url: "https://www.espn.com/womens-college-basketball/story/_/id/48611970/kentucky-nabs-florida-transfer-mearah-oneal-shaq-daughter",
  },
  {
    id: "9",
    source: "espn",
    title:
      "Bueckers hopes focus can be on Fudd as a basketball player",
    image:
      "https://a.espncdn.com/photo/2026/0427/r1650080_1296x729_16-9.jpg",
    url: "https://www.espn.com/wnba/story/_/id/48611475/bueckers-hopes-focus-fudd-basketball-player",
  },
  {
    id: "10",
    source: "espn",
    title:
      "Women's NCAA basketball transfer rankings for 2026-27 season",
    image:
      "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0408%2Fr1640563_1296x729_16%2D9.jpg",
    url: "https://www.espn.com/womens-college-basketball/story/_/id/48416462/women-ncaa-basketball-transfer-portal-player-rankings-2026-27-season",
  },
  {
    id: "11",
    source: "espn",
    title: "What colleges have the most No. 1 WNBA draft picks?",
    image:
      "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0414%2Fr1643170_1296x729_16%2D9.jpg",
    url: "https://www.espn.com/wnba/story/_/id/44318098/what-colleges-most-no-1-wnba-draft-picks",
  },
  {
    id: "13",
    source: "espn",
    title:
      "NCAA women's basketball Way-Too-Early 2026-27 Top 25 rankings",
    image:
      "https://media.newyorker.com/photos/66115b11ed520115c4e52664/2:3/w_1142,h_1713,c_limit/AP24097061825588.jpg",
    url: "https://www.espn.com/womens-college-basketball/story/_/id/48399414/ncaa-womens-basketball-2026-27-way-too-early-top-25-rankings",
  },

  // NCAA
  {
    id: "14",
    source: "ncaa",
    title: "Top blocks from the 2026 NCAA women's basketball tournament",
    image:
      "https://www.ncaa.com/sites/default/files/public/thumbnails/2026-04/best-blocks-wbb.jpg",
    url: "https://www.ncaa.com/video/basketball-women/2026-04-19/top-blocks-2026-ncaa-womens-basketball-tournament",
  },
  {
    id: "16",
    source: "ncaa",
    title: "How undefeated teams do in the NCAA tournament",
    image:
      "https://www.ncaa.com/_flysystem/public-s3/images/2024-04/2024-South-Carolina-Title.jpg",
    url: "https://www.ncaa.com/news/basketball-women/article/2026-04-03/how-undefeated-teams-do-ncaa-womens-basketball-tournament",
  },
  {
    id: "17",
    source: "ncaa",
    title: "All-time best performances in NCAA women's tournament",
    image:
      "https://i.ytimg.com/vi/g13zFnhOSBE/maxresdefault.jpg",
    url: "https://www.ncaa.com/news/basketball-women/article/2026-02-25/all-time-best-performances-ncaa-womens-basketball-tournament",
  },
  
];

export default function NewsScreen() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return DATA;
    return DATA.filter((item) => item.source === filter);
  }, [filter]);

  return (
    <View style={styles.container}>
      {/* FILTER BUTTONS */}
      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <Pressable
            key={f}
            onPress={() => setFilter(f)}
            style={[styles.btn, filter === f && styles.activeBtn]}
          >
            <Text style={[styles.btnText, filter === f && styles.activeText]}>
              {f.toUpperCase()}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => Linking.openURL(item.url)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.text}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.source}>{item.source.toUpperCase()}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eee", paddingTop: 50 },

  filters: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  btn: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },

  activeBtn: { backgroundColor: "#C05F30" },

  btnText: { fontWeight: "bold" },
  activeText: { color: "#fff" },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  image: { width: 120, height: 100 },

  text: { flex: 1, padding: 10 },

  title: { fontWeight: "bold" },
  source: { color: "gray", marginTop: 5 },
});