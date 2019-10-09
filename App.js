import React from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, SafeAreaView, Dimensions} from 'react-native';
import { Images, Profiles, Metrics } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, styles.lightBackground]}>

        <View style={styles.navBar}>
          <Image style={{height: Metrics.images.large, width: Metrics.images.large, tintColor: '#C5C5C5', resizeMode: 'contain', marginLeft: 10}} source={Images.settings} accessibilityLabel={"Settings icon"} />
          <Image style={{height: 90, width: 90, resizeMode: 'contain'}} source={Images.logo} accessibilityLabel={"Tinder logo"}/>
          <Image style={{height: Metrics.images.medium, width: Metrics.images.medium, tintColor: '#C5C5C5', resizeMode: 'contain', marginRight: 10}} source={Images.chat} accessibilityLabel={"Chat icon"} />
        </View>


        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.profileCard}>
            <Image style = { {height: Dimensions.get('window').width - 100, width: Dimensions.get('window').width - 100, resizeMode: 'contain'} } source={this.state.profileImage} accessibilityLabel={"The profile picture of a potential Tinder match"}/>
            <View style={styles.textBox}>
                <Text style={ {fontSize: 24, fontWeight: 'bold'} }> {this.state.name + ","} </Text>
                <Text style={ {fontSize: 24} }>{this.state.age}</Text>
            </View>
            <View style={styles.textBox}>
                <Text style={ {fontSize: 16, color: 'grey', marginBottom: 5} }> {this.state.occupation}</Text>
            </View>
          </View>
        </View>



        <View style={styles.footer}>
            <View style={styles.btnWrapper}>
              <Image style={styles.circularBtn} source={Images.rewind} accessibilityLabel={"Rewind button"}/>
            </View>

            <View style={styles.btnWrapperLarge}>
              <Image style={styles.circularBtnLarge} source={Images.nope} accessibilityLabel={"Nope button"} />
            </View>

            <View style={styles.btnWrapper}>
              <Image style={styles.circularBtn} source={Images.boost} accessibilityLabel={"Boost button"} />
            </View>

            <View style={styles.btnWrapperLarge}>
              <Image style={styles.circularBtnLarge} source={Images.like} accessibilityLabel={"Like button"} />
            </View>

            <View style={styles.btnWrapper}>
              <Image style={styles.circularBtn} source={Images.superLike} accessibilityLabel={"Super Like button"} />
            </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBackground: {
    backgroundColor: '#EFECEC' // light grey
  },
  navBar: {
    ...Platform.select({
      ios: {
        height: 44,
      },
      android: {
        height: 56
      },
    }),
    borderBottomWidth: 2,
    borderColor: '#C5C5C5', // grey color from the spec
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  profileCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#C5C5C5', // grey color from the spec
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white'
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30
  },
  btnWrapper: {
    backgroundColor: 'white',
    borderRadius: Metrics.icons.small / 2
  },
  circularBtn: {
    height: Metrics.icons.small,
    width: Metrics.icons.small,
    resizeMode: 'contain',
    margin: 3
  },
  btnWrapperLarge: {
    backgroundColor: 'white',
    borderRadius: Metrics.icons.medium / 2
  },
  circularBtnLarge: {
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
    resizeMode: 'contain',
    margin: 4
  }
});
