import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';
import {BootstrapPanel} from './bootstrap.panel.compenent';
import {ContactFormComponent} from './contact-form.component'


@Component({
    selector: 'my-app',
    template: `   
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
  
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent, BootstrapPanel, ContactFormComponent],
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
    courses =['course 1', 'course 2', 'course 3'];
    coursess ={ 
        price: 222.22,
        students: 5943
            };
 }

    
 
