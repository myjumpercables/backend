DROP TABLE `notification`;

CREATE TABLE `notification` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint,
  `date` varchar(255),
  `service_type` mediumint,
  `location` mediumint,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `notification_table` (`user_id`,`date`,`service_type`,`location`) VALUES 
(27610682449,"2020-02-20 14:22:27",1,"8467 Sit Av."),
(83722931863,"2019-04-23 08:28:10",2,"Ap #240-2345 Et Av."),
(47500164899,"2019-05-31 11:10:09",3,"490-8086 Sed Av."),
(50962510751,"2019-11-13 05:26:56",4,"P.O. Box 297, 9230 Purus, Av."),
(33475825190,"2020-02-10 21:21:01",5,"2935 Arcu. Road"),
(19745826194,"2018-10-03 15:04:34",6,"734-1405 Ullamcorper. St."),
(75658519132,"2019-07-22 14:22:59",7,"458-8539 Mauris Street"),
(47631797073,"2018-06-12 11:50:06",8,"Ap #232-9367 Vivamus Rd."),
(39947061087,"2020-04-26 17:06:01",9,"Ap #898-954 Dolor. Street"),
(72298404043,"2018-11-03 16:21:49",10,"P.O. Box 197, 4536 Praesent Street");
