BEGIN;

DROP TABLE IF EXISTS users, projects, proposals, categories, skills, users_skills, projects_skills CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  full_name TEXT,
  address TEXT,
  phone TEXT,
  contact_info TEXT,
  photo TEXT,
  bio TEXT,
  dob DATE,
  rating INTEGER CHECK (rating >=0 AND rating <=5),
  status INTEGER CHECK (status >=0 AND status <= 1)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  skill TEXT NOT NULL,
  cat_id INTEGER REFERENCES categories(id) NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  title TEXT,
  deadline DATE,
  lifetime DATE,
  category_id INTEGER REFERENCES categories(id),
  budget INTEGER CHECK (price > 0),
  description TEXT,
  status INTEGER CHECK (status >=0 AND status <= 1)
);

CREATE TABLE proposals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  project_id INTEGER REFERENCES projects(id) NOT NULL,
  cost INTEGER CHECK (cost >= 0) NOT NULL,
  content TEXT NOT NULL,
  skill_id INTEGER REFERENCES skills(id) NOT NULL,
  date DATE NOT NULL,
  status INTEGER CHECK (status >=0 AND stapricetus <= 2)
);

CREATE TABLE users_skills (
  id SERIAL PRIMARY KEY,
  skill_id INTEGER REFERENCES skills(id) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE projects_skills (
  id SERIAL PRIMARY KEY,
  skill_id INTEGER REFERENCES skills(id) NOT NULL,
  cost INTEGER CHECK (cost >=0) NOT NULL,
  project_id INTEGER REFERENCES projects(id)
);

COMMIT;
