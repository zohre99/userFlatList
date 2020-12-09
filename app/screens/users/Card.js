import React from "react";
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'

import theme from '../../config/Styles'

const { width } = Dimensions.get("window");
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * 0.7;

const CardView = ({ item }) => {

    return (
      <View style={styles.cardShadow}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.nameContainer}>
                    <AntDesign style={styles.userIcon} name="user" size={36} color={theme.PRIMARY_COLOR} />
                    
                    <View>
                      <Text style={styles.nameTxt}>{item.name}</Text>
                      <Text style={styles.usernameTxt}>{item.username}</Text>
                    </View>
                </View>
            </View>

            <ImageBackground style={styles.companyBack}
              source={require('../../../assets/42-2.jpg')}
              resizeMode={"cover"}
              blurRadius={0.8}
            >

              <View style={styles.companyContent}>
                <Text style={styles.companyName}>{item.company.name}</Text>

                <Text style={styles.companyCatchPhrase}>{item.company.catchPhrase}</Text>
              </View>

              <LinearGradient
                // colors={["#ffcccc", "#ffcccc"]}
                // colors={["#ffcc99", "#ffcc99"]}
                colors={["#669999", "#669999"]}
                // colors={["#666699", "#666699"]}
                // colors={["#0099cc", "#0099cc"]}
                // colors={["#3366cc", "#3366cc"]}
                // colors={["#99ccff", "#99ccff"]}
                // colors={["#ccffff", "#ccffff"]}
                // colors={["#ffff99", "#ffff99"]}
                // // colors={["#009999", "#009999"]}
                start={[0.1, 0.1]}
                end={[0.1, 0.1]}
                style={styles.companyBackShadow}
              />
            </ImageBackground>

            <View style={styles.contactContainer}>
              <View style={styles.contactInfo}>
                <Ionicons style={styles.contactInfoIcon} name="ios-mail" size={22} color={theme.PRIMARY_COLOR} />
                <Text style={styles.contactInfoTxt}>{item.email}</Text>
              </View>

              <View style={styles.contactInfo}>
                <FontAwesome style={styles.contactInfoIcon} name="phone" size={22} color={theme.PRIMARY_COLOR} />
                <Text style={styles.contactInfoTxt}>{item.phone}</Text>
              </View>

              <View style={styles.contactInfo}>
                <MaterialIcons style={styles.contactInfoIcon} name="location-on" size={22} color={theme.PRIMARY_COLOR} />
                <Text style={styles.contactInfoTxt}>{item.address.city}</Text>
              </View>
            </View>
        
            <TouchableOpacity style={styles.moreBtn}>
              <Text style={styles.moreTxt}>More Info</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 12,
    backgroundColor: theme.WHITE,
    shadowColor: theme.GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  companyBack: {
    width: "100%",
    height: 'auto',
  },
  companyBackShadow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyCatchPhrase: {
    color: theme.LIGHTER_COLOR,
    zIndex: 1,
  },
  companyContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  companyName: {
    color: theme.WHITE,
    fontSize: 26,
    fontWeight: "bold",
    zIndex: 1,
  },
  contactContainer: {
    margin: 15,
  },
  contactInfoIcon: {
    marginRight: 5,
  },
  contactInfo: {
    flexDirection: "row",
    marginBottom: 3,
  },
  contactInfoTxt: {
    color: theme.DARK_GRAY,
  },
  container: {
    width: CARD_WIDTH,
    height: 'auto',
    borderRadius: 12,
    backgroundColor: theme.WHITE,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    borderColor: theme.LIGHT_COLOR,
  },
  headerContainer: {
    margin: 15,
  },
  moreBtn: {
    width: "80%",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 20,
    backgroundColor: theme.PRIMARY_COLOR,
    alignSelf: "center",
  },
  moreTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.WHITE
  },
  nameContainer: {
    flexDirection: "row",
  },
  nameTxt: {
    color: theme.DARK_COLOR,
    fontWeight: "bold",
    fontSize: 17,
  },
  userIcon: {
    marginRight: 7,
  },
  usernameTxt: {
    color: theme.GRAY
  },
});

export default CardView;