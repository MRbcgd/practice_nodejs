CREATE TABLE IF NOT EXISTS `news`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(500) NOT NULL,
  `comments_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_comments_idx` (`comments_id` ASC),
  CONSTRAINT `fk_comments_comments`
    FOREIGN KEY (`comments_id`)
    REFERENCES `news`.`comments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
