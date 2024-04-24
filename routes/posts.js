const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const comments = require("../data/comments")
const error = require("../utilities/error");

router
  .route("/")
  //api/posts?userId=<value>
  .get((req, res, next) => {
    const postUserId = req.query.userId;
    // res.send(postUserId)
    if (postUserId) {
      const foundPosts = posts.filter((post) => post.userId == postUserId)
      res.json(foundPosts);
    }
    else next();
  })

  .get((req, res) => {
    const links = [
      {
        href: "posts/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ posts, links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });


router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];

    if (post) res.json({ post, links });
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

  //GET /posts/:id/comments
router.route("/:id/comments")
  .get((req, res, next) => {
    //find the post id to be equal to param.id
    const post = posts.find((p) => p.id == req.params.id);
    //filter the comments with the user.id found
    const postComments = comments.filter((c) => c.postId == post.id)
    if (post) res.json(postComments);
    else next();
  })


module.exports = router;
