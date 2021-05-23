Development

Database Setup

Enter PSQL for Postgres

# Linux
sudo -u postgres psql

# Mac
psql postgres

Create Database, User and Grant Privilege

create database rahul;
create user rahul with encrypted password 'rahul';
grant all privileges on rahul.* to rahul;