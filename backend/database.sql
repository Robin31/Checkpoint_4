CREATE TABLE
    users(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email VARCHAR(80) UNIQUE,
        password LONGTEXT,
        role VARCHAR(10) DEFAULT 'user'
    );

CREATE TABLE
    profils(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(80),
        lastname VARCHAR(80),
        src longtext,
        user_id INT,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
    );

CREATE TABLE
    benevoles(
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        prenom VARCHAR(25),
        nom VARCHAR(25),
        age INT,
        motivation Longtext
    );

CREATE TABLE
    races (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(25) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    sexes (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        attribut varchar(25) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    caracteres (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        caractere varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    chiens (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        prenom varchar(255) NOT NULL,
        age int NOT NULL,
        image varchar(255) NOT NULL,
        alternatif varchar(255) NOT NULL,
        description longtext NOT NULL,
        castration varchar(25) NOT NULL,
        race_id int NOT NULL,
        sexe_id int NOT NULL,
        caractere_id int NOT NULL,
        CONSTRAINT fk_race_id FOREIGN KEY (race_id) REFERENCES races(id) ON DELETE CASCADE,
        CONSTRAINT fk_sexe_id FOREIGN KEY (sexe_id) REFERENCES sexes(id) ON DELETE CASCADE,
        CONSTRAINT fk_caractere_id FOREIGN KEY (caractere_id) REFERENCES caracteres(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    faqs (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        question varchar(255) NOT NULL,
        answer varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    videos (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        titre varchar(255) NOT NULL,
        url LONGTEXT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    users (email, password, role)
VALUES (
        "admin@admin.com",
        "admin123",
        "admin"
    );

INSERT INTO
    users (email, password)
VALUES ("user@user.com", "user123");

INSERT INTO
    profils (
        firstname,
        lastname,
        src,
        user_id
    )
VALUES (
        "Lucas",
        "LeBaka",
        "https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170508361/78184821-t%C3%AAte-de-dessin-visage-souriant-illustration-de-vecteur-de-caract%C3%A8re-enfant.jpg",
        1
    ), (
        "Marta",
        "LePanda",
        "https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170508361/78184821-t%C3%AAte-de-dessin-visage-souriant-illustration-de-vecteur-de-caract%C3%A8re-enfant.jpg",
        2
    );

INSERT INTO
    benevoles (prenom, nom, age, motivation)
VALUES (
        "jacques",
        "prevert",
        12,
        "Trop hâte d'aider les chiens"
    );

INSERT INTO races (name)
VALUES ("Boxer"), ("Chihuhua papillon"), ("Teckel"), ("Malinois"), ("Berger Allemand"), ("Cocker"), ("Caniche"), ("Schnauzer"), ("Labrador"), ("Lévrier Afghan"), ("Husky"), ("Cane Corso"), ("Bouvier"), ("Bouledogue Anglais"), ("Beagle"), ("Shih Tzu"), ("Dalmatien"), ("Dobermann"), ("Saint-Bernard"), ("Border Collie"), ("Rottweiler"), ("Samoyède"), ("Bichon"), ("Berger Picard"), ("Barzoi");

INSERT INTO sexes (attribut)
VALUES ("Mâle"), ("Femelle"), ("Non binaire");

INSERT INTO
    caracteres (caractere)
VALUES ("Calme"), ("Joueur"), ("Fidèle"), ("Fugueur"), ("Affectueux"), ("Courageux"), ("Protecteur"), ("Sociable"), ("Tonique"), ("Monarque"), (
        "Pas le couteau le plus aiguisé du tiroir"
    );

INSERT INTO
    chiens (
        prenom,
        age,
        image,
        alternatif,
        description,
        castration,
        race_id,
        sexe_id,
        caractere_id
    )
VALUES (
        "Nemo",
        9,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jeune_boxer_m%C3%A2le.jpg/220px-Jeune_boxer_m%C3%A2le.jpg",
        "Boxer image",
        "Lorem ipsum dolor sit amet. Ea natus maiores eos asperiores consequatur et earum quae et dignissimos harum aut voluptatem eaque? Qui voluptate omnis aut velit numquam id distinctio soluta ut repudiandae dolorem. Et soluta saepe aut debitis quam ut illum iure sed nihil blanditiis ut maxime animi vel laborum corrupti? ",
        "Non",
        1,
        1,
        2
    ), (
        "Poupi",
        1,
        "https://i.f1g.fr/media/cms/orig/2023/06/29/f21485dc6a7a2cf142302fe0163690d7d76682a6776301bf81061f74afea4aa9.jpg",
        "Cane Corso image",
        "Qui suscipit consectetur hic galisum similique aut temporibus consectetur? Eum deleniti porro qui consectetur placeat non quod animi est maxime sint 33 maiores facilis qui quas esse? Et incidunt quia est debitis nulla eum nihil enim non eius eaque. ",
        "Non",
        12,
        2,
        7
    ), (
        "Sergio",
        15,
        "https://jardinage.lemonde.fr/images/dossiers/2017-08/rottweiler-1-134409.jpg",
        "Rottweiler image",
        "Sit molestiae vero quo laudantium reiciendis in ullam neque? Ex eveniet repellendus qui laudantium fugit sit doloribus corporis est illum itaque est laudantium repellendus ut corporis velit. Aut galisum culpa sit dolor maxime ut illo cumque eum voluptas enim. Cum nemo voluptatem ut natus incidunt ea cumque veniam qui modi debitis aut iste velit et dolor ipsum in sequi ratione. ",
        "Oui",
        21,
        1,
        5
    ), (
        "Thralad",
        33,
        "https://www.santevet.com/upload/admin/images/article/PMO/FICHES%20RACES/CHIENS/bichon_%20maltais_assurance_santevet.jpg",
        "Bichon image",
        "Est voluptatem eveniet qui quaerat sapiente sit ipsam porro non similique saepe. Aut totam galisum qui enim ducimus ut facilis fugiat ut doloremque placeat. Sit autem neque sit explicabo dolor ut voluptate omnis ut repellendus iste rem impedit adipisci vel corporis earum!",
        "Oui",
        23,
        1,
        4
    ), (
        "Sacha",
        6,
        "https://images.onlinepets.com/uploads/2021/02/Afghaanse-Windhond-1.jpg?auto=format",
        "Lévrier Afghan image",
        "Ea voluptas corporis hic quis quisquam ut temporibus provident. Et animi quas rem quae voluptatem in assumenda illo. In pariatur dignissimos et magni eveniet sit enim ipsa aut repellat alias est eveniet suscipit qui ipsa dicta 33 corrupti nihil.",
        "Oui",
        10,
        1,
        1
    ), (
        "Lucas",
        6,
        "https://media.cdnws.com/_i/30379/1256/476/58/noeud-papillon-rose-pour-chien.jpeg",
        "Chihuhua papillon",
        "Lorem ipsum dolor sit amet. Ea natus maiores eos asperiores consequatur et earum quae et dignissimos harum aut voluptatem eaque? Qui voluptate omnis aut velit numquam id distinctio soluta ut repudiandae dolorem. Et soluta saepe aut debitis quam ut illum iure sed nihil blanditiis ut maxime animi vel laborum corrupti? ",
        "Non",
        2,
        3,
        5
    ), (
        "Hugues",
        4,
        "https://www.vetdom.com/narbonne/wp-content/uploads/2020/11/Siberian-husky-1291343_1920.jpg",
        "Husky image",
        "Vel pariatur voluptatem non alias commodi ut illum delectus id eaque quia. Quo recusandae omnis ut consequatur Quis et quia commodi At omnis nesciunt quo corporis deserunt et earum odit. Sed dolorem accusamus et itaque harum 33 error enim aut voluptatem omnis ab sint labore ut voluptatibus nulla ut recusandae porro.",
        "Oui",
        11,
        2,
        5
    ), (
        "Emmanuel",
        42,
        "https://media.ooreka.fr/public/image/3-306097-2233-full-13048901.jpg",
        "Berger Picard image",
        "Aut eius quaerat eum debitis impedit et placeat placeat in quibusdam galisum qui illo ullam non maiores dolor ut Quis expedita. Aut doloribus dolorem et vitae error et vero quisquam At nobis dolor et laudantium libero et molestias quam. Eum veniam velit et voluptatem beatae qui nostrum aperiam 33 rerum autem et odio assumenda non temporibus atque ut exercitationem mollitia? ",
        "Oui",
        24,
        1,
        10
    ), (
        "Marlène",
        3,
        "https://toutchien.fr/wp-content/uploads/2021/01/Race-de-Chien-le-Bulldog-anglais.jpg",
        "Bouledogue anglais image",
        "Vel pariatur voluptatem non alias commodi ut illum delectus id eaque quia. Quo recusandae omnis ut consequatur Quis et quia commodi At omnis nesciunt quo corporis deserunt et earum odit. Sed dolorem accusamus et itaque harum 33 error enim aut voluptatem omnis ab sint labore ut voluptatibus nulla ut recusandae porro.",
        "Oui",
        14,
        2,
        11
    ), (
        "Brigitte",
        64,
        "https://img.passeportsante.net/1200x675/2022-04-12/barzoi.webp",
        "Barzoi image",
        "Qui temporibus excepturi id vitae magni rem rerum perferendis ad voluptatum odio et enim expedita. Quo sint nesciunt aut provident quia sed nisi harum nam dignissimos laudantium. Rem quibusdam numquam id voluptatum dignissimos qui vero assumenda qui voluptatem minima cum saepe consequatur aut consequatur soluta. ",
        "Oui",
        25,
        2,
        11
    ), (
        "Boghor",
        15,
        "https://static.toutoupourlechien.com/2019/07/schnauzer-moyen.jpg",
        "Schnauzer image",
        "Ut inventore nihil aut velit cupiditate ut unde eveniet in Quis repellendus. Aut natus similique et reprehenderit consequatur est fugit corporis aut aliquam beatae et voluptatem doloremque et eligendi quae qui amet pariatur. Et impedit aliquam sit corporis soluta sed quas voluptate id aliquid labore. Non suscipit consequatur non aliquid voluptatem qui perferendis neque ex sunt neque.",
        "Non",
        8,
        1,
        2
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Puis-je devenir bénévole même si je suis allergique aux chats ?",
        "Bien sur, nous n'avons que des chiens."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Quelles sont les races de chiens les plus instagramables ?",
        "Un chien n'est pas un jouet."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Fournissez vous les croquettes quand on adopte un chien ?",
        "Evidement, on vous fournit un rein et une voiture en plus."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Je pars en vacance la semaine prochaine, dois je vous indiquer à quel arbre j'ai attaché mon chien où je vous l'apporte directement ?",
        "Vous devez nous l'apporter directement que l'on puisse vous briser vos deux rotules."
    );

INSERT INTO videos (titre, url)
VALUES (
        "Meilleur ami de l'homme",
        "https://www.youtube.com/watch?v=AsOxtPkBJ6o"
    ), (
        "Eduquer son chien",
        "https://www.youtube.com/watch?v=srldqyxi0ZQ"
    ), (
        "Sociabile ton chien",
        "https://www.youtube.com/watch?v=ZZedFWonePE"
    ), (
        "Meilleur ami de l'homme",
        "https://www.youtube.com/watch?v=AsOxtPkBJ6o"
    ), (
        "Meilleur ami de l'homme",
        "https://www.youtube.com/watch?v=AsOxtPkBJ6o"
    ), (
        "Meilleur ami de l'homme",
        "https://www.youtube.com/watch?v=AsOxtPkBJ6o"
    ), (
        "Meilleur ami de l'homme",
        "https://www.youtube.com/watch?v=AsOxtPkBJ6o"
    );