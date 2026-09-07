package school.sptech.integrador;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/viagens")
public class ViagemController {

    private final ViagemService service;

    public ViagemController(ViagemService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Viagem>> listar() {
        List<Viagem> resultado = service.listar();
        return ResponseEntity.status(200).body(resultado);
    }

    @PostMapping
    public ResponseEntity<Viagem> cadastrar(
            @RequestBody Viagem viagem
    ) {
        try {
            Viagem novaViagem = service.cadastrar(viagem);
            return ResponseEntity.status(201).body(novaViagem);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).build();
        }
    }
}
