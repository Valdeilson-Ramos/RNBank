import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
      ],
      limite: 250,
      estudante: false,
    };
    this.enviarDados = this.enviarDados.bind(this);
  }
  enviarDados() {
    if (this.state.nome === '' || this.state.idade === '') {
      alert('Preencha todos os dados corretamente');
      return;
    }
    alert(
      'Conta Aberta com Sucesso!! \n\n' +
        'Nome: ' +
        this.state.nome +
        '\n' +
        'Idade: ' +
        this.state.idade +
        '\n' +
        'Sexo: ' +
        this.state.sexos[this.state.sexo].sexoNome +
        '\n' +
        'Limite Conta: ' +
        this.state.limite.toFixed(2) +
        '\n' +
        'Conta Estudante: ' +
        (this.state.estudante ? 'Ativo' : 'Inativo'),
    );
  }
  render() {
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} label={v.sexoNome} />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite Seu Nome"
            underlineColorAndroid="transparent"
            onChangeText={texto => this.setState({nome: texto})}
          />
          <Text style={styles.textoNome}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite Sua Idade"
            underlineColorAndroid="transparent"
            onChangeText={texto => this.setState({idade: texto})}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.sexoArea}>
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker
            style={styles.pickerSexo}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({sexo: itemValue})
            }>
            {sexoItems}
          </Picker>
        </View>
        <View style={styles.limiteArea}>
          <Text style={styles.textoNome}>Seu Limite</Text>
          <Text style={styles.limiteTexto}>{this.state.limite.toFixed(0)}</Text>
        </View>
        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor="#CF0000"
            minimumValue={250}
            maximumValue={4000}
            value={this.state.limite}
            onValueChange={limite => this.setState({limite: limite})}
          />
        </View>
        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante:</Text>
          <Switch
            style={{paddingTop: 15}}
            trackColor="#00c300"
            value={this.state.estudante}
            onValueChange={valorEstudante =>
              this.setState({estudante: valorEstudante})
            }
          />
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={this.enviarDados}
          underlayColor="#000000">
          <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  areaFormulario: {
    flexDirection: 'column',
    margin: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  sexoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  pickerSexo: {
    flex: 1,
  },
  limiteArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  limiteTexto: {
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaSlider: {},
  areaEstudante: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botao: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;
