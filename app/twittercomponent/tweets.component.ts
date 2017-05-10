import {Component} from 'angular2/core'
import {TweetService} from './tweet.service' 
import {LikeComponent} from './like.component'
import {TweetComponent} from './tweet.component'
@Component({
    selector: 'tweets',
    template: ` 
    <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    providers:[TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent {
    title = "The title of tweets page";
    tweets;

    constructor(tweetService: TweetService){        
        this.tweets = tweetService.getTweets();       

    }
}