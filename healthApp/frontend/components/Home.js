import { Button, Header, Container, Content, Footer, FooterTab, Icon, ListItem, Right, List, Left } from 'native-base';
import * as React from 'react';
import {StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import ProfilePicture from 'react-native-profile-picture';

function Home({navigation}){
    return(
        <Container>
            <Header style={styles.header}>
                {/* <ProfilePicture
                isPicture={false}
                width='35%'
                user="Lamija Koca"
                shape='circle'/> */}
            <Text>
                Username
                {"\n"}
                {"\n"}
                <Text>
                    Health Details
                </Text>
            </Text> 
            </Header>
            <Content>
                <ScrollView>
                    <Text style={styles.history}>Medical History</Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in 
                    </Text>
                </ScrollView>
            </Content>
            <Footer>
                <FooterTab>
                    <Button>
                        <Icon name="pulse"/>
                    </Button>
                    <Button onPress={() => navigation.push('Browse')}>
                        <Icon name="navigate"/>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
const styles = StyleSheet.create({
    header:{
       height: '55%',
       top: '5%',
       backgroundColor: '#fff',
       justifyContent: 'center',
    //    padding: '10%',
       display:'flex',
    //    borderBottomColor: '#fff'
    },
    username: {
        marginTop: '0%',
        marginBottom: '10%'
    },
    history: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    }
})
export default Home;