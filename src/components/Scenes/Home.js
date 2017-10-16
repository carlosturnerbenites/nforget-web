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
	Header
} from 'native-base';

// Componenete Listado de Items
import ItemsList from './../Items/List';

import { getItems } from './../../apiClient'


export default class Home extends Component {

	// Definir valor inicial del state
	state = {
		items: null, // [{id:1,name: 'Boku no Hero'}]
	}

	componentDidMount() {
		console.log("hola")
		getItems()
			.then(items => {console.info(items);this.setState({ items })} )
			.catch(err => console.error(err) );
	}

	render() {

		const items = this.state.items
		console.warn(items)

		return (
			<Container style={styles.container}>
				{!items && <ActivityIndicator size="large" />}
				{items && <ItemsList items={items} />}
			</Container>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	}
});