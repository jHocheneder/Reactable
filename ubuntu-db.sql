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

-- Exportiere Struktur von Tabelle reactable.game
CREATE TABLE IF NOT EXISTS `game` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` time DEFAULT NULL,
  `createtime` timestamp NULL DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `modellid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `modellgame` (`modellid`),
  KEY `user_modell` (`userid`),
  CONSTRAINT `modell_game` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`),
  CONSTRAINT `user_modell` FOREIGN KEY (`userid`) REFERENCES `player` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle reactable.modell
CREATE TABLE IF NOT EXISTS `modell` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `schwierigkeit` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle reactable.multiplayer
CREATE TABLE IF NOT EXISTS `multiplayer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player1` int(11) NOT NULL,
  `player2` int(11) NOT NULL,
  `modelid` int(11) NOT NULL,
  `time_p1` time DEFAULT NULL,
  `createtime_p1` timestamp NULL DEFAULT NULL,
  `time_p2` time DEFAULT NULL,
  `createtime_p2` timestamp NULL DEFAULT NULL,
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

-- Exportiere Struktur von Tabelle reactable.player
CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(512) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle reactable.teil
CREATE TABLE IF NOT EXISTS `teil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modellid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `modellteil` (`modellid`),
  CONSTRAINT `modell_teil` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle reactable.teil_wuerfel
CREATE TABLE IF NOT EXISTS `teil_wuerfel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wuerfelid` int(11) NOT NULL,
  `teilid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wuerfelt` (`wuerfelid`),
  KEY `teilw` (`teilid`),
  CONSTRAINT `ttw` FOREIGN KEY (`teilid`) REFERENCES `teil` (`id`),
  CONSTRAINT `wtw` FOREIGN KEY (`wuerfelid`) REFERENCES `wuerfel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle reactable.wuerfel
CREATE TABLE IF NOT EXISTS `wuerfel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x_pos` int(11) NOT NULL,
  `y_pos` int(11) NOT NULL,
  `z_pos` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Daten Export vom Benutzer nicht ausgewählt

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
