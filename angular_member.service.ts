const httpOptions = {
  //Authentication header for http request
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')!).token  // ! is a non-null assertion operator
  })
}

export class MembersService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username, httpOptions);
  }
    
}
