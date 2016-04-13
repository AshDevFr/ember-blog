FROM node
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}/

ADD server ${workdir_path}/
ADD app ${workdir_path}/app

RUN git config --global url."https://".insteadOf git://

RUN npm i -g --quiet ember-cli sails bower

RUN npm i --quiet

RUN cd app && \
    npm i --quiet && \
    bower install --quiet --config.interactive=false --allow-root && \
    ember build --environment production --output-path ../assets/ && \
    mv ../assets/index.html ../views/


EXPOSE 1337

VOLUME ${workdir_path}

ENTRYPOINT ["sails"]

CMD ["lift", "--prod"]
