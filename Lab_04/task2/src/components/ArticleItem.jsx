import React, { useState } from 'react';

export const ArticleItem = ({ article, onClickRemove }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
  };

  const handleRemove = () => {
    onClickRemove(article.id);
  };

  return (
    <li
      style={{
        padding: 12,
        border: '1px solid #e5e7eb',
        borderRadius: 6,
        marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href={`#${article.id}`}
          title="Toggle Summary"
          onClick={handleToggle}
          style={{ fontWeight: 600, textDecoration: 'none', color: '#2563eb' }}
        >
          {article.title}
        </a>
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove article"
          style={{
            border: 'none',
            backgroundColor: '#ef4444',
            color: '#fff',
            borderRadius: '999px',
            width: 28,
            height: 28,
            cursor: 'pointer',
          }}
        >
          ×
        </button>
      </div>
      <p
        style={{
          marginTop: 8,
          display: isOpened ? 'block' : 'none',
          color: '#374151',
        }}
      >
        {article.summary}
      </p>
    </li>
  );
};

