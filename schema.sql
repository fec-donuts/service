-- DROP DATABASE IF EXISTS related_items;

-- CREATE DATABASE related_items;

USE 1f3trUWSKC;

CREATE TABLE related (
  id int NOT NULL AUTO_INCREMENT,
  photo VARCHAR(510) NOT NULL,
  name VARCHAR(250) NOT NULL,
  stars NUMERIC NOT NULL,
  price VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/technics", "Itaque sed natus facilis neque.", 4, "$34");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nightlife", "Aut est reiciendis atque ut.", 4, "$15");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nature", "Magni est velit perferendis perferendis aliquid hic temporibus.", 3, "$90");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/fashion", "Voluptatem et illum odit dolor quidem.", 5, "$55");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/sports", "Eum praesentium totam officiis voluptates aut eaque id.", 2, "$60");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/transport", "Quas reprehenderit et quo error voluptatibus ea cupiditate.", 1, "$32");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/cats", "Itaque sed natus facilis neque.", 4, "$46");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/city", "Quia eos facilis sit molestiae quo.", 4, "$94");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/business", "Quia assumenda ipsa nobis error sapiente voluptatem quas expedita error.", 4, "$82");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/people", "Molestiae nulla reprehenderit consectetur et.", 5, "$54");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/fashion", "Vero et eos sed sapiente numquam.", 5, "$65");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nature", "Ea eligendi vitae aut dolorum autem aut aspernatur.", 4, "$32");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nightlife", "Voluptatum ab vitae non ut.", 3, "$44");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/technics", "Quia ut modi ut totam error nesciunt nesciunt rerum quidem.", 3, "$81");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/sports", "Laudantium odio et et est similique a sit.", 2, "$12");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/transport", "Qui doloremque delectus accusamus inventore aspernatur sit velit.", 1, "$10");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/cats", "Quaerat aut modi itaque quas.", 5, "$16");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/city", "Eligendi qui aut quaerat officia unde.", 3, "$14");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/business", "Qui quasi voluptas voluptatibus similique aperiam et sequi eveniet nam.", 0, "$62");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/people", "Fugiat quasi nostrum amet non.", 2, "$72");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/fashion", "Sit non dicta sit sunt odio.", 2, "$75");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nature", "Vitae et saepe tempore amet doloribus necessitatibus atque.", 3, "$80");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/nightlife", "Rerum non vitae dicta et.", 4, "$100");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/technics", "Consectetur veniam cum sit qui eligendi perferendis dicta non qui.", 4, "$50");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/sports", "Earum quis voluptatem numquam omnis quo debitis veritatis.", 5, "$87");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/transport", "Delectus molestiae deleniti molestias et sunt laborum perferendis.", 3, "$52");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/cats", "Occaecati fuga aut praesentium qui.", 4, "$33");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/city", "Quis nobis et ipsum delectus similique.", 5, "$76");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/business", "Quis aut non earum aut ea animi magni natus ipsa.", 5, "$9");
-- INSERT INTO related (photo, name, stars, price) VALUES ("http://lorempixel.com/640/480/people", "Ut at laudantium autem et.", 4, "$34");