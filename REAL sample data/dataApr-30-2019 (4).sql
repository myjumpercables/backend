DROP TABLE `repair_table`;

CREATE TABLE `repair_table` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `repair_desc` mediumint,
  `repair_type` mediumint,
  `cost` varchar(100) default NULL,
  `date` varchar(255),
  `repair_id` mediumint default NULL,
  `service_id` mediumint,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `repair_table` (`repair_desc`,`repair_type`,`cost`,`date`,`repair_id`,`service_id`) VALUES 
("reached 5,000 miles since last oil change","Oil Change","78.39","2020-02-20 14:22:27",736391635,7125336),
("need fluid adjustments due to transmission issues","Check Fluids","61.18","2019-04-23 08:28:10",466571878,4379332),
("reached 8,000 miles since last tire change","Tire Change","49.49","2019-05-31 11:10:09",823440805,9119589),
("getting vehicle inspection before long road trip","Vehicle Inspection","83.51","2019-11-13 05:26:56",254256551,4437854),
("car has recently had brake problems","Inspect Brakes","25.36","2020-02-10 21:21:01",462459836,6217510),
("getting monthly vehicle inspection","Vehicle Inspection","157.17","2018-10-03 15:04:34",350311027,4040439),
("car will not start due to dead battery","Battery Replacement","246.42","2019-07-22 14:22:59",361936988,9607989),
("reached 5,000 miles since last oil change","Oil Change","81.52","2018-06-12 11:50:06",431378205,5486731),
("reached 8,000 miles since last tire change","Tire Change","54.52","2020-04-26 17:06:01",338052348,4476293),
("car will not start due to dead battery","Battery Replacement","305.05","2018-11-03 16:21:49",947861903,9412138);
