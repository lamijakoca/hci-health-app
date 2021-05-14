import { Container, Content, Header, List, ListItem, Footer, FooterTab, Icon, Button, Right, Left } from 'native-base';
import * as React from 'react';
import { StyleSheet, Text} from 'react-native';

function Browse({navigation}){
    return(
        <Container>
            <Header style={style.head}>
                <Text style={style.h2}> Health </Text>
            </Header>
            <Content>
                <List>
                    <ListItem onPress={() => navigation.push('Activity')}>
                        <Left>
                            <Icon name="bicycle"/>
                            <Text style={style.text}>Activity</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon name="nutrition"/>
                            <Text style={style.text}>Nutrition</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon name="body"/>
                            <Text style={style.text}>Body Measurements</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Icon name="alarm"/>
                            <Text style={style.text}>Sleep</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward'/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => navigation.push('Symptoms')}>
                        <Left>
                            <Icon name="medkit"/>
                            <Text style={style.text}>Symptoms</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward'/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}

const style = StyleSheet.create({
    head: {
        backgroundColor: '#fff',
        borderBottomColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: '5%'
    },
    view: {
        justifyContent: "flex-start",
        
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        paddingLeft: '3%',
        paddingTop: '1%'
    }
})

export default Browse;