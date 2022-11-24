# API Platform Training Repo #

<br />

**First lets get the Api Platform app created**

[Following Steps available on the Getting Started page of API Platform](https://api-platform.com/docs/distribution/#using-symfony-cli)

- In the terminal run these command lines \*

1. Install the skeleton : ```symfony new **app name** ```
2. CD into the proper directory : ```cd **app name**```
3. Now lets require the api extension thanks to Symfony Flex : ```symfony composer require api```

<br />
<br />

**Once the API PLatform app is created, time to create the DataBase**
<br />
1. Change the .env file to point to your DB, here is use MySql (mysql://user:password@127.0.0.1:3306/dbname)
2. Create the DB with Doctrine : ```bin/console doctrine:database:create```
3. Create the Schema : ```bin/console doctrine:schema:create```
4. Add the symfony maker-bundle : ```composer require symfony/maker-bundle --dev```
4. Now we create our first entity : ```bin/console make:entity **Entity Name**```

<br />
<br />

**Install Symfony Binary**
A bonus to simply the startup of a server
~~~ 
brew install symfony-cli/tap/symfony-cli 
~~~

You will than be able to start a new server with ``` symfony serve:start ```
<br />
You will be able to strop all servers runing with ```symfony serve:stop ```
