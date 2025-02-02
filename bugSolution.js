```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs on every render because of the dependency on 'count'
    console.log('Rendered!', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```