-- Class SQL Example

--DROP TABLE Transcript; -- Comment out of running first time
--DROP TABLE Student; -- Comment this out if runing first time

CREATE TABLE Student(
  Id INTEGER,
  Name CHAR(20) NOT NULL,
  Address CHAR(50),
  Status CHAR(50) DEFAULT 'freshman',
  PRIMARY KEY(id),
  CHECK(id > 0)
);

CREATE TABLE Transcript(
  StudID INTEGER,
  CrsCode INTEGER,
  Semester CHAR(20) NOT NULL,
  Grade INTEGER,
  PRIMARY KEY(StudID,CrsCode,Semester),
  CHECK(Grade BETWEEN 0 AND 100),
  CHECK(StudID > 0),
  FOREIGN KEY (StudID) REFERENCES Student(Id)
);

INSERT INTO Student (id,name,address,status) VALUES (1,'John','New York City','senior');
INSERT INTO Student (id,name,address,status) VALUES (2,'Bob','Charleston','sophomore');
INSERT INTO Student (id,name,address) VALUES (3,'Joe','New York City');

INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (1,1054,"Fall 2023",70);
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (2,6730,"Spring 2025",100);
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (3,1010,"Spring 2022",88);
--for query 3e
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (3,2093,"Spring 2024",90);
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (3,5907,"Spring 2022",95);
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (3,1205,"Spring 2023",98);
INSERT INTO Transcript (StudID,CrsCode,Semester,Grade) VALUES (3,9969,"Fall 2024",96);

SELECT * FROM Student;
SELECT * FROM Transcript;

--UPDATE Student SET address = '456 Avenue' WHERE id = 1;

--DELETE FROM Student WHERE id = 2;

--Queries
--SELECT name FROM Student WHERE id = 3;
--SELECT name, status FROM Student;
--SELECT COUNT(*) FROM Student; -- Gets amount of rows in Student table
--SELECT * FROM Student;
--SELECT * FROM Transcript;
--3a
SELECT name FROM Student WHERE Status = "freshman";
--3b
SELECT name, Id AS StudID FROM Student WHERE id = StudID AND status = "freshman";
--3c
SELECT COUNT(*) AS NumNYCStudents FROM Student WHERE address = "New York City";
--3d
SELECT Status, COUNT(*) AS NumStudents FROM Student GROUP BY Status;
--3e (90-100 is A)
SELECT Name FROM Student JOIN Transcript ON Student.Id = Transcript.StudID WHERE Transcript.Grade >= 90 GROUP BY Student.Id, Student.Name HAVING COUNT(*) >= 4;
--we could do a join like this:
--SELECT name, CrsCode, Grade FROM Student, Transcript WHERE id = transcriptID AND status = 'senior';
