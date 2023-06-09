
import { KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'szut',
        clientId: 'lf12-auth-service'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
        redirectUri: window.location.origin + '/home'
      }
    });
}

