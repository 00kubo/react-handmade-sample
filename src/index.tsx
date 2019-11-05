import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Result(props: any) {
  return <h1>{props.count}</h1>;
}

function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  React.useEffect(() => {
    document.title = 'Count : ${count}';
  });

  return (<div>
    <Result count={count} />
    <button onClick={handleClick}>Add</button>
  </div>);
};

ReactDOM.render(<Counter />, document.getElementById('root'));