const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const comments = require("../data/comments");
const error = require("../utilities/error");

//api/comments
router
    .route("/")

    //api/comments?userId=<value>
    .get((req, res, next) => {
        const commentUserId = req.query.userId;
        // res.send(postUserId)
        if (commentUserId) {
            const foundComment = comments.filter((c) => c.userId == commentUserId)
            res.json(foundComment);
        }
        else next();
    })
    //api/comments?postId=<value>
    .get((req, res, next) => {
        const commentPostId = req.query.postId;
        // res.send(postUserId)
        if (commentPostId) {
            const foundComment = comments.filter((c) => c.postId == commentPostId)
            res.json(foundComment);
        }
        else next();
    })
    //api/comments
    .get((req, res) => {
        const links = [
            {
                href: "comments/:id",
                rel: ":id",
                type: "GET",
            },
        ];
        res.json({ comments, links })
    })
    //api/comments
    .post((req, res, next) => {
        if (req.body.userId && req.body.postId && req.body.body) {
            const comment = {
                id: uuidv4(),
                userId: req.body.userId,
                postId: req.body.postId,
                body: req.body.body
            };
            comments.push(comment);
            res.json(comments)
        }
        else {
            next(error(400, "Comment can not be added"))
        }
    });

router
    //api/comments/:id
    .route("/:id")
    .get((req, res, next) => {
        const id = req.params.id
        const comment = comments.find((c) => c.id == id)

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

        if (comment) {
            res.json({ comment, links })
        } else {
            next()
        }
    })
    .patch((req, res, next) => {
        const comment = comments.find((c, i) => {
            if (c.id == req.params.id) {
                //iterate over keys of one object
                for (const key in req.body) {
                    comments[i][key] = req.body[key]
                }
                return true;
            }
        })
        if (comment) {
            res.json(comment)
        } else {
            next()
        }
    })
    .delete((req, res, next) => {
        const comment = comments.find((c, i) => {
            if (c.id == req.params.id) {
                comments.splice(i, 1);
                return true;
            }
        })
        if (comment) {
            res.json(comment)
        } else {
            next()
        }
    });



module.exports = router;