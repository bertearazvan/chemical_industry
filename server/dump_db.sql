-- MySQL dump 10.13  Distrib 5.6.10, for Linux (x86_64)
--
-- Host: localhost    Database: chemical_industry
-- ------------------------------------------------------
-- Server version	5.6.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audit`
--

DROP TABLE IF EXISTS `audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audit` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `old_data` varchar(255) DEFAULT NULL,
  `new_data` varchar(255) NOT NULL,
  `column_name` varchar(255) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `user_action` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `audit_user_action_foreign` (`user_action`),
  CONSTRAINT `audit_user_action_foreign` FOREIGN KEY (`user_action`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit`
--

LOCK TABLES `audit` WRITE;
/*!40000 ALTER TABLE `audit` DISABLE KEYS */;
INSERT INTO `audit` VALUES (1,NULL,'2020-05-30 09:24:29','date_arrival','deliveries','UPDATE',1,'2020-05-30 09:24:29'),(2,NULL,'3','status_id','deliveries','UPDATE',1,'2020-05-30 09:24:29'),(3,NULL,'6','id','drivers_backlog','INSERT',1,'2020-05-30 09:55:48'),(4,NULL,'5','id','deliveries','INSERT',1,'2020-05-30 09:55:48'),(5,'3','2','storage_amount','warehouse_stocks','UPDATE',1,'2020-05-30 09:55:48'),(6,'5','4','current_total_storage','warehouses','UPDATE',1,'2020-05-30 09:55:48'),(7,NULL,'0','id','delivery_stocks','INSERT',1,'2020-05-30 09:55:48'),(8,'4','1','storage_amount','warehouse_stocks','UPDATE',1,'2020-05-30 09:55:48'),(9,'5','2','current_total_storage','warehouses','UPDATE',1,'2020-05-30 09:55:48'),(10,NULL,'0','id','delivery_stocks','INSERT',1,'2020-05-30 09:55:48'),(11,NULL,'2020-05-30 09:56:23','date_arrival','deliveries','UPDATE',1,'2020-05-30 09:56:23'),(12,NULL,'3','status_id','deliveries','UPDATE',1,'2020-05-30 09:56:23'),(13,NULL,'7','id','drivers_backlog','INSERT',1,'2020-05-30 09:56:52'),(14,NULL,'6','id','deliveries','INSERT',1,'2020-05-30 09:56:52'),(15,'2','1','storage_amount','warehouse_stocks','UPDATE',1,'2020-05-30 09:56:52'),(16,'4','3','current_total_storage','warehouses','UPDATE',1,'2020-05-30 09:56:52'),(17,NULL,'0','id','delivery_stocks','INSERT',1,'2020-05-30 09:56:52'),(18,NULL,'8','id','drivers_backlog','INSERT',1,'2020-06-01 11:30:14'),(19,NULL,'7','id','deliveries','INSERT',1,'2020-06-01 11:30:14'),(20,'1','3','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-01 11:30:14'),(21,'3','5','current_total_storage','warehouses','UPDATE',1,'2020-06-01 11:30:14'),(22,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-01 11:30:14'),(23,NULL,'2020-06-04 07:46:10','date_arrival','deliveries','UPDATE',1,'2020-06-04 07:46:10'),(24,NULL,'3','status_id','deliveries','UPDATE',1,'2020-06-04 07:46:10'),(25,NULL,'9','id','drivers_backlog','INSERT',1,'2020-06-13 10:33:05'),(26,NULL,'8','id','deliveries','INSERT',1,'2020-06-13 10:33:05'),(27,'3','4','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:05'),(28,'5','6','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:05'),(29,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:05'),(30,'2','5','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:05'),(31,'6','9','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:05'),(32,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:05'),(33,NULL,'10','id','drivers_backlog','INSERT',1,'2020-06-13 10:33:29'),(34,NULL,'9','id','deliveries','INSERT',1,'2020-06-13 10:33:29'),(35,'0','2','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:29'),(36,'6','8','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:30'),(37,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:30'),(38,'5','6','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:30'),(39,'9','10','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:30'),(40,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:30'),(41,NULL,'11','id','drivers_backlog','INSERT',1,'2020-06-13 10:33:45'),(42,NULL,'10','id','deliveries','INSERT',1,'2020-06-13 10:33:45'),(43,'4','2','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:45'),(44,'10','8','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:45'),(45,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:45'),(46,'6','5','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:33:45'),(47,'8','7','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:33:45'),(48,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:33:45'),(49,NULL,'12','id','drivers_backlog','INSERT',1,'2020-06-13 10:34:08'),(50,NULL,'11','id','deliveries','INSERT',1,'2020-06-13 10:34:08'),(51,'2','0','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:34:08'),(52,'7','5','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:34:08'),(53,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:34:08'),(54,'2','1','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:34:08'),(55,'8','7','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:34:08'),(56,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:34:08'),(57,NULL,'13','id','drivers_backlog','INSERT',1,'2020-06-13 10:49:29'),(58,NULL,'12','id','deliveries','INSERT',1,'2020-06-13 10:49:29'),(59,'0','1','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:49:29'),(60,'5','6','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:49:29'),(61,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:49:29'),(62,'1','3','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:49:29'),(63,'7','9','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:49:29'),(64,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:49:29'),(65,NULL,'14','id','drivers_backlog','INSERT',1,'2020-06-13 10:50:16'),(66,NULL,'13','id','deliveries','INSERT',1,'2020-06-13 10:50:16'),(67,'3','1','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:50:16'),(68,'9','7','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:50:16'),(69,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:50:16'),(70,'5','4','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 10:50:16'),(71,'6','5','current_total_storage','warehouses','UPDATE',1,'2020-06-13 10:50:16'),(72,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 10:50:16'),(73,NULL,'15','id','drivers_backlog','INSERT',1,'2020-06-13 11:03:20'),(74,NULL,'14','id','deliveries','INSERT',1,'2020-06-13 11:03:20'),(75,'1','2','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 11:03:20'),(76,'5','6','current_total_storage','warehouses','UPDATE',1,'2020-06-13 11:03:20'),(77,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 11:03:20'),(78,'1','3','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 11:03:20'),(79,'7','9','current_total_storage','warehouses','UPDATE',1,'2020-06-13 11:03:20'),(80,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 11:03:20'),(81,'4','7','storage_amount','warehouse_stocks','UPDATE',1,'2020-06-13 11:03:20'),(82,'6','9','current_total_storage','warehouses','UPDATE',1,'2020-06-13 11:03:20'),(83,NULL,'0','id','delivery_stocks','INSERT',1,'2020-06-13 11:03:20'),(84,NULL,'2020-06-13 11:03:57','date_arrival','deliveries','UPDATE',1,'2020-06-13 11:03:57'),(85,NULL,'3','status_id','deliveries','UPDATE',1,'2020-06-13 11:03:57'),(86,NULL,'2020-06-13 11:04:20','date_arrival','deliveries','UPDATE',1,'2020-06-13 11:04:20'),(87,NULL,'3','status_id','deliveries','UPDATE',1,'2020-06-13 11:04:20'),(88,NULL,'2020-06-13 11:06:47','date_confirmed','deliveries','UPDATE',2,'2020-06-13 11:06:47'),(89,'3','4','status_id','deliveries','UPDATE',2,'2020-06-13 11:06:47'),(90,NULL,'2020-06-13 11:09:41','date_confirmed','deliveries','UPDATE',3,'2020-06-13 11:09:41'),(91,'1','4','status_id','deliveries','UPDATE',3,'2020-06-13 11:09:41'),(92,NULL,'2020-06-13 11:10:14','date_arrival','deliveries','UPDATE',1,'2020-06-13 11:10:14'),(93,NULL,'3','status_id','deliveries','UPDATE',1,'2020-06-13 11:10:14');
/*!40000 ALTER TABLE `audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chemicals`
--

DROP TABLE IF EXISTS `chemicals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chemicals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chemicals`
--

LOCK TABLES `chemicals` WRITE;
/*!40000 ALTER TABLE `chemicals` DISABLE KEYS */;
INSERT INTO `chemicals` VALUES (1,'Chemical A','2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'Chemical B','2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'Chemical C','2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `chemicals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `country_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cities_country_id_foreign` (`country_id`),
  CONSTRAINT `cities_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Copenhagen',1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'Aalborg',1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'Aarhus',1,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `continent` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Denmark','EU','2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'Germany','EU','2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'Belgium','EU','2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deliveries`
--

DROP TABLE IF EXISTS `deliveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deliveries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_no` varchar(255) DEFAULT NULL,
  `date_left` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date_arrival` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_confirmed` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status_id` int(10) unsigned NOT NULL,
  `case_handler` int(10) unsigned NOT NULL,
  `drivers_backlog_id` int(10) unsigned NOT NULL,
  `company_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `delivery_type` int(10) unsigned NOT NULL,
  `date_scheduled` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `deliveries_ticket_no_unique` (`ticket_no`),
  KEY `deliveries_status_id_foreign` (`status_id`),
  KEY `deliveries_case_handler_foreign` (`case_handler`),
  KEY `deliveries_drivers_backlog_id_foreign` (`drivers_backlog_id`),
  KEY `deliveries_company_id_foreign` (`company_id`),
  KEY `deliveries_delivery_type_foreign` (`delivery_type`),
  CONSTRAINT `deliveries_case_handler_foreign` FOREIGN KEY (`case_handler`) REFERENCES `users` (`id`),
  CONSTRAINT `deliveries_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `external_companies` (`id`),
  CONSTRAINT `deliveries_delivery_type_foreign` FOREIGN KEY (`delivery_type`) REFERENCES `delivery_types` (`id`),
  CONSTRAINT `deliveries_drivers_backlog_id_foreign` FOREIGN KEY (`drivers_backlog_id`) REFERENCES `drivers_backlog` (`id`),
  CONSTRAINT `deliveries_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `delivery_statuses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliveries`
--

LOCK TABLES `deliveries` WRITE;
/*!40000 ALTER TABLE `deliveries` DISABLE KEYS */;
INSERT INTO `deliveries` VALUES (1,'6f6515d1-8c89-4c0e-a41b-c34d25faed7f','2020-05-30 09:24:29','2020-05-30 09:24:29','0000-00-00 00:00:00',3,2,1,2,'2020-05-23 15:39:54','2020-05-30 09:24:29',1,'0000-00-00 00:00:00'),(2,'57077c04-3685-4d27-bf37-4589b19ee8b6','2020-05-30 09:56:23','2020-05-30 09:56:23','0000-00-00 00:00:00',3,3,2,3,'2020-05-23 15:39:54','2020-05-30 09:56:23',2,'0000-00-00 00:00:00'),(3,'a4e36484-7836-4049-8cbd-837026161da7','2020-05-23 15:39:54','0000-00-00 00:00:00','0000-00-00 00:00:00',1,7,3,3,'2020-05-23 15:39:54','2020-05-23 15:39:54',2,'0000-00-00 00:00:00'),(4,'d67472ea-1ea1-46af-af84-983364038258','2020-05-23 15:39:54','0000-00-00 00:00:00','0000-00-00 00:00:00',4,7,5,2,'2020-05-23 15:39:54','2020-05-23 15:39:54',1,'0000-00-00 00:00:00'),(5,'fd8fd385-bf6e-40ac-bbbb-e109df9b445b','2020-06-05 09:55:48','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,6,2,'2020-05-30 09:55:48','2020-05-30 09:55:48',2,'2020-06-06 09:55:48'),(6,'60fedb15-d5c0-4b5b-90df-96995e0d42fb','2020-06-05 09:56:52','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,7,3,'2020-05-30 09:56:52','2020-05-30 09:56:52',2,'2020-06-06 09:56:52'),(7,'734c249f-7b0e-4bdb-b18c-cae276878287','2020-06-04 07:46:10','2020-06-04 07:46:10','0000-00-00 00:00:00',3,4,8,1,'2020-06-01 11:30:14','2020-06-04 07:46:10',1,'2020-06-08 11:30:14'),(8,'3572f9db-d4cd-487d-8a90-d9bdb6e25602','2020-06-19 10:33:05','0000-00-00 00:00:00','0000-00-00 00:00:00',1,6,9,1,'2020-06-13 10:33:05','2020-06-13 10:33:05',1,'2020-06-20 10:33:05'),(9,'cdf87011-ac78-4cf6-8b59-c0af3980f1f4','2020-06-13 11:10:14','2020-06-13 11:10:14','2020-06-13 11:09:41',3,3,10,2,'2020-06-13 10:33:29','2020-06-13 11:10:14',1,'2020-06-20 10:33:29'),(10,'51ae580a-da12-4ee1-9832-5db3355f6f65','2020-06-19 10:33:45','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,11,2,'2020-06-13 10:33:45','2020-06-13 10:33:45',2,'2020-06-20 10:33:45'),(11,'a1b6ed6d-64ce-411b-b45e-b2b30b29562f','2020-06-19 10:34:08','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,12,3,'2020-06-13 10:34:08','2020-06-13 10:34:08',2,'2020-06-20 10:34:08'),(12,'eb5bea1f-8ed7-4247-ba72-fa8773db52d0','2020-06-13 11:06:47','2020-06-13 11:04:20','2020-06-13 11:06:47',4,2,13,3,'2020-06-13 10:49:29','2020-06-13 11:06:47',1,'2020-06-20 10:49:29'),(13,'11c23edb-2d07-4bb9-8ead-7eba7e435de9','2020-06-19 10:50:16','0000-00-00 00:00:00','0000-00-00 00:00:00',1,1,14,3,'2020-06-13 10:50:16','2020-06-13 10:50:16',2,'2020-06-20 10:50:16'),(14,'25f66b6c-a7cd-46f0-bb2a-6a9c9b799d0f','2020-06-13 11:03:57','2020-06-13 11:03:57','0000-00-00 00:00:00',3,6,15,2,'2020-06-13 11:03:20','2020-06-13 11:03:57',1,'2020-06-20 11:03:20');
/*!40000 ALTER TABLE `deliveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_statuses`
--

DROP TABLE IF EXISTS `delivery_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_statuses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_statuses`
--

LOCK TABLES `delivery_statuses` WRITE;
/*!40000 ALTER TABLE `delivery_statuses` DISABLE KEYS */;
INSERT INTO `delivery_statuses` VALUES (1,'initiated','2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'transit','2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'accepted','2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,'completed','2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `delivery_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_stocks`
--

DROP TABLE IF EXISTS `delivery_stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_stocks` (
  `delivery_id` int(10) unsigned NOT NULL,
  `chemical_id` int(10) unsigned NOT NULL,
  `warehouse_id` int(10) unsigned NOT NULL,
  `storage_amount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `delivery_stocks_delivery_id_chemical_id_warehouse_id_unique` (`delivery_id`,`chemical_id`,`warehouse_id`),
  KEY `delivery_stocks_warehouse_id_foreign` (`warehouse_id`),
  KEY `delivery_stocks_chemical_id_foreign` (`chemical_id`),
  CONSTRAINT `delivery_stocks_chemical_id_foreign` FOREIGN KEY (`chemical_id`) REFERENCES `chemicals` (`id`),
  CONSTRAINT `delivery_stocks_delivery_id_foreign` FOREIGN KEY (`delivery_id`) REFERENCES `deliveries` (`id`),
  CONSTRAINT `delivery_stocks_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_stocks`
--

LOCK TABLES `delivery_stocks` WRITE;
/*!40000 ALTER TABLE `delivery_stocks` DISABLE KEYS */;
INSERT INTO `delivery_stocks` VALUES (1,1,1,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(1,3,1,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,3,2,4,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,1,1,4,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,2,2,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,2,3,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(5,1,1,1,'2020-05-30 09:55:48','2020-05-30 09:55:48'),(5,2,3,3,'2020-05-30 09:55:48','2020-05-30 09:55:48'),(6,1,1,1,'2020-05-30 09:56:52','2020-05-30 09:56:52'),(7,1,1,2,'2020-06-01 11:30:14','2020-06-01 11:30:14'),(8,1,1,1,'2020-06-13 10:33:05','2020-06-13 10:33:05'),(8,3,1,3,'2020-06-13 10:33:05','2020-06-13 10:33:05'),(9,2,2,2,'2020-06-13 10:33:30','2020-06-13 10:33:30'),(9,3,1,1,'2020-06-13 10:33:30','2020-06-13 10:33:30'),(10,1,1,2,'2020-06-13 10:33:45','2020-06-13 10:33:45'),(10,3,1,1,'2020-06-13 10:33:45','2020-06-13 10:33:45'),(11,1,1,2,'2020-06-13 10:34:08','2020-06-13 10:34:08'),(11,2,2,1,'2020-06-13 10:34:08','2020-06-13 10:34:08'),(12,1,1,1,'2020-06-13 10:49:29','2020-06-13 10:49:29'),(12,2,2,2,'2020-06-13 10:49:29','2020-06-13 10:49:29'),(13,2,2,2,'2020-06-13 10:50:16','2020-06-13 10:50:16'),(13,3,1,1,'2020-06-13 10:50:16','2020-06-13 10:50:16'),(14,1,1,1,'2020-06-13 11:03:20','2020-06-13 11:03:20'),(14,2,2,2,'2020-06-13 11:03:20','2020-06-13 11:03:20'),(14,3,1,3,'2020-06-13 11:03:20','2020-06-13 11:03:20');
/*!40000 ALTER TABLE `delivery_stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_types`
--

DROP TABLE IF EXISTS `delivery_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_types`
--

LOCK TABLES `delivery_types` WRITE;
/*!40000 ALTER TABLE `delivery_types` DISABLE KEYS */;
INSERT INTO `delivery_types` VALUES (1,'Delivery'),(2,'Pick up');
/*!40000 ALTER TABLE `delivery_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `depots`
--

DROP TABLE IF EXISTS `depots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `depots` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `city_id` int(10) unsigned NOT NULL,
  `total_warehouses` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `depots_city_id_foreign` (`city_id`),
  CONSTRAINT `depots_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depots`
--

LOCK TABLES `depots` WRITE;
/*!40000 ALTER TABLE `depots` DISABLE KEYS */;
INSERT INTO `depots` VALUES (1,1,5,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,2,5,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,3,5,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `depots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drivers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `company_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `drivers_company_id_foreign` (`company_id`),
  CONSTRAINT `drivers_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `external_companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers`
--

LOCK TABLES `drivers` WRITE;
/*!40000 ALTER TABLE `drivers` DISABLE KEYS */;
INSERT INTO `drivers` VALUES (1,'steven','Steven','Albury','+4501010101',1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'andrei','Andrei','Stefan','+4501010101',1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'paulina','Paulina','Kazmierczak','+4501010101',3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,'charlene','Charlene','Marteyn','+4501010101',3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(5,'razvan','Razvan','Bertea','+4501010101',2,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drivers_backlog`
--

DROP TABLE IF EXISTS `drivers_backlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drivers_backlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `driver_id_1` int(10) unsigned NOT NULL,
  `driver_id_2` int(10) unsigned DEFAULT NULL,
  `truck_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `drivers_backlog_driver_id_1_foreign` (`driver_id_1`),
  KEY `drivers_backlog_truck_id_foreign` (`truck_id`),
  CONSTRAINT `drivers_backlog_driver_id_1_foreign` FOREIGN KEY (`driver_id_1`) REFERENCES `drivers` (`id`),
  CONSTRAINT `drivers_backlog_truck_id_foreign` FOREIGN KEY (`truck_id`) REFERENCES `trucks` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers_backlog`
--

LOCK TABLES `drivers_backlog` WRITE;
/*!40000 ALTER TABLE `drivers_backlog` DISABLE KEYS */;
INSERT INTO `drivers_backlog` VALUES (1,1,2,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,2,NULL,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,5,NULL,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,3,NULL,4,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(5,4,NULL,5,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(6,5,NULL,2,'2020-05-30 09:55:48','2020-05-30 09:55:48'),(7,3,NULL,4,'2020-05-30 09:56:52','2020-05-30 09:56:52'),(8,5,NULL,3,'2020-06-01 11:30:14','2020-06-01 11:30:14'),(9,1,NULL,2,'2020-06-13 10:33:05','2020-06-13 10:33:05'),(10,2,NULL,2,'2020-06-13 10:33:29','2020-06-13 10:33:29'),(11,2,NULL,4,'2020-06-13 10:33:45','2020-06-13 10:33:45'),(12,3,NULL,1,'2020-06-13 10:34:08','2020-06-13 10:34:08'),(13,3,NULL,4,'2020-06-13 10:49:29','2020-06-13 10:49:29'),(14,3,NULL,2,'2020-06-13 10:50:16','2020-06-13 10:50:16'),(15,3,NULL,3,'2020-06-13 11:03:20','2020-06-13 11:03:20');
/*!40000 ALTER TABLE `drivers_backlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `external_companies`
--

DROP TABLE IF EXISTS `external_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `external_companies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city_id` int(10) unsigned NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `external_companies_city_id_foreign` (`city_id`),
  CONSTRAINT `external_companies_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_companies`
--

LOCK TABLES `external_companies` WRITE;
/*!40000 ALTER TABLE `external_companies` DISABLE KEYS */;
INSERT INTO `external_companies` VALUES (1,'cheManager.com',1,'+4500000002','copenhagen address','2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'chemicalMine ApS',2,'+4500000004','the danish mine address','2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'bombFactory A/S',2,'+4500000005','somewhere address','2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `external_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (69,'20200501125229_users.js',1,'2020-05-23 15:39:48'),(70,'20200509202027_countries.js',1,'2020-05-23 15:39:48'),(71,'20200509202139_cities.js',1,'2020-05-23 15:39:48'),(72,'20200510192723_chemicals.js',1,'2020-05-23 15:39:48'),(73,'20200510193324_external_companies.js',1,'2020-05-23 15:39:48'),(74,'20200510193559_drivers.js',1,'2020-05-23 15:39:48'),(75,'20200510194041_trucks.js',1,'2020-05-23 15:39:48'),(76,'20200510194303_drivers_backlog.js',1,'2020-05-23 15:39:48'),(77,'20200510194853_depots.js',1,'2020-05-23 15:39:48'),(78,'20200510195035_warehouses.js',1,'2020-05-23 15:39:48'),(79,'20200510195410_aditional_columns_to_users.js',1,'2020-05-23 15:39:48'),(80,'20200510195836_warehouses_stock.js',1,'2020-05-23 15:39:48'),(81,'20200510200356_delivery_status.js',1,'2020-05-23 15:39:48'),(82,'20200510200456_deliveries.js',1,'2020-05-23 15:39:48'),(83,'20200510201419_deliveries_stock.js',1,'2020-05-23 15:39:48'),(84,'20200511122254_adding_updated_and_created_to_all_tables.js',1,'2020-05-23 15:39:49'),(85,'20200513091515_tokens.js',1,'2020-05-23 15:39:49'),(86,'20200516151845_add_delivery_type_table.js',1,'2020-05-23 15:39:49'),(87,'20200520115346_modify_table_deliveries.js',1,'2020-05-23 15:39:49'),(88,'20200523124918_audit_table.js',1,'2020-05-23 15:39:49');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `token` varchar(255) NOT NULL,
  `ttl` int(11) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYW5kZXJzIiwiaWF0IjoxNTkyMDQ2NjYzfQ.VkGc6d7sqyc2xCs-Prjmj6m2so3kxnHhmJNPzHt-VmI',3600000,1,'2020-06-13 11:11:03','2020-06-13 11:11:03'),('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoic3RldmVuIiwiaWF0IjoxNTkyMDQ2NjIyfQ.Zb1ch5UdvuwROZWnPJoT46YluVfDPYsTgqxmRVfQBK8',3600000,2,'2020-06-13 11:10:22','2020-06-13 11:10:22'),('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiYW5kcmVpIiwiaWF0IjoxNTkyMDQ2NTc0fQ.9Vur-szXjcCtlCrGlywPBdhMiNmX_toI6_kVo0ZYpVM',3600000,3,'2020-06-13 11:09:34','2020-06-13 11:09:34');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trucks`
--

DROP TABLE IF EXISTS `trucks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trucks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `plate_no` varchar(255) NOT NULL,
  `total_capacity` int(10) unsigned NOT NULL,
  `company_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `trucks_company_id_foreign` (`company_id`),
  CONSTRAINT `trucks_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `external_companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trucks`
--

LOCK TABLES `trucks` WRITE;
/*!40000 ALTER TABLE `trucks` DISABLE KEYS */;
INSERT INTO `trucks` VALUES (1,'DK90CPH',5,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(2,'DK91CPH',5,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,'DK92AAH',5,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(4,'DK93AAL',5,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(5,'DK94AAL',5,2,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `trucks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phone_number` varchar(255) DEFAULT NULL,
  `depot_id` int(10) unsigned NOT NULL,
  `warehouse_id` int(10) unsigned DEFAULT NULL,
  `is_active` int(10) unsigned NOT NULL DEFAULT '1',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  KEY `users_depot_id_foreign` (`depot_id`),
  CONSTRAINT `users_depot_id_foreign` FOREIGN KEY (`depot_id`) REFERENCES `depots` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'anders','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Anders','Latif','2020-05-23 15:39:54','+4500000001',1,NULL,1,'2020-05-23 15:39:54'),(2,'steven','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Steven','Albury','2020-05-23 15:39:54','+4500000001',1,1,1,'2020-05-23 15:39:54'),(3,'andrei','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Stefan-Andrei','Atudorei','2020-05-23 15:39:54','+4500000001',1,4,1,'2020-05-23 15:39:54'),(4,'cassandra','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Cassandra','Tiltack','2020-05-23 15:39:54','+4500000001',1,3,1,'2020-05-23 15:39:54'),(5,'charlene','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Charlene','Marteyn','2020-05-23 15:39:54','+4500000001',1,5,1,'2020-05-23 15:39:54'),(6,'paulina','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Paulina','Kazmierczak','2020-05-23 15:39:54','+4500000001',1,2,1,'2020-05-23 15:39:54'),(7,'razvan','$2b$10$.4cXctESTDCJfTvOZcXe/OHM1VpW93b/OgCdB.xJNeKSyHxDmw9vy','Razvan','bertea','2020-05-23 15:39:54','+4500000001',1,2,1,'2020-05-23 15:39:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse_stocks`
--

DROP TABLE IF EXISTS `warehouse_stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `warehouse_stocks` (
  `warehouse_id` int(10) unsigned NOT NULL,
  `chemical_id` int(10) unsigned NOT NULL,
  `storage_amount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `warehouse_stocks_warehouse_id_chemical_id_unique` (`warehouse_id`,`chemical_id`),
  KEY `warehouse_stocks_chemical_id_foreign` (`chemical_id`),
  CONSTRAINT `warehouse_stocks_chemical_id_foreign` FOREIGN KEY (`chemical_id`) REFERENCES `chemicals` (`id`),
  CONSTRAINT `warehouse_stocks_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse_stocks`
--

LOCK TABLES `warehouse_stocks` WRITE;
/*!40000 ALTER TABLE `warehouse_stocks` DISABLE KEYS */;
INSERT INTO `warehouse_stocks` VALUES (1,1,2,'2020-05-23 15:39:54','2020-06-13 11:03:20'),(1,3,7,'2020-05-23 15:39:54','2020-06-13 11:03:20'),(2,2,3,'2020-06-13 10:33:29','2020-06-13 11:03:20'),(2,3,6,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(3,2,1,'2020-05-23 15:39:54','2020-05-30 09:55:48'),(3,3,1,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `warehouse_stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `warehouses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `position` int(10) unsigned NOT NULL,
  `current_total_storage` int(10) unsigned NOT NULL DEFAULT '0',
  `storage_total_capacity` int(10) unsigned NOT NULL,
  `depot_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `warehouses_depot_id_foreign` (`depot_id`),
  CONSTRAINT `warehouses_depot_id_foreign` FOREIGN KEY (`depot_id`) REFERENCES `depots` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouses`
--

LOCK TABLES `warehouses` WRITE;
/*!40000 ALTER TABLE `warehouses` DISABLE KEYS */;
INSERT INTO `warehouses` VALUES (1,1,9,10,1,'2020-05-23 15:39:54','2020-06-13 11:03:20'),(2,2,9,12,1,'2020-05-23 15:39:54','2020-06-13 11:03:20'),(3,3,2,5,1,'2020-05-23 15:39:54','2020-05-30 09:55:48'),(4,4,0,3,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(5,5,0,9,1,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(6,1,0,10,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(7,2,0,12,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(8,3,0,5,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(9,4,0,3,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(10,5,0,9,2,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(11,1,0,10,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(12,2,0,12,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(13,3,0,5,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(14,4,0,3,3,'2020-05-23 15:39:54','2020-05-23 15:39:54'),(15,5,0,9,3,'2020-05-23 15:39:54','2020-05-23 15:39:54');
/*!40000 ALTER TABLE `warehouses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-13 11:15:49
