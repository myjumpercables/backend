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
(276106824,"2020-02-20 14:22:27","Change Oil","8467 Sit Av."),
(837229318,"2019-04-23 08:28:10","Top Off Fluids","Ap #240-2345 Et Av."),
(475001648,"2019-05-31 11:10:09","Change Tires","490-8086 Sed Av."),
(509625107,"2019-11-13 05:26:56","Vehicle Inspection","P.O. Box 297, 9230 Purus, Av."),
(334758251,"2020-02-10 21:21:01","Grease Bearings","2935 Arcu. Road"),
(197458261,"2018-10-03 15:04:34","Vehicle Inspection","734-1405 Ullamcorper. St."),
(756585191,"2019-07-22 14:22:59","Battery Replacement","458-8539 Mauris Street"),
(476317970,"2018-06-12 11:50:06","Change Oil","Ap #232-9367 Vivamus Rd."),
(399470610,"2020-04-26 17:06:01","Change Tires","Ap #898-954 Dolor. Street"),
(722984040,"2018-11-03 16:21:49","Battery Replacement","P.O. Box 197, 4536 Praesent Street");
