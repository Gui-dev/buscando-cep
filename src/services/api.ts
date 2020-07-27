import axios from 'axios'

const viaCep = ( cep: string ) => {

  return axios.get( `https://viacep.com.br/ws/${cep}/json` )
}

export default viaCep