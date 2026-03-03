import React from 'react';
import { ArticleManager } from './components/ArticleManager.jsx';

export const App = () => {
  return (
    <main style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Lab 4.2 – Article Manager</h1>
      <p style={{ color: '#555', fontSize: 14 }}>
        This lab demonstrates refactoring a monolithic component into reusable components:
        AddArticle, ArticleList, and ArticleItem.
      </p>
      <ArticleManager />
    </main>
  );
};

