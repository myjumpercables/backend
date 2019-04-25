/*sample data user*/

/*
DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` varchar(13) default NULL,
  `username` varchar(255) default NULL,
  `company` varchar(255) default NULL,
  `mechanic` varchar(255) default NULL,
  `password` varchar(255),
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1; */

INSERT INTO `myTable` (`user_id`,`username`,`company`,`mechanic`,`password`) VALUES ("1","Giacomo.Roberson","Infiniti","1","KPQ56DQP5WL"),
("2","Kim.Nash","Volkswagen","0","REH86QBQ9YX"),
("3","Keiko.Obrien","Mahindra and Mahindra","0","FQZ26BPF8VU"),
("4","Tara.Mccall","Vauxhall","0","PXL93HQG9AA"),
("5","Alexis.Tran","Chrysler","1","GTW70UUE1ON"),
("6","Colt.Miller","Chevrolet","0","LQB95VEO7EO"),
("7","Brody.Rocha","Volkswagen","1","RSK97KNP7GO"),
("8","Jacqueline.Austin","Porsche","1","BJM20GWX6IZ"),
("9","Skyler.Bishop","General Motors","0","TKI86KUK4MS"),
("10","Caesar.Noble","Jeep","1","BPN79AHQ0TT");
