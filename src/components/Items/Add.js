/**
 * Componenete Item Add
 */

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import { 
	Container,
	Header,
	Button,
	Item,
	Icon,
	Form,
	Input,
	Content,
} from 'native-base';

import { addItem } from './../../apiClient'

export default class Detail extends Component {
	constructor(props) {
		super();

		// Definir valor inicial del state
		this.state = {};
	}

	handleSaveItem(){
		addItem()
			.then(item => {})
			.catch(err => {});
	}

	render() {
		return (
			<Container>
				<Header>
					<Button 
						onPress={this.handleSaveItem}
						rounded
						success
					>
						<Icon name='ios-add' />
					</Button>
				</Header>
				<Content>
					<Form>

						<Item>
							<Icon active name='home' />
							<Input placeholder='Nombre'/>
						</Item>

					</Form>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	name: {
		color: 'gray',
	}
});