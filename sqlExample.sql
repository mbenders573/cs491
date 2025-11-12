-- Class SQL Example

DROP TABLE Student; -- Comment this out if runing first time

CREATE TABLE Student(
  id INTEGER,
  name CHAR(20) NOT NULL,
  address CHAR(50),
  status CHAR(50) DEFAULT 'freshman',
  PRIMARY KEY(id),
  CHECK(id > 0)
);

INSERT INTO Student (id,name,address,status) VALUES (1,'John','1 Street','senior');
INSERT INTO Student (id,name,address,status) VALUES (2,'Bob','2 Street','sophomore');
INSERT INTO Student (id,name,address) VALUES (3,'Joe','3 Street');

UPDATE Student SET address = '456 Avenue' WHERE id = 1;

DELETE FROM Student WHERE id = 2;

--Queries
SELECT name FROM Student WHERE id = 3;
SELECT name, status FROM Student;
SELECT COUNT(*) FROM Student; -- Gets amount of rows in Student table

--If we had another table Transcript, we could do a join like this:
--SELECT name, CrsCode, Grade FROM Student, Transcript WHERE id = transcriptID AND status = 'senior';
