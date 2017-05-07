import {Component, OnInit} from 'angular2/core';
 import {RouterLink} from 'angular2/router';

 import {PostService} from './post.service';
 import {SpinnerComponent} from './spinner.component';
 
 @Component({
     templateUrl: 'app/posts.component.html',
      providers: [PostService],
     directives:[RouterLink, SpinnerComponent ]
 })
 export class PostsComponent implements OnInit  {
     isLoading = true;
    posts=[];
    commentsLoading;
    currentPost;

     
     constructor(private _service: PostService){
 	}
 
 	ngOnInit(){
 		    this._service.getPosts()
 			            .subscribe(
                posts => this.posts = posts,
                null,
                () => { this.isLoading =false;});

 
             }
     }