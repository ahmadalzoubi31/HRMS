CREATE PROCEDURE `createEmployeeTable`
BEGIN
    CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `manager` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  `status` int(1) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employeeID_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
END



