import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const hotLinks = [
    { name: "1st year students Bachelors degree", link: "", key: 1 },
    { name: "2nd year students Bachelors degree", link: "", key: 2 },
    { name: "3rd year students Bachelors degree", link: "", key: 3 },
    { name: "1st year students Masters degree", link: "", key: 4 },
    { name: "2nd year students Masters degree", link: "", key: 5 },
    { name: "1st year students doctoral degree", link: "", key: 6 },
    { name: "Request for Appeal Review", link: "", key: 7 },
    { name: "Memo of Final exam instructions for AITU students 2020-2021", link: "", key: 8 },
    { name: "Application statements", link: "", key: 9 },
    { name: "Student's Guidebook", link: "", key: 10 },
    { name: "Regulations on the procedure for providing benefits and discounts", link: "", key: 11 },
    { name: "Military Department documents", link: "", key: 12 },
    { name: "Instructions for payment via Homebank", link: "", key: 13 },
    { name: "Academic policy", link: " ", key: 14 },
    { name: "Program and guidelines for master's teaching practice", link: " ", key: 15 },
    { name: "Темы дипломных работ", link: " ", key: 16 },
    { name: "Методические указания к выполнению дипломных работ", link: " ", key: 17 },
    { name: "Методические указания к выполнению магистерских диссертации", link: " ", key: 18 },
    { name: "Правила проведения итоговой аттестации обучающихся ТОО 'Astana IT University'", link: " ", key: 19 },
    { name: "Алгорит действии выпускника", link: " ", key: 20 },
    { name: "Для выпускного курса бакалавриата/магистратуры", link: " ", key: 21 },
    { name: "Шаблон для оформления дипломной работы/проекта", link: " ", key: 22 },
    { name: "Шаблон для оформления магистерской диссертации", link: " ", key: 23 },
    { name: "Оходной лист выпускника", link: " ", key: 24 }
  ]

  return (

    <View style={styles.container}>
      <View style={[styles.header, styles.androidShadow, styles.padding]} >
        <Text style = {{backgroundColor: 'green'}}>You are not logged in.(
          <TouchableOpacity onPress={() => console.log("Log in pressed")}>
            <Text style={styles.hyperLink}>Log in</Text>
          </TouchableOpacity>
          )</Text>
      </View>
      <ScrollView>
        <View style={styles.padding}>
          <View >
            <Image style={styles.logo} source={require('./assets/AITU_logo.png')} />
          </View>

          <View style={styles.horizontalLine}></View>

          <View>
            <Text>Student's hot links</Text>
            <View style={styles.body}>
              {hotLinks.map(item => (
                <View key={item.key}>
                  <TouchableOpacity onPress={() => console.log(item.key + " text pressed")}>
                    <Text style={styles.hyperLink}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )
              )}

            </View>

          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View >
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 10,

  },

  header: {
    width: '100%',
    height: 65,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },

  androidShadow: {
    elevation: 10,
  },

  padding: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },

  logo: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
  },

  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 15,
    marginBottom: 15,
  },

  hyperLink: {
    color: 'blue',
    marginTop: 3,
    backgroundColor: 'pink',
  },

  body: {
    alignItems: "baseline",
  }
});
