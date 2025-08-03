import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [type, setType] = useState('book');

  let element;
  if (type === 'book') {
    element = <BookDetails />;
  } else if (type === 'blog') {
    element = <BlogDetails />;
  } else {
    element = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>📘 Blogger App</h1>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setType('book')}>Book</button>
        <button onClick={() => setType('blog')}>Blog</button>
        <button onClick={() => setType('course')}>Course</button>
      </div>

      <h2>Using if-else variable:</h2>
      {element}

      <h2>Using ternary operator:</h2>
      {type === 'book' ? <BookDetails /> : type === 'blog' ? <BlogDetails /> : <CourseDetails />}

      <h2>Using && (logical AND):</h2>
      {type === 'book' && <BookDetails />}
      {type === 'blog' && <BlogDetails />}
      {type === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;
