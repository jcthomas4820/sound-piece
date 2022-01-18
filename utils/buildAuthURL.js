import { AUTHORIZE_URL } from "./constants";

export const buildAuthURL = (clientID, scope, redirectURI, authState) => {
    const url = AUTHORIZE_URL
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);
    url += '&state=' + encodeURIComponent(authState);

    return url
}