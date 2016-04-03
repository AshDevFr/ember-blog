FROM ashdev/docker-alpine-node
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}/

ADD .sailsrc ${workdir_path}/
ADD Gruntfile.js ${workdir_path}/
ADD package.json ${workdir_path}/

RUN git config --global url."https://".insteadOf git://

RUN npm i -g --quiet sails

RUN npm i --quiet

EXPOSE 1337

VOLUME ${workdir_path}

ENTRYPOINT ["sails"]
