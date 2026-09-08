import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./FormularioViagem.module.css"

export function FormularioViagem() {
    const [viagem, setViagem] = useState({
        fotoUrl: "",
        nomeLugar: "",
        continente: "",
        localidade: "",
        dataChegada: "",
        dataPartida: "",
        descricaoExperiencia: ""
    })

    const [carregando, setCarregando] = useState(false)
    const [modalAberto, setModalAberto] = useState(false)
    const [tipoMensagem, setTipoMensagem] = useState("")

    function salvarValorDigitado(evento, propriedade) {
        const copiaViagem = { ...viagem }
        copiaViagem[propriedade] = evento.target.value
        setViagem(copiaViagem)
    }

    function cadastrarViagem(evento) {
        evento.preventDefault()
        setCarregando(true)

        axios.post("http://localhost:8080/viagens", viagem)
            .then(resposta => {
                console.log(resposta.data)
                setTipoMensagem("sucesso")
                setModalAberto(true)
                setViagem({
                    fotoUrl: "",
                    nomeLugar: "",
                    continente: "",
                    localidade: "",
                    dataChegada: "",
                    dataPartida: "",
                    descricaoExperiencia: ""
                })
                setCarregando(false)
            })
            .catch(erro => {
                console.log("Erro na requisição", erro)
                setTipoMensagem("erro")
                setModalAberto(true)
                setCarregando(false)
            })
    }

    function fecharModal() {
        setModalAberto(false)
    }

    return (
        <>
            <form
                className={styles.container}
                onSubmit={cadastrarViagem}
            >
                <h2 className={styles.titulo}>
                    Diário de Viagens
                </h2>

                <div className={styles.preVisualizacao}>
                    {viagem.fotoUrl ? (
                        <img
                            src={viagem.fotoUrl}
                            alt="Pré-visualização do local"
                        />
                    ) : (
                        <span>
                            FOTO DO LOCAL
                            <br />
                            (A foto da sua viagem)
                        </span>
                    )}
                </div>

                <div className={styles.campo}>
                    <label>Nome do Lugar</label>
                    <input
                        type="text"
                        placeholder="Ex: Machu Picchu"
                        value={viagem.nomeLugar}
                        onChange={(evento) =>
                            salvarValorDigitado(evento, "nomeLugar")
                        }
                    />
                </div>

                <div className={styles.campo}>
                    <label>Continente</label>
                    <select
                        value={viagem.continente}
                        onChange={(evento) =>
                            salvarValorDigitado(evento, "continente")
                        }
                    >
                        <option value="">Selecione</option>
                        <option value="África">África</option>
                        <option value="América">América</option>
                        <option value="Ásia">Ásia</option>
                        <option value="Europa">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

                <div className={styles.campo}>
                    <label>Localidade</label>
                    <input
                        type="text"
                        placeholder="Endereço completo"
                        value={viagem.localidade}
                        onChange={(evento) =>
                            salvarValorDigitado(evento, "localidade")
                        }
                    />
                </div>

                <div className={styles.datas}>
                    <div className={styles.campo}>
                        <label>Data de chegada</label>
                        <input
                            type="date"
                            value={viagem.dataChegada}
                            onChange={(evento) =>
                                salvarValorDigitado(evento, "dataChegada")
                            }
                        />
                    </div>

                    <div className={styles.campo}>
                        <label>Data de partida</label>
                        <input
                            type="date"
                            value={viagem.dataPartida}
                            onChange={(evento) =>
                                salvarValorDigitado(evento, "dataPartida")
                            }
                        />
                    </div>
                </div>

                <div className={styles.campo}>
                    <label>URL da Fotografia</label>
                    <input
                        type="text"
                        placeholder="Cole o link da imagem"
                        value={viagem.fotoUrl}
                        onChange={(evento) =>
                            salvarValorDigitado(evento, "fotoUrl")
                        }
                    />
                </div>

                <div className={styles.campo}>
                    <label>Descrição da Experiência</label>
                    <textarea
                        placeholder="Escreva sobre sua visita, sentimentos e memórias."
                        value={viagem.descricaoExperiencia}
                        onChange={(evento) =>
                            salvarValorDigitado(evento, "descricaoExperiencia")
                        }
                    />
                </div>

                <div className={styles.acoes}>
                    <button
                        className={styles.botao}
                        type="submit"
                        disabled={carregando}
                    >
                        {carregando ? "SALVANDO..." : "SALVAR NO DIÁRIO"}
                    </button>

                    <Link
                        className={styles.botao}
                        to="/viagens"
                    >
                        VISUALIZAR SUAS VIAGENS
                    </Link>
                </div>
            </form>

            {modalAberto && (
                <div className={styles.fundoModal}>
                    <div className={styles.modal}>
                        {tipoMensagem === "sucesso" ? (
                            <>
                                <h3>Viagem cadastrada!</h3>
                                <p>
                                    Sua viagem foi salva no diário com sucesso.
                                </p>
                            </>
                        ) : (
                            <>
                                <h3>Não foi possível cadastrar</h3>
                                <p>
                                    Verifique os dados preenchidos e tente novamente.
                                </p>
                            </>
                        )}

                        <button
                            className={styles.botaoModal}
                            onClick={fecharModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}