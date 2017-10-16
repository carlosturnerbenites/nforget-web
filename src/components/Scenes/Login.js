/**
 * Componenete Contenedor de Listado de Items
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {
	Container,
	Header,
	Text,
} from 'native-base';

export default class Login extends Component {

	// Definir valor inicial del state
	state = {}
	mounted(){
		console.log("lorem")
	}
	render() {
		return (
			<Container style={styles.container}>
				<Text>Login</Text>
			</Container>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	}
});