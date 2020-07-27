import * as Yup from 'yup'

const schema = Yup.object().shape( {
  cep: Yup.string().min(8, 'No mínimo 8 números').max(8, 'No máximo 8 números').required( 'Campo CEP é obrigátorio' ),
  address: Yup.string().required( 'Campo Rua é obrigátorio' ),
  number: Yup.string().required( 'Campo número é obrigátorio' ),
  neighborhood: Yup.string().required( 'Campo Bairro é obrigátorio' ),
  uf: Yup.string().required( 'Campo Uf é obrigátorio' ),
  city: Yup.string().required( 'Campo cidade é obrigátorio' ),
} )

export default schema