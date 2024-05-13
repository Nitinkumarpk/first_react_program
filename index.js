const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
const heading2 = React.createElement(
  'h2',
  {className: 'greeting'},
  'Heading 2!'
);

const container = React.createElement(
  'div',
  { id: "container"},
  [heading, heading2]
);

root.render(container);
