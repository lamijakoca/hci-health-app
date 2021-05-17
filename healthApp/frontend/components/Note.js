import { Text, Container, Content, Card, CardItem, Button, Footer } from 'native-base';
import {StyleSheet} from 'react-native';
import React from 'react';

function Note(){
    return(
        <Container style={styles.container}>
            <Content>
                <Card style={styles.card}>
                    <CardItem header>
                            <Text>
                                Ovaj header bi mogao da bude lep
                            </Text>
                    </CardItem>
                    <CardItem>
                            <Text>
                                Plain text
                            </Text>
                    </CardItem>
                    <CardItem footer>
                        <Text>
                            Vreme i datum neka ima
                        </Text>
                    </CardItem>
                </Card>
           </Content>
           <Footer style={styles.footer}>
                <Button transparent>
                    <Text>
                        Save
                    </Text>
                </Button>
                <Button bordered>
                    <Text>
                        Cancel
                    </Text>
                </Button>
           </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        textAlign: 'center',
    },
    card: {
        top: '10%',
        marginLeft: '2%',
        marginRight: '2%'
    },
    footer: {
        // top:'50%'
    }
})
export default Note;