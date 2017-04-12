import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'


@Component({
    selector: 'my-app',
    template: `   
    <h1>My First Angular 2 App</h1>
    <i class='glyphicon glyphicon-star'></i>    
    <courses></courses>
     <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <authors></authors>
        <voter
        [voteCount]="post.voteCount"
        [myVote]="post.myVote"
        (vote)="onVote($event)">
    </voter>
    <button class ="btn btn-primary">Submit</button><p>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>

  
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent],
    providers: [TweetService]
})
export class AppComponent {
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
       constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

    onFavoriteChange($event){
        console.log($event);
    }
    onVote($event){
        console.log($event);
    }
    
 }

    
 
