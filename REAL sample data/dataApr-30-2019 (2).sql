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
(27610682449,15959271765,"Change Oil","drain and change oil and dispode of used motor oil",71253366251,"2020-02-20 14:22:27"),
(27610682449,35145633993,"Top Off Fluids","top off fluids including transmission and windshield wiper fluid",43793326392,"2019-04-23 08:28:10"),
(47500164899,65137949269,"Change Tires","change and rotate tires",91195890558,"2019-05-31 11:10:09"),
(50962510751,38176248632,"Vehicle Inspection","determined maintenance and repair needs: adjusted fluid levels and tire air pressure",44378544418,"2019-11-13 05:26:56"),
(33475825190,10750326723,"Grease Bearings","examine repairs and overhaul brake systems according to set standards",62175105125,"2020-02-10 21:21:01"),
(19745826194,50507556218,"Vehicle Inspection","replaced leaf springs, tail pipes, and mufflers",40404395745,"2018-10-03 15:04:34"),
(75658519132,80137122338,"Battery Replacement","installed new battery and properly disposed of old battery",96079893480,"2019-07-22 14:22:59"),
(47631797073,99360304884,"Change Oil","drain and change oil and dispode of used motor oil",54867312335,"2018-06-12 11:50:06"),
(39947061087,63226540908,"Change Tires","change and rotate tires",44762930283,"2020-04-26 17:06:01"),
(72298404043,55646722503,"Battery Replacement","change and rotate tires",94121386869,"2018-11-03 16:21:49");
