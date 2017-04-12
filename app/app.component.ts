import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'



@Component({
    selector: 'my-app',
    template: `   
    <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    <h1>My First Angular 2 App</h1>
    <i class='glyphicon glyphicon-star'></i>
    
    <courses></courses>
    <authors></authors>
    <button class ="btn btn-primary">Submit</button>
    <br>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent] 
})
export class AppComponent {
    post ={
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
 }

