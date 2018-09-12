import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dialog: {
    flex: 1,
    alignItems: 'center'
  },
  dialogOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  dialogContent: {
    elevation: 5,
    marginTop: 150,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden'
  },
  dialogTitle: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  dialogTitleText: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'rgb(3,3,3)',
  },
  dialogBody: {
    paddingHorizontal: 10
  },
  dialogInput: {
    height: 100,
    fontSize: 16,
  },
  dialogFooter: {
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  dialogAction: {
    flex: 1,
    padding: 15
  },
  dialogActionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#006dbf'
  }
});
