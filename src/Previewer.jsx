import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Previewer({markdown}) {
  return (
    <div id="preview" className="p-4 bg-white rounded shadow-md bg-center">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}  
        components={{
          table: ({node, ...props}) => <table className="min-w-full divide-y divide-gray-200" {...props} />,
          thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
          tr: ({node, ...props}) => <tr className="bg-white even:bg-gray-50" {...props} />,
          th: ({node, ...props}) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
          td: ({node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />,
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-medium mb-2" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-inside" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-inside" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props} />,
          code: ({node, ...props}) => <code className="bg-gray-100 rounded p-1 text-red-500" {...props} />
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default Previewer;