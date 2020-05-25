import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
@Injectable()
export class CustomSocket extends Socket {

    constructor(
        // Has got implementation to fetch the token from localstorage
        private authService: AuthService
    ) {
        super({ url: environment.SOCKET_ENDPOINT,
             options: {query: `token=${authService.currentUserValue ? authService.currentUserValue.token.access_token : ''}`} });
        // Set token as part of the query objec
    }

}