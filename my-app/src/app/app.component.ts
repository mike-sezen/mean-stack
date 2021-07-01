import { Component } from '@angular/core';
import { Post} from './posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  storedPosts: Post[] = [];
  onPostAdded(post: any){
    this.storedPosts.push(post);
  }
}

//comment

