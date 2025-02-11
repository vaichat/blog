var posts=["2025/02/11/hello-world/","2023/10/10/文章标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };