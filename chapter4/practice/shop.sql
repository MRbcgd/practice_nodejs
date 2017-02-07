CREATE TABLE IF NOT EXISTS `shop`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8


CREATE TABLE IF NOT EXISTS `shop`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

CREATE TABLE IF NOT EXISTS `shop`.`purchase` (
  `users_id` INT(11) NOT NULL,
  `products_id` INT(11) NOT NULL,
  `purchase_date` VARCHAR(100) NULL,
  PRIMARY KEY (`users_id`, `products_id`),
  INDEX `fk_users_has_products1_products1_idx` (`products_id` ASC),
  INDEX `fk_users_has_products1_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_users_has_products1_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `shop`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products1_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `shop`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
