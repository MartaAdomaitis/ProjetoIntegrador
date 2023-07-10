-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Ago-2022 às 03:32
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto_integrador`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `carrinho`
--


CREATE TABLE `carrinho` (
  `clientes_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `oferta` decimal(5,2) NOT NULL,
  `total` decimal(9,2) NOT NULL,
  `produto_preco` decimal(5,2) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `oferta` (
  `produto_id` int(11) NOT NULL,
  `preco` decimal(5,2) NOT NULL,
  `desconto` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `usuario_end` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `preco` decimal(5,2) NOT NULL,
  `img` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `produto` (`id`, `nome`, `preco`, `img`, `description`) VALUES
(1, 'Jogo FarCry Xbox', '150.00', 'C:\\Users\\Mazi\\Documents\\RepositÃ³rios\\projetoIntegrador\\ProjetoIntegrador\\public\\img\\farcry.png', 'Jogo de tiro e aÃ§Ã£o, FPS, Xbox One'),
(2, 'Jogo Grand Playstation', '89.90', './public/img/granturismo.jpg', 'Jogo Gran Turismo Xbox. Importado dos EUA. Entregue com a fatura de compra para ter a garantia do fabricante.'),
(3, 'Jogo Mortal Kombat PlayStation', '359.90', './public/img/mortal.jpg', 'Jogo Mortal Kombat PlayStation. ExperiÃªncia excepcional de visualizaÃ§Ã£o.'),
(4, 'Xbox One', '999.99', './public/img/xbox.jpg', 'Xbox One X. LanÃ§amento 2020.'),
(5, 'Controle Xbox', '399.90', './public/img/controlexo.jpg', 'Controle Xbox One sem fio, garantia de 1 ano'),
(6, 'Jogo Marvel 3 Xbox', '150.00', './marvel.jpg', 'Jogo Xbox Marvel para faixa etÃ¡ria a partir dos 04 anos de idade.');

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `endereco` varchar(240) NOT NULL,
  `cpf` char(14) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuario` (`id`, `nome`, `endereco`, `cpf`, `telefone`, `email`, `senha`) VALUES
(8, 'Joana', 'Rua das correntes', '777777', '77777777', 'joana@gmail.com', '123456'),
(12, 'Joaquim', 'Rua Fiação Da Saúde 260, Bl C3 Apt 145', '353535353536', '1198848487', 'joaquim@gmail.com', '555'),
(13, 'Pedro', 'Rua dos pastos, 327', '45453453453', '119857354', 'pedro@gmail.com', '555'),
(15, 'Marcos', 'Avenida jabaquara, 327', '4753275375', '11984523453', 'marcos@gmail.com', '123456'),
(16, 'Bruna', 'rua dos cachos, 212', '2366655995', '6565656565', 'bruna@gmail.com', '555'),
(18, 'Lais', 'Rua das Grumixamas, 327, Apt 12', '14464648648', '11985103418', 'lais@gmail.com', '123456'),
(19, 'Carlos', 'Rua dos Buritis, 925', '4165651615', '445415415', 'carlos@gmail.com', '123'),
(20, 'gabriel', 'Rua das Marta, 327, Apt 12', '2342342342', '11942342', 'gabriel@gmail.com', '123123123');

ALTER TABLE `carrinho`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `oferta`
  ADD KEY `fk_produto` (`produto_id`);


ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;


ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;


ALTER TABLE `oferta`
  ADD CONSTRAINT `fk_produto` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`);
COMMIT;

