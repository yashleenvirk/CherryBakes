import { Component } from '@angular/core';

@Component({
	selector: 'app-posts-create',
	templateUrl: './posts-create.component.html' ,
	styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
	enteredValue = '';
	newPost = 'NO CONTENT';
	onAddPost() {
		this.newPost = this.enteredValue;
	}
}