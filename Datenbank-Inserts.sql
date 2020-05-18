-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Mai 2020 um 15:05
-- Server-Version: 10.1.35-MariaDB
-- PHP-Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: reactable
--

-- --------------------------------------------------------

INSERT INTO modell (id, schwierigkeit) VALUES(1, 'Soma-Medium');
INSERT INTO modell (id, schwierigkeit) VALUES(2, 'Medium-Hard');

-- --------------------------------------------------------

--
-- Daten für Tabelle teil
--

INSERT INTO teil (id, modellid) VALUES(1, 1);
INSERT INTO teil (id, modellid) VALUES(2, 1);
INSERT INTO teil (id, modellid) VALUES(3, 1);
INSERT INTO teil (id, modellid) VALUES(4, 1);
INSERT INTO teil (id, modellid) VALUES(5, 1);
INSERT INTO teil (id, modellid) VALUES(6, 1);
INSERT INTO teil (id, modellid) VALUES(7, 1);
INSERT INTO teil (id, modellid) VALUES(8, 2);
INSERT INTO teil (id, modellid) VALUES(9, 2);
INSERT INTO teil (id, modellid) VALUES(10, 2);
INSERT INTO teil (id, modellid) VALUES(11, 2);
INSERT INTO teil (id, modellid) VALUES(12, 2);
INSERT INTO teil (id, modellid) VALUES(13, 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle teil_wuerfel
--

--
-- Daten für Tabelle teil_wuerfel
--

INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(1, 3, 1);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(2, 6, 1);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(3, 15, 1);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(4, 11, 2);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(5, 14, 2);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(6, 5, 2);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(7, 8, 2);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(8, 10, 3);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(9, 19, 3);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(10, 20, 3);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(11, 22, 3);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(12, 12, 4);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(13, 21, 4);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(14, 23, 4);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(15, 24, 4);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(16, 9, 5);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(17, 18, 5);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(18, 26, 5);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(19, 27, 5);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(20, 1, 6);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(21, 2, 6);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(22, 4, 6);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(23, 13, 6);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(24, 7, 7);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(25, 16, 7);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(26, 17, 7);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(27, 25, 7);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(28, 1, 8);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(29, 2, 8);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(30, 10, 8);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(31, 19, 8);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(32, 3, 9);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(33, 12, 9);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(34, 11, 9);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(35, 15, 9);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(36, 21, 9);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(37, 4, 10);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(38, 13, 10);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(39, 14, 10);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(40, 23, 10);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(41, 20, 10);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(42, 5, 11);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(43, 6, 11);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(44, 9, 11);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(45, 18, 11);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(46, 7, 12);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(47, 8, 12);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(48, 16, 12);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(49, 17, 12);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(50, 22, 13);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(51, 24, 13);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(52, 25, 13);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(53, 26, 13);
INSERT INTO teil_wuerfel (id, wuerfelid, teilid) VALUES(54, 27, 13);

-- --------------------------------------------------------

--
-- Daten für Tabelle wuerfel
--

INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(1, 1, 1, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(2, 2, 1, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(3, 3, 1, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(4, 1, 2, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(5, 2, 2, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(6, 3, 2, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(7, 1, 3, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(8, 2, 3, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(9, 3, 3, 1);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(10, 1, 1, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(11, 2, 1, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(12, 3, 1, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(13, 1, 2, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(14, 2, 2, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(15, 3, 2, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(16, 1, 3, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(17, 2, 3, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(18, 3, 3, 2);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(19, 1, 1, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(20, 2, 1, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(21, 3, 1, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(22, 1, 2, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(23, 2, 2, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(24, 3, 2, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(25, 1, 3, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(26, 2, 3, 3);
INSERT INTO wuerfel (id, x_pos, y_pos, z_pos) VALUES(27, 3, 3, 3);


