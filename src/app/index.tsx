import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';


/**
 * หน้าหลักสำหรับแสดงข้อมูลโปรไฟล์ของผู้ใช้ ประกอบด้วยรูปโปรไฟล์ ชื่อ คำคม
 * และข้อมูลส่วนตัว ได้แก่ ห้องเรียน เลขที่ อีเมล และเบอร์โทรศัพท์
 * ด้านล่างจะแสดงหัวข้อภาพกิจกรรมพร้อมรูปภาพ 3 รูป
 *
 * ใช้ ScrollView เพื่อให้เลื่อนดูเนื้อหาได้เมื่อหน้าจอมีพื้นที่ไม่พอ
 * และใช้ mystyle กำหนดสี ขนาด การจัดวาง และระยะห่างขององค์ประกอบต่าง ๆ
 */
export default function App(){
    return (
    <ScrollView contentContainerStyle={mystyle.container}>


        {/* รูปโปรไฟล์ */}
        <Image
            source={require('@/assets/images/6911678186427.jpg')}
            style={{
                width: 150,//กว้าง
                height: 150,//สูง
                borderRadius: 100,//โค้งของมุม
                borderWidth: 5,//ความกว้างของมุม
                borderColor: 'black',//สีของขอม
                // marginLeft: 35,

            }}
        />

        {/* ชื่อและคำคม */}
        <Text style={mystyle.title}>ภรัณยู จารัตน์</Text>
        <Text style={mystyle.quote}>อย่าทำวันนี้ให้ดี เพราะเดี๋ยวพรุ่งนี้ไม่มีอะไรทำ</Text>

        {/* ข้อมูลส่วนตัว */}
        <View style={mystyle.card}>
          <Text style={mystyle.info}>ห้อง BIT.1/5 เลขที่ 1</Text>
          <Text style={mystyle.info}>Email pharanyu3179@gmail.com</Text>
          <Text style={mystyle.info}>Phone: 0994125013</Text>
        </View>


         {/* ภาพกิจกรรม */}
         <Text style={mystyle.heading}>ภาพกิจกรรม</Text>
         <View style={mystyle.row}>
           <Image
             source={{ uri: 'https://image.dogilike.com/shareimg/contentimg/2019/pungpond/1-19/Caring/2/chihuahua-11.jpg'}}
             style={mystyle.thumb}
             resizeMode="cover"
            />
            <Image
             source={{ uri: 'https://reptilehiso.com/wp-content/uploads/2024/02/sulcata-tortoise-reptilehiso.com_.jpg'}}
             style={mystyle.thumb}
             resizeMode='cover'
            />
            <Image
             source={{ uri: 'https://i.pinimg.com/236x/72/3f/cc/723fcc66750c81cab46137fe22fc956e.jpg'}}
             style={mystyle.thumb}
             resizeMode='cover'
            />
         </View>
    </ScrollView>
    )
}

// กำหนดรูปแบบและระยะห่างของแต่ละส่วน
const mystyle = StyleSheet.create({
    container:{
        backgroundColor: "",
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',

        // marginLeft: 90,

    },
    title:{
        color: "black",
        fontSize: 23,
        fontWeight: 700,
        textAlign: "center",
        // marginRight: 80,

    },
    quote: { fontSize: 12, color: '#918d8d', marginTop:4, textAlign: 'center'},
    card: {
        alignSelf: 'stretch',
        backgroundColor: '#a19e9e',
        borderRadius: 14,
        padding: 16,
        gap: 6,
        marginTop: 20,
        marginHorizontal: 100,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    info: { fontSize: 12, color: '#fff', textAlign: 'left'},
    heading: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 40,
        marginTop: 18,
        marginBottom: 8,
    },
    row: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
    },
    thumb: { width: 100, height: 100, borderRadius: 12,flexDirection: 'row', },

});