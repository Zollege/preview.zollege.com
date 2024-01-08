#!/bin/bash

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
if [ "${GITHUB_REF}" == "refs/heads/preview" ]; then export JEKYLL_ENV='preview.'; fi
if [ "${GITHUB_REF}" == "refs/heads/preview" ] || [ "${GITHUB_REF}" == "refs/heads/master" ]; then
  # npm run images-webp
#   if [ "${GITHUB_REF}" == "refs/heads/master" ] && [ $JOB == 0 ]; then
#     sudo apt-get install awscli -y
#     aws s3 cp ./assets/uploads s3://zollege-websites/vandelay-education-local/ --recursive --quiet
#   fi
  node _javascripts/start-dates.js
  if [ ! -f ./_data/startDates.yml ]; then exit 0; fi
  
fi
