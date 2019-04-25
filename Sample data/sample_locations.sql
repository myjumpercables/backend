
/*sample data-locations*/
/*DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `company` varchar(255) default NULL,
  `service_loc` varchar(255) default NULL,
  `city` varchar(255),
  `mechanic` varchar(255) default NULL,
  `phone` varchar(100) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;*/

INSERT INTO `myTable` (`company`,`service_loc`,`city`,`mechanic`,`phone`) VALUES ("General Motors","478-5237 Donec Avenue","Westing","Pete","(688) 325-9394"),
("Kenworth","P.O. Box 272, 7676 Tempus Avenue","Birkenhead","Benedict","(910) 281-3860"),
("RAM Trucks","P.O. Box 145, 1050 Pellentesque Av.","Avondale","Dawn","(917) 402-3588"),
("Mitsubishi Motors","8803 Ipsum Avenue","Latera","Bruce","(379) 919-8427"),
("Renault","9244 Mollis Ave","Freising","Danielle","(457) 395-1294"),
("Volvo","Ap #367-1145 Vel, Avenue","Kingman","Jack","(833) 257-3719"),
("JLR","P.O. Box 542, 8319 Quisque Street","Clearlake","Steve","(144) 345-7951"),
("Skoda","Ap #501-4721 Donec Rd.","Queen Creek","Robert","(590) 875-7689"),
("Mercedes-Benz","P.O. Box 463, 4973 Pellentesque Street","Richmond","Brian","(836) 618-6966"),
("Tata Motors","9527 Et Ave","Oshkosh","Alex","(402) 792-9506");
