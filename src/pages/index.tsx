import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

// Sections
import { Banner } from '../sections';

import '../styles/style.css';
import { Layout } from '../components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
