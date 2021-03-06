/* eslint-disable react/prop-types */
import React from 'react';
import Prism from './code-block-prism';
import Mermaid from './code-block-mermaid';

const CodeBlock = ({ children }) => {
  const languageClassName = (children.props.className || '').toLowerCase();
  const language = languageClassName.replace(/language-/, '');
  const code = children.props.children.trim();

  if (language === 'mermaid') {
    return (
      <Mermaid code={code} />
    );
  }

  return (
    <Prism
      code={code}
      language={language}
    />
  );
};

export default CodeBlock;
