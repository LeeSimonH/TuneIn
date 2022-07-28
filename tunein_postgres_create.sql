--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.reviews (
	"_id" serial NOT NULL,
	"rating" integer,
  "review" varchar NOT NULL,
  "created_ON" TIMESTAMP NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.users ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("reviews_id") REFERENCES  public.reviews("_id");