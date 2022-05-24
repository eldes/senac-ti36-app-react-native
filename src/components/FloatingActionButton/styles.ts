import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		right: 16,
		bottom: 16,
		backgroundColor: '#660000',
		width: 48,
		height: 48,
		borderRadius: 24,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
	},
});

export default styles;