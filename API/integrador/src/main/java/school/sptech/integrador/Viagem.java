package school.sptech.integrador;

import java.time.LocalDate;

public class Viagem {
    private Integer id;
    private String fotoUrl;
    private String nomeLugar;
    private String continente;
    private String localidade;
    private LocalDate dataChegada;
    private LocalDate dataPartida;
    private String descricaoExperiencia;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    public String getNomeLugar() {
        return nomeLugar;
    }

    public void setNomeLugar(String nomeLugar) {
        this.nomeLugar = nomeLugar;
    }

    public String getContinente() {
        return continente;
    }

    public void setContinente(String continente) {
        this.continente = continente;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public LocalDate getDataChegada() {
        return dataChegada;
    }

    public void setDataChegada(LocalDate dataChegada) {
        this.dataChegada = dataChegada;
    }

    public LocalDate getDataPartida() {
        return dataPartida;
    }

    public void setDataPartida(LocalDate dataPartida) {
        this.dataPartida = dataPartida;
    }

    public String getDescricaoExperiencia() {
        return descricaoExperiencia;
    }

    public void setDescricaoExperiencia(String descricaoExperiencia) {
        this.descricaoExperiencia = descricaoExperiencia;
    }
}
