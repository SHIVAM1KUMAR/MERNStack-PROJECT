import express from 'express';

import { getposts,createPosts } from '../controllers/posts.js';

const router =express.Router();

router.get('/',getposts);
router.post('/',createPosts);

export default router;