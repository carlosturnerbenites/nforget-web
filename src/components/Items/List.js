/**
 * Componenete Listado de Items
 */

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import { 
	H1,
	List,
	ListItem,
	Container,
	Header,
	Footer,
	Right,
	Button,
	Icon,
	Content,
	Text,
} from 'native-base';

// Componente de Item de paciente
import Item from './Item'

export default class ItemsList extends Component {
	constructor(props) {
		super();

		// Definir valor inicial del state
		this.state = {
			items: props.items
		};
	}

	handleAddItem() {
		Actions.addItem()
	}

	handleItemPress(item) {
		Actions.detailItem({ item })
	}
	
	render() {
		return(
			<Container>
				<Header>
					<H1> Listado </H1>
				</Header>
				<Content>
					<List
						dataArray={this.state.items}
						renderRow={(item) =>
							<ListItem onPress={() => this.handleItemPress(item)}>
								<Item
									item={item}
									key={item.id.toString()}
								/>
							</ListItem>
						}
					></List>
				</Content>
				<Footer transparent>
					<Right>
						<Button 
							onPress={this.handleAddItem}
							rounded
							success
						>
							<Icon name='ios-add' />
						</Button>
					</Right>
				</Footer>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	border: {
		borderBottomWidth: 15,
		borderBottomColor: 'red',
	}
})