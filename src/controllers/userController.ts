import { Request, Response } from "express";
import { connectDB } from "../config/db";
import axios from "axios";

export const loadUsers = async (req: Request, res: Response) => {
    const db = await connectDB();
    const usersCollection = db.collection("users");

    try {
        const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
        const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const commentsData = await axios.get('https://jsonplaceholder.typicode.com/comments');

        const users = usersData.data.map((user: any) => ({
            ...user,
            posts: postsData.data
                .filter((post: any) => post.userId === user.id)
                .map((post: any) => ({
                    ...post,
                    comments: commentsData.data.filter(
                        (comment: any) => comment.postId === post.id
                    ),
                })),
        }));

        await usersCollection.insertMany(users);

        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: "Error loading data" });
    }
};
