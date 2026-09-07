package school.sptech.integrador;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViagemService {
    private final ViagemRepository repository;

    public ViagemService(ViagemRepository repository) {
        this.repository = repository;
    }

    public List<Viagem> listar() {
        return repository.listar();
    }

    public Viagem cadastrar(Viagem viagem) {

        if (viagem.getFotoUrl() == null || viagem.getFotoUrl().isBlank()) {
            throw new IllegalArgumentException("A foto do local é obrigatória");
        }

        if (viagem.getNomeLugar() == null || viagem.getNomeLugar().isBlank()) {
            throw new IllegalArgumentException("O nome do lugar é obrigatório");
        }

        if (viagem.getContinente() == null || viagem.getContinente().isBlank()) {
            throw new IllegalArgumentException("O continente é obrigatório");
        }

        if (viagem.getLocalidade() == null || viagem.getLocalidade().isBlank()) {
            throw new IllegalArgumentException("A localidade é obrigatória");
        }

        if (viagem.getDataChegada() == null) {
            throw new IllegalArgumentException("A data de chegada é obrigatória");
        }

        if (viagem.getDataPartida() != null
                && viagem.getDataPartida().isBefore(viagem.getDataChegada())) {
            throw new IllegalArgumentException(
                    "A data de partida não pode ser anterior a data de chegada"
            );
        }

        if (viagem.getDescricaoExperiencia() == null
                || viagem.getDescricaoExperiencia().isBlank()) {
            throw new IllegalArgumentException("A descrição da experiência é obrigatória");
        }

        return repository.cadastrar(viagem);
    }
}
