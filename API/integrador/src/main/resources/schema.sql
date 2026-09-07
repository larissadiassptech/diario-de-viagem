CREATE TABLE IF NOT EXISTS viagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto_url VARCHAR(500) NOT NULL,
    nome_lugar VARCHAR(100) NOT NULL,
    continente VARCHAR(50) NOT NULL,
    localidade VARCHAR(150) NOT NULL,
    data_chegada DATE NOT NULL,
    data_partida DATE,
    descricao_experiencia VARCHAR(1000) NOT NULL
);