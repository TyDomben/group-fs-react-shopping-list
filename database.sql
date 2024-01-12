-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping-list" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"quantity" INTEGER DEFAULT 1,
	"text" TEXT,
	"purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping-list"
  ("name", "quantity", "text", "purchased")
  VALUES 
  ('C', 2, '', true),
  ('A', 3, '', true),
  ('B', 1, '', true),
  ('C', 2, '', false),
  ('A', 3, '', false),
  ('B', 1, '', false);
  
  SELECT * FROM "shopping-list" ORDER BY "purchased" ASC, "name" ASC;
   
  DROP TABLE "shopping-list";
  
  UPDATE "shopping-list" SET "purchased"=FALSE;
  
  DELETE FROM "shopping-list";
    