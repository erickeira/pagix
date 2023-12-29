import React, { useState } from 'react'
import { Alert, Image, StyleSheet, View } from 'react-native'
import { supabase } from '../../utils'
import { Button, Input } from '@rneui/base'
import Logo from '../../assets/images/pagix_logo.png'
import DefaultButton from '../../components/defaultButton'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20, {width: '100%'}]}>
        <Image
            style={{
                width: 130,
                objectFit: 'contain',
                marginLeft: 10,
                marginBottom: 50
            }}
            source={Logo}
        />
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope',size: 16, color:'#fff' }}
          onChangeText={(text) => setEmail(text)}
          style={{color: '#fff'}}
          value={email}
          placeholder=""
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock',size: 18, color:'#fff'}}
          onChangeText={(text) => setPassword(text)}
          style={{color: '#fff'}}
          value={password}
          secureTextEntry={true}
          placeholder=""
          autoCapitalize={'none'}
        />
      </View>
        <DefaultButton titulo="Entrar" active disabled={loading} onPress={() => signInWithEmail()} />
        <DefaultButton titulo="Criar conta" disabled={loading} onPress={() => signUpWithEmail()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})