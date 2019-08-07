-- CREATE ROLE super;

-- DROP DATABASE photos;

-- CREATE DATABASE photos;

--USED this on COMMAND LINE 
--psql -U root -d name of database -a -f database/schema.sql

DROP TABLE photolist;

CREATE TABLE photolist(
  photo_id SERIAL PRIMARY KEY NOT NULL,
  p_key VARCHAR(200) NOT NULL,
  p_url VARCHAR(200) NOT NULL,
);

INSERT INTO photolist (p_key, p_url) VALUES (1, 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (2, 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (3, 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (4, 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (5, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (6, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (7, 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png');
INSERT INTO photolist (p_key, p_url) VALUES (8, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (9, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (10, 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (11, 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png');
INSERT INTO photolist (p_key, p_url) VALUES (12, 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (13, 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (14, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png');
INSERT INTO photolist (p_key, p_url) VALUES (15, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (16, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png');
INSERT INTO photolist (p_key, p_url) VALUES (17, 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png');
INSERT INTO photolist (p_key, p_url) VALUES (18, 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (19, 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (20, 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png');
INSERT INTO photolist (p_key, p_url) VALUES (21, 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (22, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png');
INSERT INTO photolist (p_key, p_url) VALUES (23, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png');
INSERT INTO photolist (p_key, p_url) VALUES (24, 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png');
INSERT INTO photolist (p_key, p_url) VALUES (25, 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (26, 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (27, 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (28, 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (29, 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (30, 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (31, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (32, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (33, 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png');
INSERT INTO photolist (p_key, p_url) VALUES (34, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (35, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (36, 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (37, 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png');
INSERT INTO photolist (p_key, p_url) VALUES (38, 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (39, 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (40, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png');
INSERT INTO photolist (p_key, p_url) VALUES (41, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (42, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png');
INSERT INTO photolist (p_key, p_url) VALUES (43, 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png');
INSERT INTO photolist (p_key, p_url) VALUES (44, 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (45, 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (46, 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png');
INSERT INTO photolist (p_key, p_url) VALUES (47, 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (48, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png');
INSERT INTO photolist (p_key, p_url) VALUES (49, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png');
INSERT INTO photolist (p_key, p_url) VALUES (50, 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png');
INSERT INTO photolist (p_key, p_url) VALUES (51, 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (52, 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (53, 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (54, 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (55, 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (56, 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (57, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (58, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (59, 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png');
INSERT INTO photolist (p_key, p_url) VALUES (60, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (61, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (62, 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (63, 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png');
INSERT INTO photolist (p_key, p_url) VALUES (64, 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (65, 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (66, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png');
INSERT INTO photolist (p_key, p_url) VALUES (67, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (68, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png');
INSERT INTO photolist (p_key, p_url) VALUES (69, 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png');
INSERT INTO photolist (p_key, p_url) VALUES (70, 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (71, 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (72, 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png');
INSERT INTO photolist (p_key, p_url) VALUES (73, 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (74, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png');
INSERT INTO photolist (p_key, p_url) VALUES (75, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png');
INSERT INTO photolist (p_key, p_url) VALUES (76, 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png');
INSERT INTO photolist (p_key, p_url) VALUES (77, 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (78, 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (79, 'https://shopazon.s3.us-east-2.amazonaws.com/adidas_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (80, 'https://shopazon.s3.us-east-2.amazonaws.com/alpina_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (81, 'https://shopazon.s3.us-east-2.amazonaws.com/basketball_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (82, 'https://shopazon.s3.us-east-2.amazonaws.com/boot_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (83, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_green.png');
INSERT INTO photolist (p_key, p_url) VALUES (84, 'https://shopazon.s3.us-east-2.amazonaws.com/converse_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (85, 'https://shopazon.s3.us-east-2.amazonaws.com/crazy_shoe.png');
INSERT INTO photolist (p_key, p_url) VALUES (86, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (87, 'https://shopazon.s3.us-east-2.amazonaws.com/crocs_red.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (88, 'https://shopazon.s3.us-east-2.amazonaws.com/dress_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (89, 'https://shopazon.s3.us-east-2.amazonaws.com/fj_white.png');
INSERT INTO photolist (p_key, p_url) VALUES (90, 'https://shopazon.s3.us-east-2.amazonaws.com/football_blue.png');
INSERT INTO photolist (p_key, p_url) VALUES (91, 'https://shopazon.s3.us-east-2.amazonaws.com/football_purple.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (92, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_boots.png');
INSERT INTO photolist (p_key, p_url) VALUES (93, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_brown.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (94, 'https://shopazon.s3.us-east-2.amazonaws.com/gucci_sneaker.png');
INSERT INTO photolist (p_key, p_url) VALUES (95, 'https://shopazon.s3.us-east-2.amazonaws.com/hiker_boot_black.png');
INSERT INTO photolist (p_key, p_url) VALUES (96, 'https://shopazon.s3.us-east-2.amazonaws.com/jesus_sandal.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (97, 'https://shopazon.s3.us-east-2.amazonaws.com/merrell_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (98, 'https://shopazon.s3.us-east-2.amazonaws.com/nike_grey.png');
INSERT INTO photolist (p_key, p_url) VALUES (99, 'https://shopazon.s3.us-east-2.amazonaws.com/rain_brown.png');
INSERT INTO photolist (p_key, p_url) VALUES (100, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_dog.png');
INSERT INTO photolist (p_key, p_url) VALUES (101, 'https://shopazon.s3.us-east-2.amazonaws.com/slippers_poop.png');
INSERT INTO photolist (p_key, p_url) VALUES (102, 'https://shopazon.s3.us-east-2.amazonaws.com/springblade_runners.png');
INSERT INTO photolist (p_key, p_url) VALUES (103, 'https://shopazon.s3.us-east-2.amazonaws.com/track_black.jpg');
INSERT INTO photolist (p_key, p_url) VALUES (104, 'https://shopazon.s3.us-east-2.amazonaws.com/vans_grey.jpg');
