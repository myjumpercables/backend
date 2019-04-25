/*service_history*/

/* DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` varchar(13) default NULL,
  `plates` varchar(255),
  `service_loc` varchar(255) default NULL,
  `service_type` varchar(255) default NULL,
  `date` varchar(255),
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;*/

INSERT INTO `myTable` (`user_id`,`plates`,`service_loc`,`service_type`,`date`) VALUES ("1","A8X 4N6","Ap #856-4550 Suspendisse Av.","battery_change","11/14/2019"),
("2","X1W 6Y8","Ap #515-2395 Sagittis. Road","battery_change","03/13/2020"),
("3","G1J 8G5","P.O. Box 417, 1952 Enim. Avenue","tire_install","11/24/2019"),
("4","Q8X 6J6","P.O. Box 465, 4818 Consectetuer St.","air_conditioner","02/21/2019"),
("5","S3J 0I6","P.O. Box 728, 232 Enim. Avenue","tire_repair","07/22/2019"),
("6","U3L 9G6","759-8649 Bibendum St.","filter","03/26/2020"),
("7","S4R 8D2","349-6738 Luctus Avenue","engine_check","03/15/2019"),
("8","B0O 0K9","P.O. Box 860, 8343 Et St.","electric","12/06/2019"),
("9","L7Q 5K3","1531 Nostra, Avenue","tire_repair","12/04/2019"),
("10","A8Q 8V0","P.O. Box 654, 4484 Id, St.","wheel_alignment","08/01/2019");
