-- -----------------------------------------------------
-- Database isthmus
-- -----------------------------------------------------
CREATE DATABASE isthmus;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema isthmus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema isthmus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `isthmus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `isthmus` ;

-- -----------------------------------------------------
-- Table `isthmus`.`alumnos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isthmus`.`alumnos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(25) NOT NULL,
  `apellido1` VARCHAR(25) NOT NULL,
  `apellido2` VARCHAR(25) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Insert into alumnos
-- -----------------------------------------------------
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (1,'Luis','Granados','Lobo','2000-01-01');
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (2,'Jorge','Sanabria','Quiros','2000-01-02');
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (3,'Carlos','Solis','Matarrita','2000-02-01');
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (4,'Carmen','Sequeirra','Rodriguez','2000-02-02');
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (5,'Rosa','Granados','Madrigal','2000-03-01');
INSERT INTO `isthmus`.`alumnos` (`id`,`nombre`,`apellido1`,`apellido2`,`fecha_nacimiento`) VALUES (6,'Pedro','Solis','Ramirez','2000-03-02');
