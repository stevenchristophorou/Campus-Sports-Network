import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 20;

export default function Media() {

  const media = [
    {
      id: '1',
      title: 'UCLA',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fuclabruins.com%2fimages%2f2026%2f4%2f5%2f_260405_NCAA_Championship_Game_South_Carolina_4232.jpg&height=1024&width=682&type=webp'
    },
    {
      id: '2',
      title: 'UCLA',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fuclabruins.com%2fimages%2f2026%2f4%2f3%2f0G8A0294_RT.jpg&height=682&width=1024&type=webp'
    },
    {
      id: '3',
      title: 'UCONN',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fuconnhuskies.com%2fimages%2f2026%2f2%2f27%2f20260226_WBBvsGoergetown_1705.jpg&height=1024&width=682&type=webp'
    },
    {
      id: '4',
      title: 'UCONN',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fuconnhuskies.com%2fimages%2f2026%2f3%2f8%2f20260308_WBBvsCreighton_BigEastSF__5036.jpg&height=682&width=1024&type=webp'
    },
    {
      id: '5',
      title: 'South Carolina',
      image: 'https://gamecocksonline.com/imgproxy/-OikTKkejt3iz63rJIY1N6O3W3zU1WGNW5C17FRxP6Q/fit/1280/1280/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dhbWVjb2Nrc29ubGluZS1jb20vMjAyMi8wNC8zNGRlNTdmOS1zYzRfMDM2X3dlYi5qcGc.png'
    },
    {
      id: '6',
      title: 'South Carolina',
      image: 'https://gamecocksonline.com/imgproxy/yDS_gF-dKqbXHVhdsaH9-cJ-YINOFY3_0MUZkKVaHKc/fit/3000/3000/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dhbWVjb2Nrc29ubGluZS1jb20vMjAyMi8wNC85ZTMyZWQ3Ny1zYzRfMDM4X3dlYi5qcGc.png'
    },
    {
      id: '7',
      title: 'University of Texas',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2ftexassports_com%2fimages%2f2023%2f3%2f11%2fbench_osu_e2E5R.jpg&height=576&width=1024&type=webp'
    },
    {
      id: '8',
      title: 'LSU',
      image: 'https://lsusports.net/imgproxy/tOOzdpbwHrP-20QzriSDV-jMcDoo1bCo1Sf34U_k0gU/fit/3000/3000/ce/0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xzdXNwb3J0cy1jb20vMjAyNi8wMy83OWIxNDI0NS13Yl9reV8wNzA0XzAzMjIyNl8xNDA0NTgwOC5qcGc.png'
    },
    {
      id: '9',
      title: 'Michigan',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmgoblue.com%2fimages%2f2026%2f3%2f28%2fMPHOTO-BKW26_NCAALouisville_164.jpg&height=682&width=1024&type=webp'
    },
    {
      id: '10',
      title: 'Duke',
      image: 'https://images.sidearmdev.com/fit?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fgoduke.com%2fimages%2f2026%2f3%2f8%2fAH_CHAMPGAME_63608.JPG&height=682&width=1024&type=webp'
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Overlay (replaces hover effect) */}
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
                <View style={styles.header}>
                  <Text style={styles.headerText}>Campus Sports Network</Text>
                </View>

      <FlatList
        data={media}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#dbe2e9',
  },

  container: {
    padding: 10,
  },

  card: {
    width: ITEM_SIZE,
    height: 200,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
  },

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