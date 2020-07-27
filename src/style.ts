import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #EB3349;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F45C43, #EB3349);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F45C43, #EB3349); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h1 {
    font-size: 1.9rem;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 1rem;
    background-color: #EB3349;
    box-shadow: 0 10px 10px -5px;

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;

      .input {
        font-size: 1.5rem;
        color: #FFF;
        width: 100%;
        align-self: stretch;
        padding: 1rem;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #FFF;


        &::placeholder {
          color: #CCC;
        }
      }

      .errorMessage {
        font-size: 1.3rem;
        color: #FFF;
        margin-top: 0.3rem;
      }
    }

    button {
      font-size: 1.6rem;
      font-weight: bold;
      color: #FFF;
      width: 85%;
      padding: 0.5rem 1.5rem;
      background-color: #00b09b;
      margin-top: 1rem;
      border: 0;
      border-radius: 0.4rem;
      cursor: pointer;

      &:hover {
        opacity: .9;
      }
    }
  }
`
