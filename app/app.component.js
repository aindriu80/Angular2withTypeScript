System.register(['./navbar.component', 'angular2/core', 'angular2/router', './courses.component', './authors.component', './favorite.component', './like.component', './voter.component', './tweet.component', './tweet.service', './bootstrap.panel.compenent', './contact-form.component', './template-driven-Form.component', './signup-form.component', './change-password-form-component', './post.service', 'angular2/http', './github-profile.component', './users.component', './posts.component', './user-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var navbar_component_1, core_1, router_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1, bootstrap_panel_compenent_1, contact_form_component_1, template_driven_Form_component_1, signup_form_component_1, change_password_form_component_1, post_service_1, http_1, github_profile_component_1, users_component_1, posts_component_1, router_2, user_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (bootstrap_panel_compenent_1_1) {
                bootstrap_panel_compenent_1 = bootstrap_panel_compenent_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (template_driven_Form_component_1_1) {
                template_driven_Form_component_1 = template_driven_Form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_form_component_1_1) {
                change_password_form_component_1 = change_password_form_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService, _postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.post = {
                        voteCount: 10,
                        myVote: 0,
                        title: "Title",
                        isFavorite: false
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.courses = ['course 1', 'course 2', 'course 3'];
                    this.coursess = {
                        price: 222.22,
                        students: 5943
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].id);
                    });
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "   \n     <!--\n <h2>My First Angular 2 App</h2>    \n    <courses></courses>\n    <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n    <authors></authors>\n    <voter\n        [voteCount]=\"post.voteCount\"\n        [myVote]=\"post.myVote\"\n        (vote)=\"onVote($event)\">\n    </voter>    \n    <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n    <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n    </div>\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n            {{ i + 1 }} - {{ course }} </li>\n        </ul>\n            <br/>\n            {{ coursess.price | currency: 'EUR':true:'2.2-2'}}\n            <br/>        \n        <bs-panel title=\"Who can see my stuff?\">\n             Content of who can see my stuff\n        </bs-panel>\n        <bs-panel title=\"Who can contact me?\">\n            Content of who can contact me\n        </bs-panel>\n          <contact-form></contact-form>\n          <template-form></template-form>        \n          <signup-form></signup-form>          \n        <change-password-form></change-password-form>\n           \n\n        <div *ngIf=\"isLoading\">\n                <i class=\"fa fa-spinner fa-spin fa-3x\"></i>        \n                 </div>  \n                  <github-profile></github-profile>\n                    -->  \n                    <navbar></navbar>\n                     <div class=\"container\">\n            <router-outlet></router-outlet>\n              \n         \n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent,
                            bootstrap_panel_compenent_1.BootstrapPanel, contact_form_component_1.ContactFormComponent, template_driven_Form_component_1.TemplateFormComponent, signup_form_component_1.SignUpFormComponent, change_password_form_component_1.ChangePasswordFormComponent, github_profile_component_1.GitHubProfileComponent,
                            navbar_component_1.NavBarComponent, router_2.RouterLink, router_1.ROUTER_DIRECTIVES],
                        providers: [tweet_service_1.TweetService, post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService, post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map