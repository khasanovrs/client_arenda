import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {

    private _pubId = '';

    constructor() {
    }

    get pubId(): string {
        return this._pubId;
    }

    set pubId(value: string) {
        this._pubId = value;
    }
}
