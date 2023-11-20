// AuthService.js
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

export const login = async () => {
  const loginRequest = {
    scopes: ['openid', 'profile', 'User.Read'],
  };

  try {
    const response = await msalInstance.loginPopup(loginRequest);
    return response.account;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

export const logout = () => {
  msalInstance.logoutRedirect();
};

export const getToken = async () => {
  const tokenRequest = {
    scopes: ['User.Read'],
  };

  try {
    const response = await msalInstance.acquireTokenSilent(tokenRequest);
    return response.accessToken;
  } catch (error) {
    console.error('Error acquiring token:', error);
    return null;
  }
};
