/*
SQLyog Ultimate v12.4.3 (64 bit)
MySQL - 10.4.20-MariaDB : Database - dbform
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dbform` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `dbform`;

/*Table structure for table `tbsiswa` */

DROP TABLE IF EXISTS `tbsiswa`;

CREATE TABLE `tbsiswa` (
  `NIS` varchar(10) NOT NULL,
  `namaSiswa` varchar(30) NOT NULL,
  `tglLahir` varchar(10) NOT NULL,
  `noHp` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`NIS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tbsiswa` */

insert  into `tbsiswa`(`NIS`,`namaSiswa`,`tglLahir`,`noHp`,`email`) values 
('0011223344','Hafizh ALkautsar','2005-03-05','0812345843','apisaja.12@gmail.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
