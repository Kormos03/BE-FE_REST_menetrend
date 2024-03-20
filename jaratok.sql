-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 20, 2024 at 01:26 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `menetrend`
--

-- --------------------------------------------------------

--
-- Table structure for table `jaratok`
--

CREATE TABLE `jaratok` (
  `id` int NOT NULL,
  `allomasok` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idopont` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jaratok`
--

INSERT INTO `jaratok` (`id`, `allomasok`, `idopont`) VALUES
(1, 'Kerekerdő-felső - Kerekerdő-alsó', '10:00'),
(2, 'Kerekerdő-felső - Kerekerdő-alsó', '12:00'),
(7, 'Kerekerdő felső - Kerekerdő alsó', '19:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jaratok`
--
ALTER TABLE `jaratok`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jaratok`
--
ALTER TABLE `jaratok`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
