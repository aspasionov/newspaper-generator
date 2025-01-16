import { useContext } from 'react';
import { Wrap } from './styles'
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { CopyContext } from '../../App';

import { TOKEN_KEY } from '../../constants'



const Login = () => {
  const { setToken } = useContext(CopyContext);
  const navigate = useNavigate();
  const responseMessage = async (response) => {
    localStorage.setItem(TOKEN_KEY, response.credential);
    await setToken(response.credential)
    navigate('/')
};
const errorMessage = (error) => {
    alert('Something went wrong');
};

  return (
    <Wrap>
      <Link to="/">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </Link>
    </Wrap>
    
  )
}

export default Login;