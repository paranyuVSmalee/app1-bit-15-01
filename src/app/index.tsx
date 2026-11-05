import {StyleSheet, Text, View, Image } from 'react-native';


export default function App(){
    return (
    <View style={mystyle.container}> 


        <Text style={mystyle.title}>Paranyu</Text>

        <Image
            source={require('@/assets/images/hee.jpg')}
            style={{
                width: 200,//กว้าง
                height: 200,//สูง
                borderRadius: 100,//โค้งของมุม
                borderWidth: 10,//ความกว้างของมุม
                borderColor: "Lightyellow"//สีของขอม
            }}
        />
        <Image
              source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g0PULnOZPOMfTcweVsmU5pf5dLYFRpTFn1-6i3ehS-SedRqL6d2bT5GH&s=10"}}
                    style={{
                        width: 200,//กว้าง
                        height: 200,//สูง
                        borderRadius: 100,//โค้งของมุม
                        borderWidth: 10,//ความกว้างของมุม
                        borderColor: "Lightblue"//สีของขอม
                    }}
                />
                <View style={{flexDirection: "row"}}>
                    <Text>🐈</Text>
                    <Text>🦮</Text>
                    <Text>🦆</Text>
                    <Text>🦅</Text>
                    <Text>🐻</Text>
                </View>
               
        </View>
    )
}

const mystyle = StyleSheet.create({
    container:{
        backgroundColor: "White",
        flex: 1,
        paddingTop: 80

    },
    title:{
        color: "purple",
        fontSize: 26,
        fontWeight: 700,
        textAlign: "center",
    }
})