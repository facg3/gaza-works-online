BEGIN;

DROP TABLE users, projects, proposals, comments, categories, skills IF EXISTS;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(31) NOT NULL,
  email VARCHAR(127) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fname VARCHAR(63),
  lname VARCHAR(63),
  address VARCHAR(127),
  skills VARCHAR,
  phone VARCHAR(31),
  contact_info VARCHAR,
  photo VARCHAR(255),
  bio VARCHAR(511),
  dob DATE,
  rating INTEGER
);

CREATE TABLE proposals (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  project_id INTEGER REFERENCES projects(id) NOT NULL,
  skills VARCHAR,
  pay INTEGER CHECK (pay > 0),
  whyme VARCHAR(511),
  state INTEGER CHECK (state < 3 AND state >= 0),
  date DATA
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  title VARCHAR(127),
  skills VARCHAR,
  dateline DATE,
  category_id INTEGER REFERENCES categories(id),
  price INTEGER CHECK (price > 0),
  desciprtion VARCHAR
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(63)
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(63),
  parentCatId INTEGER REFERENCES categories(id) NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  project_id INTEGER REFERENCES projects(id) NOT NULL,
  proposal_id INTEGER REFERENCES proposals(id),
  content VARCHAR(1023),
  date DATE
)

COMMIT;
