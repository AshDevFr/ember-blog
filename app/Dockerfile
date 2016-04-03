FROM node
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}/

ADD .bowerrc ${workdir_path}/
ADD .ember-cli ${workdir_path}/
ADD .jshintrc ${workdir_path}/
ADD .watchmanconfig ${workdir_path}/
ADD bower.json ${workdir_path}/
ADD ember-cli-build.js ${workdir_path}/
ADD package.json ${workdir_path}/
ADD testem.js ${workdir_path}/

RUN git config --global url."https://".insteadOf git://

RUN npm i -g --quiet ember-cli bower

RUN npm i --quiet

RUN bower install --config.interactive=false --allow-root

EXPOSE 4200 49152

VOLUME ${workdir_path}

ENTRYPOINT ["ember"]
