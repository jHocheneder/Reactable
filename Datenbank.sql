SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `time` time NOT NULL,
  `createtime` timestamp NULL DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `modellid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `modell` (
  `id` int(11) NOT NULL,
  `schwierigkeit` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `modell` (`id`, `schwierigkeit`) VALUES(1, 'Soma-Medium');

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `teil` (
  `id` int(11) NOT NULL,
  `modellid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `teil` (`id`, `modellid`) VALUES(1, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(2, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(3, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(4, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(5, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(6, 1);
INSERT INTO `teil` (`id`, `modellid`) VALUES(7, 1);

CREATE TABLE `teil_wuerfel` (
  `id` int(11) NOT NULL,
  `wuerfelid` int(11) NOT NULL,
  `teilid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(1, 3, 1);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(2, 6, 1);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(3, 15, 1);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(4, 11, 2);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(5, 14, 2);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(6, 5, 2);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(7, 8, 2);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(8, 10, 3);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(9, 19, 3);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(10, 20, 3);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(11, 22, 3);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(12, 12, 4);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(13, 21, 4);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(14, 23, 4);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(15, 24, 4);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(16, 9, 5);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(17, 18, 5);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(18, 26, 5);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(19, 27, 5);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(20, 1, 6);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(21, 2, 6);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(22, 4, 6);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(23, 13, 6);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(24, 7, 7);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(25, 16, 7);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(26, 17, 7);
INSERT INTO `teil_wuerfel` (`id`, `wuerfelid`, `teilid`) VALUES(27, 25, 7);

CREATE TABLE `wuerfel` (
  `id` int(11) NOT NULL,
  `x_pos` int(11) NOT NULL,
  `y_pos` int(11) NOT NULL,
  `z_pos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(1, 1, 1, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(2, 2, 1, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(3, 3, 1, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(4, 1, 2, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(5, 2, 2, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(6, 3, 2, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(7, 1, 3, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(8, 2, 3, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(9, 3, 3, 1);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(10, 1, 1, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(11, 2, 1, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(12, 3, 1, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(13, 1, 2, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(14, 2, 2, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(15, 3, 2, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(16, 1, 3, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(17, 2, 3, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(18, 3, 3, 2);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(19, 1, 1, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(20, 2, 1, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(21, 3, 1, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(22, 1, 2, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(23, 2, 2, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(24, 3, 2, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(25, 1, 3, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(26, 2, 3, 3);
INSERT INTO `wuerfel` (`id`, `x_pos`, `y_pos`, `z_pos`) VALUES(27, 3, 3, 3);


ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modellgame` (`modellid`),
  ADD KEY `user_modell` (`userid`);

ALTER TABLE `modell`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `teil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modellteil` (`modellid`);

ALTER TABLE `teil_wuerfel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wuerfelt` (`wuerfelid`),
  ADD KEY `teilw` (`teilid`);

ALTER TABLE `wuerfel`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `modell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `teil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `teil_wuerfel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

ALTER TABLE `wuerfel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;


ALTER TABLE `game`
  ADD CONSTRAINT `modell_game` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`),
  ADD CONSTRAINT `user_modell` FOREIGN KEY (`userid`) REFERENCES `player` (`id`);

ALTER TABLE `teil`
  ADD CONSTRAINT `modell_teil` FOREIGN KEY (`modellid`) REFERENCES `modell` (`id`);

ALTER TABLE `teil_wuerfel`
  ADD CONSTRAINT `ttw` FOREIGN KEY (`teilid`) REFERENCES `teil` (`id`),
  ADD CONSTRAINT `wtw` FOREIGN KEY (`wuerfelid`) REFERENCES `wuerfel` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
