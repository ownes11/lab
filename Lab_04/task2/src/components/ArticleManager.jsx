import React, { useState } from 'react';
import { AddArticle } from './AddArticle.jsx';
import { ArticleList } from './ArticleList.jsx';

const createInitialArticles = () => [
  {
    id: 1,
    title: 'Getting started with React',
    summary: 'An introduction to components, JSX, and state.',
  },
  {
    id: 2,
    title: 'Reusable components',
    summary: 'How to break down UIs into small, testable pieces.',
  },
];

export const ArticleManager = () => {
  const [articles, setArticles] = useState(createInitialArticles);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeSummary = (e) => {
    setSummary(e.target.value);
  };

  const handleAdd = () => {
    const trimmedTitle = title.trim();
    const trimmedSummary = summary.trim();

    if (!trimmedTitle || !trimmedSummary) {
      return;
    }

    const nextId = articles.length ? Math.max(...articles.map((a) => a.id)) + 1 : 1;
    const nextArticle = {
      id: nextId,
      title: trimmedTitle,
      summary: trimmedSummary,
    };

    setArticles((prev) => [...prev, nextArticle]);
    setTitle('');
    setSummary('');
  };

  const handleRemove = (id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  return (
    <>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={handleChangeTitle}
        onChangeSummary={handleChangeSummary}
        onClickAdd={handleAdd}
      />

      <ArticleList articles={articles} onClickRemove={handleRemove} />
    </>
  );
};

