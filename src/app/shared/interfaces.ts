export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
  idToken?: string;
  userName?: string;
  uid?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  localId?: string;
}

export interface FbAuthResponse {
  email: string;
  idToken: string;
  expiresIn: string;
  returnSecureToken?: boolean;
}

