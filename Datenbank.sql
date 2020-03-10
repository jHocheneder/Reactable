-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 26. Feb 2020 um 14:35
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
-- Datenbank: `reactable`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `time` time NOT NULL,
  `createtime` timestamp NULL DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `modellid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `modell`
--

CREATE TABLE `modell` (
  `id` int(11) NOT NULL,
  `schwierigkeit` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `vName` varchar(50) NOT NULL,
  `nName` varchar(60) NOT NULL,
  `username` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `teil`
--

CREATE TABLE `teil` (
  `id` int(11) NOT NULL,
  `modellid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `teil_wuerfel`
--

CREATE TABLE `teil_wuerfel` (
  `id` int(11) NOT NULL,
  `wuerfelid` int(11) NOT NULL,
  `teilid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wuerfel`
--

CREATE TABLE `wuerfel` (
  `id` int(11) NOT NULL,
  `x_pos` int(11) NOT NULL,
  `y_pos` int(11) NOT NULL,
  `z_pos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `wuerfel`
--

INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),
(4, 1, 2, 1),
(5, 2, 2, 1),
(6, 3, 2, 1),
(7, 1, 3, 1),
(8, 2, 3, 1),
(9, 3, 3, 1),
(10, 1, 1, 2),
(11, 2, 1, 2),
(12, 3, 1, 2),
(13, 1, 2, 2),
(14, 2, 2, 2),
(15, 3, 2, 2),
(16, 1, 3, 2),
(17, 2, 3, 2),
(18, 3, 3, 2),
(19, 1, 1, 3),
(20, 2, 1, 3),
(21, 3, 1, 3),
(22, 1, 2, 3),
(23, 2, 2, 3),
(24, 3, 2, 3),
(25, 1, 3, 3),
(26, 2, 3, 3),
(27, 3, 3, 3);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usergame` (`userid`) USING BTREE,
  ADD KEY `modellgame` (`modellid`);

--
-- Indizes für die Tabelle `modell`
--
ALTER TABLE `modell`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `teil`
--
ALTER TABLE `teil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modellteil` (`modellid`);

--
-- Indizes für die Tabelle `teil_wuerfel`
--
ALTER TABLE `teil_wuerfel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wuerfelt` (`wuerfelid`),
  ADD KEY `teilw` (`teilid`);

--
-- Indizes für die Tabelle `wuerfel`
--
ALTER TABLE `wuerfel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `modell`
--
ALTER TABLE `modell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `teil`
--
ALTER TABLE `teil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `teil_wuerfel`
--
ALTER TABLE `teil_wuerfel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `wuerfel`
--
ALTER TABLE `wuerfel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `modell_game` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`),
  ADD CONSTRAINT `user_game` FOREIGN KEY (`userid`) REFERENCES `player` (`id`);

--
-- Constraints der Tabelle `teil`
--
ALTER TABLE `teil`
  ADD CONSTRAINT `modell_teil` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`);

--
-- Constraints der Tabelle `teil_wuerfel`
--
ALTER TABLE `teil_wuerfel`
  ADD CONSTRAINT `ttw` FOREIGN KEY (`teilid`) REFERENCES `teil` (`id`),
  ADD CONSTRAINT `wtw` FOREIGN KEY (`wuerfelid`) REFERENCES `wuerfel` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
