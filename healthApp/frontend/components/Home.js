import { Button, Header, Container, Content, Footer, FooterTab, Icon } from 'native-base';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Home({navigation}){
    return(
        <Container>
            <Header style={styles.header}>
                <Text>Home page</Text>
            </Header>
            <Content/>
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
       backgroundColor: '#fff',
       borderBottomColor: '#fff'
    }
})
export default Home;