import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Food } from '../utils/types';
import FoodCard from '../reusables/foodCard';
import AntDesign from '@expo/vector-icons/AntDesign';


const foodData: Food[] =[
    {
        title: "KFC (Krispy Fried Chiken)",
        type: "food",
        image: "https://tse3.mm.bing.net/th/id/OIP.3X1NG2PHw4ZxkJS-V8pSAgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "Chiken Republic",
         type: "food",
        image: "https://tse4.mm.bing.net/th/id/OIP.opYeviaJ-DiH4zqVAZkqEgAAAA?w=474&h=474&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "Burger King",
         type: "food",
        image: "https://tse4.mm.bing.net/th/id/OIP.S8-7EC691ruzGip9b3IaDwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "Cold Stone",
         type: "food",
        image: "https://www.afrugalchick.com/wp-content/uploads/2020/03/cold-stone.jpg"
    },
    {
        title: "Dominos Pizza",
         type: "food",
        image: "https://wallpapers.com/images/hd/dominos-pizza-pepperoni-feast-cvm9v5hxd8a1eqzf.jpg"
    }
]

const types = ["All", "KFC", "burgerKing", "dominos" ];

export default function Homescreen() {
    const [selectedType, setSelectedGenre] = useState("All");
const router = useRouter();
const filterFoods = selectedType === "All" ? foodData : foodData.filter((food) => food.type === selectedType) 

    return (
        <SafeAreaView style={styles.body}>

          <TouchableOpacity style={styles.safearea}>
            <Text style={styles.firstt}> Search </Text>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>

          <FlatList
             data={filterFoods}
             keyExtractor={(item) => item.title}
             renderItem={({ item}) => (
                <FoodCard food={item} onPress={() => router.push(`/protected/foodDetails`)} />
             )}
          />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   body: {
      backgroundColor: '#FFE5B4'
   },

   safearea: {
    backgroundColor: '#7FFF00',
    height: 40,
    width:180,
    borderRadius: 30,
   marginTop: 20,
   marginLeft: 90,
   borderWidth: 2,
   borderColor: 'black'
   },

   firstt: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    padding: 6,
    marginLeft: 30
   }

})