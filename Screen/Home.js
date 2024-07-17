import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

function Home(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{ color: '#c0c0c0', fontWeight: 'bold', paddingLeft: 5 }}>
              Lets have some Fun!
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 20,
                color: 'black',
                paddingLeft: 5,
              }}>
              BoredAPP
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                marginLeft: 125,
                marginTop: 10,
              }}
              source={{
                uri: 'https://images.vexels.com/media/users/3/134643/isolated/preview/f967dff67c513d21ebd6375982054b55-laugh-emoji-emoticon-smile.png?w=360',
              }}
            />
            
          </View>
        </View>

         <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                marginLeft: 100,
                marginTop: 10,
              }}
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b49cbd6259597572ab74a0d31a86e756',
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Programming');
          }}>
          <Text style={styles.buttontext}>Programming Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Quote');
          }}>
          <Text style={styles.buttontext}>Motivate Me Button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Bored');
          }}>
          <Text style={styles.buttontext}>*NEW* Cure Boredom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Dog');
          }}>
          <Text style={styles.buttontext}>Random Dog Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Cat');
          }}>
          <Text style={styles.buttontext}>Random Cat FACTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('BaconIpsum');
          }}>
          <Text style={styles.buttontext}>BaconIpsum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Bitcoin');
          }}>
          <Text style={styles.buttontext}>Bitcoin</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,

    paddingTop: 50,
    paddingRight: 20,
  },
  gif: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#6495ed',

    width: '85%',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: '2%',
    fontSize: 27,
    marginTop: '5%',
    alignItems: 'center',
  },
  buttontext: {
    color: 'black',

    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
export default Home;
