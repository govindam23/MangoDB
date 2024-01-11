const bcrypt = require('bcrypt');
const User = require("D:\\SEM 2\\ADT\\Assignment\\Blog\\Models\\User.js");
const BlogPost = require("D:\\SEM2\\ADT\\Assignment\\Blog\\Models\\BlogPost.js");
const Comment = require("D:\\SEM2\\ADT\\Assignment\\Blog\\Models\\Comments.js");
const mongoose = require('D:\\SEM 2\\ADT\\Assignment\\Blog\\db.js');
// Sample data
const UserData = [
 {
 username: 'moni',
 email: 'moni@gmail.com',
 password: bcrypt.hashSync('pass1', 10),
 },
 {
 username: 'moni1',
 email: 'moni1@gmail.com',
 password: bcrypt.hashSync('pass2', 10),
 },
 {
 username: 'moni2',
 email: 'moni2@gmail.com',
 password: bcrypt.hashSync('pass3', 10),
 },
];
const PostData = [
 {
 title: 'Post 1',
 desc: 'Coding For every one',
 username: 'moni',
 categories: ['Coding', 'Technology'],
 },
 {
 title: 'test',
 desc: 'testt',
 username: 'monika',
 categories: ['music',Life],
 },
];
const commentsData = [
 {
 commenterName: 'monika',
 commentText: 'Nice Post',
 blogPost: '6537c09e7445751c0bc12f53',
 },
 {
 commenterName: 'moni2',
 commentText: 'Post!',
 blogPost: '6536e1d0770e8b6451e8a6db',
 }
];
async function populateDatabase() {
 try {
 await User.deleteMany({});
 await BlogPost.deleteMany({});
 await Comment.deleteMany({});

 const createdUsers = await User.insertMany(usersData);
 const createdBlogPosts = await BlogPost.insertMany(blogPostsData);

 const blogPostTitleToId = createdBlogPosts.reduce((acc, post) => {
 acc[post.title] = post._id;
 return acc;
 }, {});

 const commentsWithIds = commentsData.map((comment) => ({
 ...comment,
 blogPost: blogPostTitleToId[comment.blogPostTitle],
 }));

 await Comment.insertMany(commentsWithIds);

 console.log('Sample data populated successfully');
 } catch (error) {
 console.error('Error populating sample data:', error);
 }
}
populateDatabase();