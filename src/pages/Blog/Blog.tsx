import React, { FC } from 'react';
import styles from './Blog.module.scss';

interface BlogProps {}

const Blog: FC<BlogProps> = () => (
  <div className={styles.Blog} data-testid="Blog">
    Blog Component
  </div>
);

export default Blog;
