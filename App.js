import Header from '../Pet_Localization/src/components/Header'
import {View, StyleSheet, ImageBackground} from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageBgContainer} source={require('../Pet_Localization/assets/new_bg.png')} />
          <Header />
      </View>

  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageBgContainer:{
        flex: 1
    }
})
