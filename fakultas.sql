-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2019 at 04:33 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fakultas`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` varchar(15) NOT NULL,
  `nama` text NOT NULL,
  `email` varchar(40) NOT NULL,
  `prodi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim`, `nama`, `email`, `prodi`) VALUES
('141401023', 'M Rizki Hakim Lubis', 'hakima@gmail.com', 'S1 - Ilmu Komputer'),
('141402006', 'Samuel Ezzay', 'ezzay@gmail.com', 'S1 - Teknologi Informasi'),
('141402011', 'Syaiful Anwar Husen Lubis', 'syaifulhusennn@gmail.com', 'S1 - Teknologi Informasi'),
('141402017', 'Muhammad Fadly Tanjung', 'fadlysyah96@gmail.com', 'S1 - Teknologi Informasi'),
('141402018', 'Mhd. Faris Pratama', 'farispratamaa@gmail.com', 'S1 - Teknologi Informasi'),
('141402022', 'Rendra Mahardika', 'rendramhardika@gmail.com', 'S1 - Teknologi Informasi'),
('141402023', 'Afzalurrahmah', 'afzalurrahmah@gmail.com', 'S1 - Teknologi Informasi');

-- --------------------------------------------------------

--
-- Table structure for table `prodi`
--

CREATE TABLE `prodi` (
  `id` int(5) NOT NULL,
  `prodi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodi`
--

INSERT INTO `prodi` (`id`, `prodi`) VALUES
(1, 'S1 - Ilmu Komputer'),
(2, 'S1 - Teknologi Informasi'),
(3, 'S2 - Ilmu Komputer'),
(4, 'S3 - Ilmu Komputer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `prodi`
--
ALTER TABLE `prodi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prodi`
--
ALTER TABLE `prodi`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
