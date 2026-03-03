import React from 'react';
import { ArticleItem } from './ArticleItem.jsx';

export const ArticleList = ({ articles, onClickRemove }) => {
  if (!articles.length) {
    return <p>No articles yet. Add one above.</p>;
  }

  return (
    <section>
      <h2>Article List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    </section>
  );
};

