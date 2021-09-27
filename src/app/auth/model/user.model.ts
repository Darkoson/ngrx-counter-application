export class User {
  constructor(
    private _email: string,
    private _token: string,
    private _localId: string,
    private _expiringDate: Date
  ) {}
  

      get expiringDate(){
        return this._expiringDate;
      }
      get token(){
        return this._token;
      }
}
