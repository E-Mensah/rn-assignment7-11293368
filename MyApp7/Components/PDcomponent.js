import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const PDcomponent = () => {
  return (
    <ScrollView style={{width: 390}}>
        <View style={{alignItems: 'center',}}>
            <View style={{marginBottom: 25, justifyContent: 'center', alignItems: 'center',}}>
                <Image source={require('../assets/Images/dress1.png')} style={{width: 340, height: 400,}}/>
            </View>
            <View style={{flexDirection: 'column', width: 320}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6}}>
                    <Text style={{textAlign: 'left', fontWeight: '600', letterSpacing: 5, fontSize: 18}}>LAMEREI</Text>
                    <View style={{justifyContent:'center', alignItems:'center', width: 15, height:15}}>
                        <Image source={require('../assets/Pics/Export.png')} style={{width:15, height:15, objectFit: 'contain'}} />
                    </View>
                </View>
                <Text style={{textAlign: 'left', fontWeight: '400', fontSize: 14, letterSpacing: 0, marginBottom: 5}}>
                    Recycle Boucle Knit Cardigan Pink
                </Text>
                <Text style={{textAlign: 'left', color: '#F88379', fontWeight: '500', fontSize: 20, marginBottom: 25}}>
                    $ 120
                </Text>
                <Text style={{fontWeight: '500', fontSize: 16, letterSpacing: 1, }}>MATERIALS </Text>
                <Text style={{width: 305, fontSize: 15, marginBottom: 20}}>
                    We  work  with  monitoring  programmes  to  ensure  compliance  with  safety,  health  and  quality  standards  for  our  products.
                </Text>
                
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 15}}>
                        <Image source={require('../assets/Pics/Do Not Bleach.png')} style={{width:23, height:23, objectFit: 'contain', alignSelf: 'center'}} />
                        <Text style={{fontSize: 14}}>Do not use bleach</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 15}}>
                        <Image source={require('../assets/Pics/Do Not Tumble Dry.png')} style={{width:23, height:23, objectFit: 'contain', alignSelf: 'center'}} />
                        <Text style={{fontSize: 14}}>Do not tumble dry</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 15}}>
                        <Image source={require('../assets/Pics/Do Not Wash.png')} style={{width:23, height:23, objectFit: 'contain', alignSelf: 'center'}} />
                        <Text style={{fontSize: 14}}>Dry clean with tetrachloroethylene</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 35}}>
                        <Image source={require('../assets/Pics/Iron Low Temperature.png')} style={{width:23, height:23, objectFit: 'contain', alignSelf: 'center'}} />
                        <Text style={{fontSize: 14}}>Iron at a maximum of 110°C/230°F</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 80, justifyContent: 'space-between', }}>
                        <View style={{flexDirection: 'row', gap: 10, paddingTop: 30, width: 295, borderStyle: 'solid', borderTopColor: 'lightgrey', borderTopWidth: 2 }}>
                            <Image source={require('../assets/Pics/Shipping.png')} style={{width:22, height:22, objectFit: 'contain',}}/>
                            <View>
                                <Text style={{fontWeight: '600', marginBottom: 6, fontSize:14}}>Free Flat Rate Shipping</Text>
                                <Text style={{marginBottom: 3, fontSize:14}}>Estimated to be delivered on</Text>
                                <Text style={{fontSize:14}}>09/11/2021 - 12/11/2021</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 30, marginLeft: 10}}>
                        <Image source={require('../assets/Pics/Up.png')} style={{width:25, height:25, objectFit: 'contain', }}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default PDcomponent
