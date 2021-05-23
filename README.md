## Development

### Database Setup

Enter PSQL for Postgres

# Linux
sudo -u postgres psql

# Mac
psql postgres

Create Database, User and Grant Privilege

Postgres
````psql
create database rahul;
create user rahul with encrypted password 'rahul';
grant all privileges on rahul.* to rahul
```

MySQL   
```mysql
create database rahul;
create user rahul identified by 'rahul';
grant all privileges on rahul.* to rahul
```

### Credits

https://github.com/scaleracademy/MasterClass_NodeJS_URL_Shortner