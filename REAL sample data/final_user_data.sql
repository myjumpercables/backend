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
(276106824,"Mari.Kline","odio.Aliquam.vulputate@dolorsitamet.ca","User","MJX84HPW9EZ","8467 Sit Av.","9791312429"),
(837229318,"Michael.Castillo","nostra@euturpisNulla.ca","User","XFC94BDA6HC","Ap #240-2345 Et Av.","5383960365"),
(475001648,"Emi.Hayes","mauris@egestas.org","User","FMG20RHB0MA","490-8086 Sed Av.","3043930811"),
(509625107,"Chelsea.Maynard","vitae.sodales@quis.edu","Company","FIH07ACK4KD","P.O. Box 297, 9230 Purus, Av.","3669611650"),
(334758251,"Anthony.Cotton","Nullam.suscipit.est@nondapibusrutrum.net","Company","XAG58CLX3HD","2935 Arcu. Road","7366222686"),
(197458261,"Bethany.Gould","ante.blandit.viverra@Crasvehiculaaliquet.org","Company","YYW03HUA2SX","734-1405 Ullamcorper. St.","6341832938"),
(756585191,"Elmo.Powers","Nulla.interdum@ipsumSuspendissesagittis.org","Company","EXS73ZAV7ND","458-8539 Mauris Street","9073256832"),
(476317970,"Tatyana.Wagner","Donec.fringilla@neque.net","Company","CEJ38QJZ7ND","Ap #232-9367 Vivamus Rd.","1214584207"),
(399470610,"Malik.Barrera","risus.at@maurisblanditmattis.ca","Company","QOT31CGF9HV","Ap #898-954 Dolor. Street","8159538315"),
(722984040,"Chandler.Norris","vel.pede.blandit@egetdictum.ca","Company","TBL65SBE9XX","P.O. Box 197, 4536 Praesent Street","5577679919");
