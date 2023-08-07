-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2023 at 10:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_powerbank`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_chargingstation`
--

CREATE TABLE `tbl_chargingstation` (
  `station_id` int(11) NOT NULL,
  `station_name` varchar(50) NOT NULL,
  `station_contact` varchar(50) NOT NULL,
  `station_email` varchar(50) NOT NULL,
  `station_adress` varchar(100) NOT NULL,
  `station_proof` varchar(500) NOT NULL,
  `station_photo` varchar(500) NOT NULL,
  `station_password` varchar(50) NOT NULL,
  `station_status` int(50) NOT NULL DEFAULT 0,
  `location_id` int(11) NOT NULL,
  `slot_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_chargingstation`
--

INSERT INTO `tbl_chargingstation` (`station_id`, `station_name`, `station_contact`, `station_email`, `station_adress`, `station_proof`, `station_photo`, `station_password`, `station_status`, `location_id`, `slot_count`) VALUES
(4, 'KSEB MUVATTUPUZHA', '91885 7922', 'ej995114@gmail.com', 'tyu', 'http://127.0.0.1:4000/images/20220912_061646-15.jpg', 'http://127.0.0.1:4000/images/20220912_061646-1.jpg', 'klp', 1, 14, 4),
(5, 'Mattom CHARGERS', '9158579223', 'ej995114@gmail.com', 'euutugjdjdvi', 'http://127.0.0.1:4000/images/download.jpg', 'http://127.0.0.1:4000/images/mxw_2048,s_webp,f_auto.png', 'hello', 1, 14, 4),
(6, 'Goerge Chargers', '9123579134', 'as@gmail.com', 'qwefgrgeege', 'http://127.0.0.1:4000/images/OIP.jpg', 'http://127.0.0.1:4000/images/Smile-Pictures-2.jpg', 'tyu', 1, 22, 2),
(7, 'Jose', '123456789', 'as@gmail.com', 'qwertyuiop[', 'http://127.0.0.1:4000/images/Screenshot (2).png', 'http://127.0.0.1:4000/images/Screenshot (3).png', '124', 1, 14, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint_date` varchar(50) NOT NULL,
  `complaint_content` varchar(500) NOT NULL,
  `complaint_reply` varchar(500) NOT NULL DEFAULT 'Not Yet Replyed',
  `owner_id` int(11) NOT NULL,
  `complaint_status` int(11) NOT NULL DEFAULT 0,
  `complaint_title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `complaint_date`, `complaint_content`, `complaint_reply`, `owner_id`, `complaint_status`, `complaint_title`) VALUES
(1, '2023-08-01', 'fksljsl vnslsjfl lslsjfslfjs', '', 0, 0, '0'),
(2, '2023-08-01', 'fksljsl vnslsjfl lslsjfslfjs', '', 0, 0, 'duration'),
(3, '2023-08-01', 'Time is not sjl fslo sfsl  soefs ', '', 0, 0, 'Time'),
(4, '2023-08-01', 'ertyuu', '', 0, 0, 'er'),
(5, '2023-08-01', 'weertgfd', '', 0, 0, 'erty'),
(6, '2023-08-01', 'cvbh', '', 0, 0, 'cghxx'),
(7, '2023-08-01', 'cvbh', '', 0, 0, 'cghxx'),
(8, '2023-08-01', 'rtiio', '', 0, 0, 'rt'),
(9, '2023-08-01', 'dffgghht dfghhtrt', '', 0, 0, 'ertuu'),
(10, '2023-08-01', 'dfghrtyhgh', '', 0, 0, 'werty'),
(11, '2023-08-01', 'sdfgffggtgffr', '', 0, 0, 'ertyu'),
(12, '2023-08-01', 'ddfgvbff', 'wufgk', 4, 1, 'ddfg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(2, 'Kottayam'),
(3, 'Ernakulam');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_location`
--

CREATE TABLE `tbl_location` (
  `location_id` int(11) NOT NULL,
  `location_name` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_location`
--

INSERT INTO `tbl_location` (`location_id`, `location_name`, `place_id`) VALUES
(1, 'peruva', 0),
(2, 'busstand', 0),
(3, 'busstand', 0),
(5, 'Home', 0),
(6, 'home', 0),
(7, 'busstand', 61),
(14, 'Railway', 58),
(16, 'Temple', 60),
(22, 'Market Road', 62);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_offline`
--

CREATE TABLE `tbl_offline` (
  `offline_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_phone` varchar(50) NOT NULL,
  `customer_email` varchar(50) NOT NULL,
  `offline_date` varchar(50) NOT NULL,
  `offline_time` varchar(50) NOT NULL,
  `station_id` int(11) NOT NULL,
  `customer_usage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_offline`
--

INSERT INTO `tbl_offline` (`offline_id`, `customer_name`, `customer_phone`, `customer_email`, `offline_date`, `offline_time`, `station_id`, `customer_usage`) VALUES
(1, '0', '0', '0', '0', '0', 5, 0),
(2, '0', '0', '0', '0', '0', 5, 0),
(3, '0', '0', '0', '2023', '17', 5, 34),
(4, '0', '918857923', '0', '2023', '17', 5, 34),
(5, '0', '0', '0', '0', '0', 5, 0),
(6, '0', '234567', '0', '2023', '20', 5, 23),
(7, 'Emmn', '234567', 'eh', '2023-07-25', '20:32', 5, 23),
(8, '', '', '', '', '', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_owner`
--

CREATE TABLE `tbl_owner` (
  `owner_id` int(11) NOT NULL,
  `owner_name` varchar(30) NOT NULL,
  `owner_contact` varchar(30) NOT NULL,
  `owner_email` varchar(30) NOT NULL,
  `owner_adress` varchar(100) NOT NULL,
  `owner_photo` varchar(50) NOT NULL,
  `owner_password` varchar(30) NOT NULL,
  `location_id` int(11) NOT NULL,
  `owner_balance` varchar(50) NOT NULL,
  `Package_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_owner`
--

INSERT INTO `tbl_owner` (`owner_id`, `owner_name`, `owner_contact`, `owner_email`, `owner_adress`, `owner_photo`, `owner_password`, `location_id`, `owner_balance`, `Package_status`) VALUES
(1, 'EMMANUEL JOSE', '91885 7922', 'ej995114@gmail.com', 'gehehrhr', 'http://127.0.0.1:4000/images/20220912_061746-13.jp', 'undefined', 14, '', ''),
(2, 'KEZISH', '91885 7922', 'ej995114@gmail.com', 'sfshd', 'http://127.0.0.1:4000/images/20220912_061746-13.jp', 'undefined', 14, '', ''),
(3, 'MANJU', '91885 7922', 'ej995114@gmail.com', 'sfshd', 'http://127.0.0.1:4000/images/20220912_061746-13.jp', 'undefined', 14, '', ''),
(4, 'EMMANUEL JOSEPH', '91885 7922', 'ej995114@gmail.com', 'wtwyeye2345', 'http://127.0.0.1:4000/images/20220912_061646-1.jpg', 'klio', 16, 'NaN', '1'),
(5, 'Tony', '91885 7922', 'ej995114@gmail.com', 'fffafeqwjrq', 'http://127.0.0.1:4000/images/download.jpg', '12qwe', 14, '', ''),
(6, 'Manu', '123456', 'qwe@gmail.com', '12qwert', 'http://127.0.0.1:4000/images/swello-jTXoWNRjpM8-un', 'qwe', 14, '60', '0'),
(8, 'Jose', '91885 7922', 'ej995114@gmail.com', 'ettyui', 'http://127.0.0.1:4000/images/20220912_061746-13.jp', 'asd', 14, '', ''),
(9, 'Rahul', '9188579223', 'rahul@gmail.com', 'jfqwertyui', 'http://127.0.0.1:4000/images/Smile-Pictures-2.jpg', 'rahul', 14, '30', '1'),
(10, 'Tony', '234567', 'qw@gmail.com', 'wscgyhn', 'http://127.0.0.1:4000/images/Screenshot (10).png', 'qas', 16, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_package`
--

CREATE TABLE `tbl_package` (
  `package_id` int(11) NOT NULL,
  `package_name` varchar(50) NOT NULL,
  `package_details` varchar(100) NOT NULL,
  `package_photo` varchar(200) NOT NULL,
  `package_rate` int(11) NOT NULL,
  `station_id` int(11) NOT NULL,
  `Kilowatt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_package`
--

INSERT INTO `tbl_package` (`package_id`, `package_name`, `package_details`, `package_photo`, `package_rate`, `station_id`, `Kilowatt`) VALUES
(1, 'White', '9 Kwh Energy Limit', 'http://127.0.0.1:4000/images/Найкращі_миті_життя.jpg', 99, 4, 9),
(2, 'Green', '37 kwh Energy limit', 'http://127.0.0.1:4000/images/20220912_061646-14.jpg', 401, 5, 37),
(3, 'Blue', '91 kwh Energy limit', 'http://127.0.0.1:4000/images/swello-jTXoWNRjpM8-unsplash.jpg', 976, 5, 91);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_packagebooking`
--

CREATE TABLE `tbl_packagebooking` (
  `booking_id` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `booking_status` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_packagebooking`
--

INSERT INTO `tbl_packagebooking` (`booking_id`, `booking_date`, `booking_status`, `package_id`, `owner_id`) VALUES
(52, '2023-07-27', 1, 1, 4),
(54, '2023-07-27', 1, 1, 6),
(72, '2023-07-29', 1, 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(20) NOT NULL,
  `district_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `place_name`, `district_id`) VALUES
(51, 'Thodupuzha', 1),
(58, 'Piravom', 2),
(60, 'Kaduthuruthy', 2),
(62, 'Peruva', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_slotbooking`
--

CREATE TABLE `tbl_slotbooking` (
  `slot_id` int(11) NOT NULL,
  `slot_date` varchar(30) NOT NULL,
  `slot_time` varchar(100) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `station_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `slot_status` int(11) NOT NULL,
  `slot_usage` varchar(50) NOT NULL DEFAULT '0',
  `Rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_slotbooking`
--

INSERT INTO `tbl_slotbooking` (`slot_id`, `slot_date`, `slot_time`, `owner_id`, `station_id`, `package_id`, `slot_status`, `slot_usage`, `Rate`) VALUES
(1, '2023-07-07', '02:30', 4, 5, 2, 3, '30', 0),
(78, '2023-07-29', '15:06', 4, 4, 1, 3, '30', 0),
(79, '2023-07-29', '15:06', 4, 4, 1, 0, '3', 0),
(80, '', '', 4, 4, 1, 0, '0', 0),
(81, '2023-07-26', '17:24', 4, 4, 1, 0, '0', 0),
(82, '2023-07-28', '17:51', 9, 4, 0, 0, '0', 0),
(83, '2023-07-29', '17:00', 9, 4, 0, 0, '0', 0),
(84, '2023-07-28', '17:48', 9, 4, 1, 0, '0', 0),
(85, '2023-07-03', '17:45', 9, 4, 1, 0, '0', 0),
(86, '2023-07-20', '18:57', 4, 4, 1, 0, '0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_chargingstation`
--
ALTER TABLE `tbl_chargingstation`
  ADD PRIMARY KEY (`station_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_location`
--
ALTER TABLE `tbl_location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `tbl_offline`
--
ALTER TABLE `tbl_offline`
  ADD PRIMARY KEY (`offline_id`);

--
-- Indexes for table `tbl_owner`
--
ALTER TABLE `tbl_owner`
  ADD PRIMARY KEY (`owner_id`);

--
-- Indexes for table `tbl_package`
--
ALTER TABLE `tbl_package`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `tbl_packagebooking`
--
ALTER TABLE `tbl_packagebooking`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_slotbooking`
--
ALTER TABLE `tbl_slotbooking`
  ADD PRIMARY KEY (`slot_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_chargingstation`
--
ALTER TABLE `tbl_chargingstation`
  MODIFY `station_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_location`
--
ALTER TABLE `tbl_location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_offline`
--
ALTER TABLE `tbl_offline`
  MODIFY `offline_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_owner`
--
ALTER TABLE `tbl_owner`
  MODIFY `owner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_package`
--
ALTER TABLE `tbl_package`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_packagebooking`
--
ALTER TABLE `tbl_packagebooking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `tbl_slotbooking`
--
ALTER TABLE `tbl_slotbooking`
  MODIFY `slot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
