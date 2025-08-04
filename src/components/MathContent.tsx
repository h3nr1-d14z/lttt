import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MathContentProps {
  content: string;
  className?: string;
}

export default function MathContent({ content, className = '' }: MathContentProps) {
  // Convert the content to proper markdown format
  const processedContent = content;

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children }) => <p className="mb-2">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          code: ({ children, className }) => {
            // If it's inline math
            if (className === 'language-math') {
              return <span>{children}</span>;
            }
            // Regular code
            return <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">{children}</code>;
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}