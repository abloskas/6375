import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  newTitle = "";
  newContent = "";
  @Output()
  postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.newTitle,
      content: this.newContent
    };
    this.newTitle = "";
    this.newContent = "";
    this.postCreated.emit(post);
  }
}
