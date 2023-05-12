import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { motion } from 'framer-motion';

// Sections
import { Banner } from '../sections';

import '../styles/style.css';
import { Layout } from '../components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    // <motion.div initial="initial" animate="animate">
    <Layout>
      <Banner />
    </Layout>
    // </motion.div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
