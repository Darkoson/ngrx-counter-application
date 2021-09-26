export class User {
  constructor(
    private _email: string,
    private _token: string,
    private _localId: string,
    private _expiringDate: Date
  ) {}
  
      getExpiringDate() {
        return this._expiringDate;
      }
}
