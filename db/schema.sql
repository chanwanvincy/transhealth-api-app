CREATE DATABASE transhealth_sa_db;
\c transhealth_sa_db

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    doc_name TEXT,
    content TEXT,
    suburb TEXT,
    category TEXT,
    phone TEXT,
    lat TEXT,
    lng TEXT,
    address TEXT,
    U18 BOOLEAN,
    O18 BOOLEAN,
    U25 BOOLEAN,
    lowCostNDISOption BOOLEAN,
    gpRefRequired BOOLEAN
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    doc_id INT,
    user_id INT,
    review TEXT,
    rating INT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    email TEXT,
    password_digest TEXT
);