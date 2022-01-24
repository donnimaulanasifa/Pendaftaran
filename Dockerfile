FROM node:16.4.2-slim as base

LABEL "com.github.actions.name"="Pendaftaran"
LABEL "com.github.actions.description"="A GitHub Action to build and deploy Vuepress sites to GitHub Pages"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/donnimsifa/Pendaftaran"
LABEL "homepage"="https://github.com/donnimsifa/Pendaftaran"
LABEL "maintainer"="donnimsifa <mdoni12@gmail.com>"

RUN apt-get update && apt-get install -y git jq

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
