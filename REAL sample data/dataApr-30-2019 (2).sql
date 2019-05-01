DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint default NULL,
  `car_id` mediumint default NULL,
  `service_type`,`service_desc` varchar(255) default NULL,
  `service_id` mediumint default NULL,
  `date` varchar(255),
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `service_history_table` (`user_id`,`car_id`,`service_type`,`service_desc`,`service_id`,`date`) VALUES 
(276106824,159592717,"Change Oil","drain and change oil and dispode of used motor oil",7125336,"2020-02-20 14:22:27"),
(276106824,351456339,"Top Off Fluids","top off fluids including transmission and windshield wiper fluid",4379332,"2019-04-23 08:28:10"),
(475001648,651379492,"Change Tires","change and rotate tires",9119589,"2019-05-31 11:10:09"),
(509625107,381762486,"Vehicle Inspection","determined maintenance and repair needs: adjusted fluid levels and tire air pressure",4437854,"2019-11-13 05:26:56"),
(334758251,107503267,"Grease Bearings","examine repairs and overhaul brake systems according to set standards",6217510,"2020-02-10 21:21:01"),
(197458261,505075562,"Vehicle Inspection","replaced leaf springs, tail pipes, and mufflers",4040439,"2018-10-03 15:04:34"),
(756585191,801371223,"Battery Replacement","installed new battery and properly disposed of old battery",9607989,"2019-07-22 14:22:59"),
(476317970,993603048,"Change Oil","drain and change oil and dispode of used motor oil",5486731,"2018-06-12 11:50:06"),
(399470610,632265409,"Change Tires","change and rotate tires",4476293,"2020-04-26 17:06:01"),
(722984040,556467225,"Battery Replacement","change and rotate tires",9412138,"2018-11-03 16:21:49");
