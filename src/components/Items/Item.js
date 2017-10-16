/**
 * Componenete Item
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { 
	Text,
	Card,
	CardItem,
	Left,
	Body,
	Right,
} from 'native-base';

export default class Item extends Component {
	constructor(props) {
		super();

		// Definir valor inicial del state
		this.state = {
			item: props.item
		};
	}

	render() {
		const { img, name } = this.state.item
		return (
			<Card>
				<CardItem>
					<Body>
						<Left>
							<Image style={styles.img} source={{uri: img}}></Image>
						</Left>
						<Body>
							<Text style={styles.name}>{ name } lorem</Text>
						</Body>
						<Right>
							<Text note>time</Text>
						</Right>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: 50,
		height: 50,
	},
	name: {
		color: 'gray',
	}
});