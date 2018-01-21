BEGIN;

DROP TABLE users IF EXISTS CASCADE;

CREATE TABLE users (
  id serial primary key,
  username VARCHAR(16) NOT NULL,
  email VARCHAR(128) NOT NULL,
  password VARCHAR(255) NOT NULL
);

COMMIT;
