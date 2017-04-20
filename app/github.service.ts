import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {Injectable} from 'angular2/core';

@Injectable()
export class GitHubService {
    
   
    private _usersUrl ="https://api.github.com/users/";
    private _followersUrl ="https://api.github.com/users/octocat/followers";

    constructor(private _http: Http){}

    getUser(username){
        return this._http.get(this._usersUrl + username)
        .map(res => res.json());
    }
     getFollowers(username){
        return this._http.get(this._usersUrl + username + "/followers")
            .map(res => res.json());

     }   
}