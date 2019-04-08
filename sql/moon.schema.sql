
create table MoonUser (
    moonUserId int primary key not null auto_increment,
    userName varchar(255) not null,
    passHash varchar(255) not null,
    name varchar(255) not null,
    email varchar(255) not null,
    joinedDate timestamp,
    metadata JSON
);

create table Star (
    starId int primary key not null auto_increment,
    moonUserId int not null references MoonUser(moonUserId),
    name varchar(255) not null,
    email varchar(255) not null,
    metadata JSON
);

create table MediaType(
    code varchar(255),
    description varchar(255)
);
insert into MediaType VALUES ('pic', 'image file'), ('vid', 'video file'), ('txt', 'text file'), ('zip', 'zip file');

create table MediaSet(
    mediaSetId int primary key not null auto_increment,
    starId int not null references Star(starId),
    title varchar(255) not null,
    description text not null,
    isActive boolean not null default false,
    metadata JSON
);

create table MediaFile ( 
    mediaFileId int primary key not null auto_increment,
    starId int not null references Star(starId),
    mediaSetId int references MediaSet(mediaSetId),
    title varchar(255) not null,
    uri varchar(255) not null,
    thumbUri varchar(255),
    dateCreated timestamp,
    typeCode varchar(255) not null references MediumType(code),
    metadata JSON
);

create table MailMessage (
    mailMessageId int primary key not null auto_increment,
    senderId int not null references MoonUser(moonUserId),
    recipientId int not null references MoonUser(moonUserId),
    title varchar(255) not null,
    body text
);


