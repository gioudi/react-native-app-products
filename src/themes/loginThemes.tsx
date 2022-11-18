import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  appFormContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  appTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  appLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  appTextInput: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
  },
  appTextInputIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  appContainerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButton: {
    display: 'flex',
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
  },
  appButton__Text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  registerButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
