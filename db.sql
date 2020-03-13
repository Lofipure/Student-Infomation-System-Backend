create database demo charset = utf8;
use demo;
-- studentid,name,age,score)

create table student (
    id int primary key auto_increment not null,
    studentid varchar(32) not null,
    name varchar(32) not null,
    age int not null,
    score int not null
)charset = utf8 , engine = InnoDB;

insert into student (name,studentid,age,score) values ("Lofipure","18407020432",18,120);
insert into student (name,studentid,age,score) values ("LofipureOne","19407020432",11,60);