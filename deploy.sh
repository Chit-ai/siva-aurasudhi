
#!/bin/bash

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Initialize git repository
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to gh-pages branch
git push -f git@github.com:yourusername/your-repo-name.git main:gh-pages

cd ..
