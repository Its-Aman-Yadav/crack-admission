import React from 'react';
import ReactMarkdown from 'react-markdown'; // Import react-markdown to render markdown content
import remarkGfm from 'remark-gfm'; // GitHub flavored markdown support

interface MarkdownHTMLProps {
  content: string; // Prop that will receive the markdown content
}

const MarkdownHTML: React.FC<MarkdownHTMLProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none px-4">
      {/* Use ReactMarkdown to render the markdown content */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown
      >
        {content} 
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownHTML;
