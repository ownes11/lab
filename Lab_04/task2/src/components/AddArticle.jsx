import React from 'react';

export const AddArticle = ({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) => {
  return (
    <section style={{ marginBottom: 24 }}>
      <h2>{name}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
          style={{ padding: 8 }}
        />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
          style={{ padding: 8 }}
        />
        <button
          type="button"
          onClick={onClickAdd}
          style={{
            alignSelf: 'flex-start',
            padding: '8px 16px',
            backgroundColor: '#16a34a',
            color: '#fff',
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};

