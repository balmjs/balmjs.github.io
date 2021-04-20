const DEMO = {
  'html5-boilerplate': 'HTML Boilerplate',
  laravel: 'Laravel',
  ts: 'TypeScript'
};

function showDemo() {
  console.info(
    'Welcome to BalmJS, please select your interested project demo;)'
  );

  for (let key in DEMO) {
    let label = DEMO[key];
    console.log(`${label}: https://github.com/balmjs/demo-${key}`);
  }
}

export default showDemo;
