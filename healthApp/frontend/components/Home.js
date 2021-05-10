import { Button, Header, Container, Content, Footer, FooterTab, Icon, ListItem, Right, List, Left, View } from 'native-base';
import * as React from 'react';
import {SafeAreaView, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import ProfilePicture from 'react-native-profile-picture';

function Home({navigation}){
    return(
        <Container>
            <Header style={styles.header}>
                <Icon name="person" style={styles.person}/>
            </Header>
            <Content>
                <List style={styles.lista}>
                    <ListItem style={styles.lista}>
                        <Text>
                            Date of birth
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Location
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Weight
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Height
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            Mobile
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Text>
                            E-mail
                        </Text>
                    </ListItem>
                </List>
                <ScrollView>
                    <Text style={styles.history}>Medical History</Text>
                    <Text style={styles.historytext}>
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
       top: '5%',
       marginBottom: '15%',
       backgroundColor: '#fff',
       justifyContent: 'center',
    //    padding: '10%',
       display:'flex',
    //    borderBottomColor: '#fff'
    },
    history: {
        marginTop: '15%',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 10
    },
    historytext: {
        padding: 10
    },
    person: {
        height: 50,
        marginBottom: '10%'
    }

})
export default Home;