import React from 'react';

const RemoveTags = ({ textWithTags }) => {
  // Function to remove HTML tags using a regular expression
  const removeTags = (str) => {
    if (str === null || str === '') {
      return false;
    } else {
      // Replace HTML tags with an empty string
      return str.replace(/<[^>]*>/g, '');
    }
  };

  return (
    <div>
      <p>{removeTags(textWithTags)}</p>
    </div>
  );
};

export default RemoveTags;
