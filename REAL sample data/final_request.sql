DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint,
  `state` varchar(255) default NULL,
  `company_id` mediumint default NULL,
  `request_id` mediumint default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `request_table` (`user_id`,`state`,`company_id`,`request_id`) VALUES 
(276106824,"0",546292851,351099390),
(837229318,"0",539327840,421328697),
(475001648,"1",902885044,729875653),
(509625107,"0",538662069,305793638),
(334758251,"0",197490165,932510337),
(197458261,"1",431975095,245123675),
(756585191,"1",417443054,897393166),
(476317970,"1",737719189,230916791),
(399470610,"1",251048967,683281518),
(722984040,"0",628344726,599090134);
