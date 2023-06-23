CREATE DATABASE transhealth_sa_db;
\c transhealth_sa_db

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    doc_id INT,
    user_id INT,
    review TEXT,
    rating NUMERIC
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);