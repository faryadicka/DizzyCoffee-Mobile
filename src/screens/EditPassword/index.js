import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import {View, Text, ToastAndroid, TextInput} from 'react-native';
import Toast from 'react-native-toast-message';
import {updatePasswordAxios} from '../../modules/user';
import Ion from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';

const EditPassword = () => {
  const [modal, setModal] = useState(false);
  const [match, setMatch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [eye, setEye] = useState({
    new: false,
    confirm: false,
  });
  const [password, setPassword] = useState({
    new: '',
    confirm: '',
  });
  const [message, setMessage] = useState({
    success: '',
    err: '',
  });
  const tokenRedux = useSelector(state => state.auth.dataLogin?.token);
  const handleSaveChanges = () => {
    const body = {
      newPassword: password.new,
    };
    if (password.new !== password.confirm) {
      setMatch(false);
      setIsError(true);
      return setMessage({...message, err: 'Password is not match!'});
    }
    updatePasswordAxios(body, tokenRedux)
      .then(res => {
        // console.log(res);
        setMatch(true);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: res.data?.message,
        });
        setPassword({
          new: '',
          confirm: '',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>
        Edit your password to be more secure.
      </Text>
      <Text>Your new password :</Text>
      <View style={styles.containerInput}>
        <TextInput
          value={password.new}
          secureTextEntry={!eye.new}
          placeholderTextColor="black"
          placeholder="Input your new password"
          style={styles.inputPass}
          onChangeText={input => setPassword({...password, new: input})}
        />
        <Ion
          onPress={() => {
            setEye({...eye, new: !eye.new});
          }}
          name={eye.new ? 'eye-outline' : 'eye-off-outline'}
          size={20}
        />
      </View>
      <Text>Your confirm password :</Text>
      <View style={styles.containerInput}>
        <TextInput
          value={password.confirm}
          secureTextEntry={!eye.confirm}
          placeholder="Input your confirm password"
          placeholderTextColor="black"
          style={styles.inputPass}
          onChangeText={input => setPassword({...password, confirm: input})}
        />
        <Ion
          onPress={() => {
            setEye({...eye, confirm: !eye.confirm});
          }}
          name={eye.confirm ? 'eye-outline' : 'eye-off-outline'}
          size={20}
        />
      </View>
      {!match ? (
        <>{isError ? <Text style={styles.errMsg}>{message.err}</Text> : null}</>
      ) : null}
      <Button buttonStyle={styles.btnSave} onPress={handleSaveChanges}>
        Save Changes
      </Button>
    </View>
  );
};

export default EditPassword;
