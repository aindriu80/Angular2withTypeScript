import {NavBarComponent} from './navbar.component';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';
import {BootstrapPanel} from './bootstrap.panel.compenent';
import {ContactFormComponent} from './contact-form.component';
import {TemplateFormComponent} from './template-driven-Form.component';
import {SignUpFormComponent} from './signup-form.component';
import {ChangePasswordFormComponent} from './change-password-form-component';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubProfileComponent} from './github-profile.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {RouterLink} from 'angular2/router';
import {UserFormComponent} from './user-form.component';
import {NotFoundComponent} from './not-found.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },    
    { path: '/users', name: 'Users', component: UsersComponent },    
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template: `   
     <!--
 <h2>My First Angular 2 App</h2>    
    <courses></courses>
    <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <authors></authors>
    <voter
        [voteCount]="post.voteCount"
        [myVote]="post.myVote"
        (vote)="onVote($event)">
    </voter>    
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
    </div>
        <ul>
            <li *ngFor="#course of courses, #i = index">
            {{ i + 1 }} - {{ course }} </li>
        </ul>
            <br/>
            {{ coursess.price | currency: 'EUR':true:'2.2-2'}}
            <br/>        
        <bs-panel title="Who can see my stuff?">
             Content of who can see my stuff
        </bs-panel>
        <bs-panel title="Who can contact me?">
            Content of who can contact me
        </bs-panel>
          <contact-form></contact-form>
          <template-form></template-form>        
          <signup-form></signup-form>          
        <change-password-form></change-password-form>
           

        <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i>        
                 </div>  
                  <github-profile></github-profile>
                    -->  
                    <navbar></navbar>
                     <div class="container">
            <router-outlet></router-outlet>
              
         
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent, 
    BootstrapPanel, ContactFormComponent, TemplateFormComponent, SignUpFormComponent, ChangePasswordFormComponent, GitHubProfileComponent, 
    NavBarComponent, RouterLink, ROUTER_DIRECTIVES],
    providers: [TweetService, PostService, HTTP_PROVIDERS]
    
})
export class AppComponent implements OnInit{  
    isLoading = true;
    post ={
        voteCount:10,
        myVote:0,
        title: "Title",
        isFavorite: false
    }
    tweet={
        totalLikes:10,
        iLike:false
    }
     tweets: any[];
       constructor(tweetService: TweetService,private _postService:PostService){
        this.tweets = tweetService.getTweets();
     }
     courses =['course 1', 'course 2', 'course 3'];
    coursess ={ 
        price: 222.22,
        students: 5943
            };
    onFavoriteChange($event){
        console.log($event);
    }
    onVote($event){
        console.log($event);
    }
    ngOnInit(){
        this._postService.getPosts()
       .subscribe(posts =>{
            this.isLoading = false;             
            console.log(posts[0].id);
        });
    }
           
 }

    
 
