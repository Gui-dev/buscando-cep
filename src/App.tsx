import React, { ChangeEvent } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import GlobalStyle from './GlobalStyle'
import { Container } from './style'

import viaCep from './services/api'
import schema from './validation'

interface IValues {
  cep: string,
  address: string,
  number?: string,
  neighborhood?: string,
  uf?: string,
  city?: string,
}

function App() {

  const initialValues: IValues = {
    cep: '',
    address: '',
    number: '',
    neighborhood: '',
    uf: '',
    city: ''
  }

  const handleOnBlurCEP = async ( 
    event: ChangeEvent<HTMLInputElement>, setFieldValue: any ) => {
    const { value } = event.target
    const cep = value.replace( '-', '' )

    try {
      const { data } = await viaCep( cep ) 
      setFieldValue( 'address', data?.logradouro )
      setFieldValue( 'neighborhood', data?.bairro )
      setFieldValue( 'uf', data?.uf )
      setFieldValue( 'city', data?.localidade )
    } catch {
      console.log( 'Erro: Esse CEP não existe' )
    }
  }

  const handleSubmit = ( values: any ) => {
    alert( JSON.stringify( values, null, 4 ) )
  }
  

  return (
    <Container>
      <GlobalStyle />
      <h1>Informe seus dados</h1>

      <Formik 
        initialValues={ initialValues }
        onSubmit={ handleSubmit }
        validationSchema={ schema }
      >
        { ( { values, isValid, handleChange, setFieldValue } ) => (

          <Form className="form">
            <div className="form-group">
              <div>
                <Field 
                  type="text" 
                  name="cep" 
                  className="input" 
                  placeholder="Digite seu CEP"
                  value={ values.cep }
                  onChange={ handleChange }
                  onBlur={ ( event: ChangeEvent<HTMLInputElement> ) => handleOnBlurCEP( event, setFieldValue ) }
                />
              </div>
              <div className="errorMessage">
                <ErrorMessage name="cep"/>
              </div>
            </div>

            <div className="form-group">
              <div>
                <Field 
                  type="text" 
                  name="address" 
                  className="input" 
                  placeholder="Digite seu endereço"
                  value={ values.address }
                  onChange={ handleChange }
                />
              </div>
              <div className="errorMessage">
                <ErrorMessage name="address"/>
              </div>    
            </div>
   
            <div className="form-group">
              <div>
                <Field 
                  type="text" 
                  name="number" 
                  className="input" 
                  placeholder="Digite seu número"
                  value={ values.number}
                  onChange={ handleChange }
                />
              </div>
              <div className="errorMessage">
                <ErrorMessage name="number"/>
              </div>    
            </div>
         
            <div className="form-group">
              <div>
                <Field 
                  type="text" 
                  name="neighborhood" 
                  className="input" 
                  placeholder="Digite seu bairro"
                  value={ values.neighborhood }
                  onChange={ handleChange }
                />
              </div>
              <div className="errorMessage">
                <ErrorMessage name="neighborhood"/>
              </div>    
            </div>

            <div className="form-group">
              <div>
                <Field 
                  component="select"
                  name="uf" 
                  className="input" 
                  placeholder="Digite seu Estado"
                  value={ values.uf }
                  onChange={ handleChange }
                >
                  <option value={-1}>Selecione o Estado</option>
                  <option value="SP">São Paulo</option>
                </Field>
              </div>
              <div className="errorMessage">
                <ErrorMessage name="uf"/>
              </div>    
            </div>

            <div className="form-group">
              <div>
                <Field 
                  type="text" 
                  name="city" 
                  className="input" 
                  placeholder="Digite sua cidade"
                  value={ values.city }
                  onChange={ handleChange }
                />
              </div>
              <div className="errorMessage">
                <ErrorMessage name="city"/>
              </div>    
            </div>

            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>

        ) }
      </Formik>

      
    </Container>
  )
}

export default App
