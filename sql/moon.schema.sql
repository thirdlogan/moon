create table Star (
    starId int primary key not null auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    metadata JSON
);

/*
create table StarProfile (
    starId int primary key not null,
);
*/

create table MediaType(
    code varchar(255),
    description varchar(255)
);
insert into MediaType VALUES ('pic', 'image file'), ('vid', 'video file'), ('txt', 'text file'), ('zip', 'zip file');

create table MediaFile ( 
    mediaFileId int primary key not null auto_increment,
    starId int not null references Star(starId),
    uri varchar(255) not null,
    thumbUri varchar(255),
    dateCreated timestamp,
    typeCode varchar(255) not null references MediumType(code),
    metadata JSON
);



