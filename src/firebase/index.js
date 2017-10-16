import firebase from 'firebase';
import 'firebase/firestore';

import { apiKey, projectId, messagingSenderId } from './firebase.conf.json';

const config = {
	apiKey,
	authDomain: `${projectId}.firebaseapp.com`,
	databaseURL: `https://${projectId}.firebaseio.com`,
	projectId: `${projectId}`,
	storageBucket: `${projectId}.appspot.com`,
	messagingSenderId,
};

export default firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.firestore();

