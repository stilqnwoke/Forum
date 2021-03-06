import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../listposts/listposts.component";
import { API_URL } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  retrieveAllPosts(username) {
    return this.http.get<Post[]>(`${API_URL}/users/${username}/posts`);
  }

  deletePost(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/posts/${id}`);
  }

  retrievePost(username, id) {
    return this.http.get<Post>(`${API_URL}/users/${username}/posts/${id}`);
  }

  updatePost(username, id, post) {
    return this.http.put(`${API_URL}/users/${username}/posts/${id}`, post);
  }

  createPost(username, post) {
    return this.http.post(`${API_URL}/users/${username}/posts`, post);
  }
}
