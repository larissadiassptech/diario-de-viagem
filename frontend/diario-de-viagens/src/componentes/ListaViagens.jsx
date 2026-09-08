import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./ListaViagens.module.css"

export function ListaViagens() {
    const [viagens, setViagens] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)

    function buscarViagens() {
        axios.get("http://localhost:8080/viagens")
            .then(resposta => {
                setViagens(resposta.data)
                setCarregando(false)
            })
            .catch(erro => {
                console.log("Erro na requisição", erro)
                setErro(true)
                setCarregando(false)
            })
    }

    function deletarViagem(id) {
        axios.delete(`http://localhost:8080/viagens/${id}`)
            .then(() => {
                const novasViagens = viagens.filter(viagem => viagem.id !== id)
                setViagens(novasViagens)
            })
            .catch(erro => {
                console.log("Erro ao excluir viagem", erro)
            })
    }

    useEffect(() => {
        buscarViagens()
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Minhas viagens</h2>

            {carregando && (
                <p>Carregando viagens...</p>
            )}

            {erro && (
                <p>Não foi possível carregar suas viagens.</p>
            )}

            {!carregando && !erro && viagens.length === 0 && (
                <p>Você ainda não possui viagens cadastradas.</p>
            )}

            {!carregando && !erro && viagens.length > 0 && (
                <div className={styles.lista}>
                    {viagens.map(viagem => (
                        <div
                            className={styles.viagem}
                            key={viagem.id}
                        >
                            <img
                                className={styles.imagem}
                                src={viagem.fotoUrl}
                                alt={viagem.nomeLugar}
                            />

                            <h3 className={styles.nomeLugar}>
                                {viagem.nomeLugar}
                            </h3>

                            <p className={styles.informacao}>
                                Continente: {viagem.continente}
                            </p>

                            <p className={styles.informacao}>
                                Localidade: {viagem.localidade}
                            </p>

                            <p className={styles.informacao}>
                                Data de chegada: {viagem.dataChegada}
                            </p>

                            <p className={styles.informacao}>
                                Data de partida: {viagem.dataPartida}
                            </p>

                            <p className={styles.descricao}>
                                {viagem.descricaoExperiencia}
                            </p>

                            <button
                                className={styles.botaoExcluir}
                                onClick={() => deletarViagem(viagem.id)}
                            >
                                EXCLUIR VIAGEM
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <Link
                className={styles.botao}
                to="/"
            >
                VOLTAR PARA CADASTRO
            </Link>
        </div>
    )
}