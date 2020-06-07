-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportiere Datenbank Struktur für reactable
CREATE DATABASE IF NOT EXISTS `reactable` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `reactable`;

-- Exportiere Struktur von Tabelle reactable.multiplayer
CREATE TABLE IF NOT EXISTS `multiplayer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player1` int(11) NOT NULL,
  `player2` int(11) NOT NULL,
  `modelid` int(11) NOT NULL,
  `time` time DEFAULT NULL,
  `createtime` timestamp NULL DEFAULT NULL,
  `winner` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player1` (`player1`),
  KEY `player2` (`player2`),
  KEY `model` (`modelid`),
  KEY `winner` (`winner`),
  CONSTRAINT `model` FOREIGN KEY (`modelid`) REFERENCES `modell` (`id`),
  CONSTRAINT `player1` FOREIGN KEY (`player1`) REFERENCES `player` (`id`),
  CONSTRAINT `player2` FOREIGN KEY (`player2`) REFERENCES `player` (`id`),
  CONSTRAINT `winner` FOREIGN KEY (`winner`) REFERENCES `player` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Daten Export vom Benutzer nicht ausgewählt

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
