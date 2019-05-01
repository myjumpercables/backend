DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `user_id` mediumint default NULL,
  `username` varchar(255) default NULL,
  `email` varchar(255) default NULL,
  `type` varchar(255) default NULL,
  `password` varchar(255),
  `location` varchar(255) default NULL,
  `phone` varchar(100) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `user_table` (`user_id`,`username`,`email`,`type`,`password`,`location`,`phone`) VALUES 
(27610682449,"Mari.Kline","odio.Aliquam.vulputate@dolorsitamet.ca","User","MJX84HPW9EZ","8467 Sit Av.","979-131-2429"),
(83722931863,"Michael.Castillo","nostra@euturpisNulla.ca","User","XFC94BDA6HC","Ap #240-2345 Et Av.","538-396-0365"),
(47500164899,"Emi.Hayes","mauris@egestas.org","User","FMG20RHB0MA","490-8086 Sed Av.","304-393-0811"),
(50962510751,"Chelsea.Maynard","vitae.sodales@quis.edu","Company","FIH07ACK4KD","P.O. Box 297, 9230 Purus, Av.","366-961-1650"),
(33475825190,"Anthony.Cotton","Nullam.suscipit.est@nondapibusrutrum.net","Company","XAG58CLX3HD","2935 Arcu. Road","736-622-2686"),
(19745826194,"Bethany.Gould","ante.blandit.viverra@Crasvehiculaaliquet.org","Company","YYW03HUA2SX","734-1405 Ullamcorper. St.","634-183-2938"),
(75658519132,"Elmo.Powers","Nulla.interdum@ipsumSuspendissesagittis.org","Company","EXS73ZAV7ND","458-8539 Mauris Street","907-325-6832"),
(47631797073,"Tatyana.Wagner","Donec.fringilla@neque.net","Company","CEJ38QJZ7ND","Ap #232-9367 Vivamus Rd.","121-458-4207"),
(39947061087,"Malik.Barrera","risus.at@maurisblanditmattis.ca","Company","QOT31CGF9HV","Ap #898-954 Dolor. Street","815-953-8315"),
(72298404043,"Chandler.Norris","vel.pede.blandit@egetdictum.ca","Company","TBL65SBE9XX","P.O. Box 197, 4536 Praesent Street","557-767-9919");
