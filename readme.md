# Zollege Website

## Setup

1. Install Ruby via [RVM](https://rvm.io/) if you don't already have it: `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
2. Install [`bundler`](https://bundler.io/): `gem install bundler`
3. Install Node via [nvm](https://github.com/nvm-sh/nvm) if you don't already have it: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash`
  * Install latest stable Node: `nvm install stable`

## Development

1. `bundle`
2. `npm i`
3. `npm start` or `bundle exec jekyll serve`
4. Navigate to  http://127.0.0.1:4000/

## Tina CMS
1. run `npx tinacms dev -c "bundle exec jekyll serve"` 
2. Navigate to  http://127.0.0.1:4000/admin/