DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint,
  `state` varchar(255) default NULL,
  `company_id` mediumint default NULL,
  `request_id` mediumint default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `myTable` (`user_id`,`state`,`company_id`,`request_id`) VALUES (27610682449,,"pending",54629285186,35109939030),
(83722931863,"0",53932784069,42132869740),
(47500164899,"1",90288504404,72987565379),
(50962510751,"pending",53866206989,30579363876),
(33475825190,"0",19749016556,93251033765),
(19745826194,"1",43197509534,24512367513),
(75658519132,"1",41744305454,89739316618),
(47631797073,"1",73771918942,23091679182),
(39947061087,"1",25104896738,68328151823),
(72298404043,"pending",62834472693,59909013472);
