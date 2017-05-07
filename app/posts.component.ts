import {Component, OnInit} from 'angular2/core';
 import {RouterLink} from 'angular2/router';

 import {PostService} from './post.service';
 
 @Component({
     templateUrl: 'app/posts.component.html',
      providers: [PostService],
     directives:[RouterLink]
 })
 export class PostsComponent implements OnInit  {
    posts=[];

     
     constructor(private _service: PostService){
 	}
 
 	ngOnInit(){
 		this._service.getPosts()
 			.subscribe(posts => this.posts = posts);
 	} 



 }