import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../../contexts/WalletProvider';
const Logout = () => {
  const { logoutRequest } = useContext(WalletContext);
  const navigate = useNavigate();

  useEffect(() => {
    logoutRequest();
    navigate('/');
  });
};

export { Logout };
