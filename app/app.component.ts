import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'


@Component({
    selector: 'my-app',
    template: `   
    <voter
        [voteCount]="post.voteCount"
        [myVote]="post.myVote"
        (vote)="onVote($event)">
    </voter>
    <h1>My First Angular 2 App</h1>
    <i class='glyphicon glyphicon-star'></i>    
    <courses></courses>
     <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <authors></authors>
    <button class ="btn btn-primary">Submit</button>
    <br>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent] 
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
    onFavoriteChange($event){
        console.log($event);
    }
    onVote($event){
        console.log($event);
    }
 }

