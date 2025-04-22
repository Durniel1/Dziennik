-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 10, 2023 at 09:27 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dziennik`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klasy`
--

CREATE TABLE `klasy` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `ilosc_uczniow` int(11) NOT NULL,
  `id_szkoly` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `klasy`
--

INSERT INTO `klasy` (`id`, `nazwa`, `ilosc_uczniow`, `id_szkoly`) VALUES
(1, '2D', 3, 1),
(2, '3D', 3, 1),
(3, '4D', 3, 1),
(4, '1A', 3, 2),
(5, '2B', 3, 2),
(6, '3C', 3, 2),
(7, '1F', 3, 3),
(8, '3G', 3, 3),
(9, '5H', 3, 3),
(10, '8B 2019/2020 (chce mi sie płakać na samą myśl o tym)', 17, 4);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szkoly`
--

CREATE TABLE `szkoly` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `szkoly`
--

INSERT INTO `szkoly` (`id`, `nazwa`) VALUES
(1, 'ZSŁ'),
(2, 'Teb Ubikacja'),
(3, 'Ćpunradinum'),
(4, 'Zasrane Sp4 imienia Króla Kazimierza w dupe Jagiellończyka');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczniowie`
--

CREATE TABLE `uczniowie` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `id_klasy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uczniowie`
--

INSERT INTO `uczniowie` (`id`, `imie`, `nazwisko`, `id_klasy`) VALUES
(1, 'Jan', 'Kowalski', 1),
(2, 'John', 'Smith', 1),
(3, 'Jan', 'Kowal', 1),
(4, 'Jan', 'Kowalski', 2),
(5, 'John', 'Smith', 2),
(6, 'Jan', 'Kowal', 2),
(7, 'Jan', 'Kowalski', 3),
(8, 'John', 'Smith', 3),
(9, 'Jan', 'Kowal', 3),
(10, 'Jan', 'Kowalski', 4),
(11, 'John', 'Smith', 4),
(12, 'Jan', 'Kowal', 4),
(13, 'Jan', 'Kowalski', 5),
(14, 'John', 'Smith', 5),
(15, 'Jan', 'Kowal', 5),
(16, 'Jan', 'Kowalski', 6),
(17, 'John', 'Smith', 6),
(18, 'Jan', 'Kowal', 6),
(19, 'Jan', 'Kowalski', 7),
(20, 'John', 'Smith', 7),
(21, 'Jan', 'Kowal', 7),
(22, 'Jan', 'Kowalski', 8),
(23, 'John', 'Smith', 8),
(24, 'Jan', 'Kowal', 8),
(25, 'Jan', 'Kowalski', 9),
(26, 'John', 'Smith', 9),
(27, 'Jan', 'Kowal', 9),
(28, 'Moje imie', 'Moje nazwisko', 10);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klasy`
--
ALTER TABLE `klasy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_szkoly` (`id_szkoly`);

--
-- Indeksy dla tabeli `szkoly`
--
ALTER TABLE `szkoly`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_klasy` (`id_klasy`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `klasy`
--
ALTER TABLE `klasy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `szkoly`
--
ALTER TABLE `szkoly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `uczniowie`
--
ALTER TABLE `uczniowie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `klasy`
--
ALTER TABLE `klasy`
  ADD CONSTRAINT `klasy_ibfk_1` FOREIGN KEY (`id_szkoly`) REFERENCES `szkoly` (`id`);

--
-- Constraints for table `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD CONSTRAINT `uczniowie_ibfk_1` FOREIGN KEY (`id_klasy`) REFERENCES `klasy` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
