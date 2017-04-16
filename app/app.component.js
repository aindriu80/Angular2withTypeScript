System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './voter.component', './tweet.component', './tweet.service', './bootstrap.panel.compenent', './contact-form.component', './template-driven-Form.component', './signup-form.component', './change-password-form-component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, tweet_service_1, bootstrap_panel_compenent_1, contact_form_component_1, template_driven_Form_component_1, signup_form_component_1, change_password_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "   \n    <!--\n <h2>My First Angular 2 App</h2>   \n \n    <courses></courses>\n     <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n    <authors></authors>\n        <voter\n        [voteCount]=\"post.voteCount\"\n        [myVote]=\"post.myVote\"\n        (vote)=\"onVote($event)\">\n    </voter>    \n    <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n    <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n</div>\n            <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n            {{ i + 1 }} - {{ course }} </li>\n            </ul>\n            <br/>\n            {{ coursess.price | currency: 'EUR':true:'2.2-2'}}\n             <br/>\n        \n        <bs-panel title=\"Who can see my stuff?\">\n        Content of who can see my stuff\n        </bs-panel>\n        <bs-panel title=\"Who can contact me?\">\n            Content of who can contact me\n        </bs-panel>\n          <contact-form></contact-form>\n          <template-form></template-form>        \n          <signup-form></signup-form>\n            -->\n            <change-password-form></change-password-form>\n\n        \n          \n  \n  \n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent,
                            bootstrap_panel_compenent_1.BootstrapPanel, contact_form_component_1.ContactFormComponent, template_driven_Form_component_1.TemplateFormComponent, signup_form_component_1.SignUpFormComponent, change_password_form_component_1.ChangePasswordFormComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map