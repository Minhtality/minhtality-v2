import { configure } from '@storybook/react';
function loadStories() {
  const req = require.context('../src', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

// automatically import all files ending in *.stories.js
configure(loadStories, module);
