import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from "../post.model";

import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor(public postsService: PostsService) {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    
  }
}

// can use two way binding method using output and eventemitter by output the post
// using a service instead
