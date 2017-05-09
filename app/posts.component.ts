import {Component, OnInit} from 'angular2/core';
 import {RouterLink} from 'angular2/router';
 import {UserService} from './user.service';

 import {PostService} from './post.service';
 import {SpinnerComponent} from './spinner.component';
 import {PaginationComponent} from './pagination.component';

 @Component({
     templateUrl: 'app/posts.component.html',
     styleUrls: ['app/styles.css'],
      providers: [PostService, UserService],

     directives:[RouterLink, SpinnerComponent, PaginationComponent]
 })
 export class PostsComponent implements OnInit  {
    postsLoading;
    commentsareLoading;
    pagedPosts=[];
    posts=[];
    users=[];
    currentPost;
    pageSize=10;

     
     constructor(
         private _service: PostService,
         private _userService: UserService){
 	    }
 
 	ngOnInit(){
     this.loadUsers();
     this.loadPosts();
    }

    private loadUsers(){
             this._userService.getUsers()
            .subscribe(users => this.users = users);
    }

    private loadPosts(filter?){
            this.postsLoading=true;
            this._service.getPosts(filter)
                         .subscribe(
                    posts => {
                    this.posts = posts;
                    this.pagedPosts = _.take(this.posts, this.pageSize);
                    },
                    null,
                    () => { this.postsLoading =false;}); 
    }

            reloadPosts(filter){
                this.currentPost = null;

                this.loadPosts(filter);
             }

            select(post){
                this.currentPost = post;
                
                this.commentsareLoading = true;
                this._service.getComments(post.id)
                        .subscribe( 
                        comments => this.currentPost.comments = comments,
                        null,
                        () => this.commentsareLoading =false);
            }

            onPageChanged(page){
                var startIndex = (page -1 )* this.pageSize;
                this.pagedPosts = _.take(_.rest(this.posts,startIndex), this.pageSize);
            }

           
     }