package school.sptech.integrador;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ViagemRepository {

    private final JdbcTemplate template;

    public ViagemRepository(JdbcTemplate template) {
        this.template = template;
    }

    public List<Viagem> listar() {

        String sql = "SELECT * FROM viagem";

        List<Viagem> resultado = template.query(
                sql,
                new BeanPropertyRowMapper<>(Viagem.class)
        );

        return resultado;
    }

    public Viagem cadastrar(Viagem viagem) {

        String sql = """
                INSERT INTO viagem (
                foto_url,
                nome_lugar,
                continente,
                localidade,
                data_chegada,
                data_partida,
                descricao_experiencia
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {

            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, viagem.getFotoUrl());
            statement.setString(2, viagem.getNomeLugar());
            statement.setString(3, viagem.getContinente());
            statement.setString(4, viagem.getLocalidade());
            statement.setObject(5, viagem.getDataChegada());
            statement.setObject(6, viagem.getDataPartida());
            statement.setString(7, viagem.getDescricaoExperiencia());

            return statement;

        }, keyHolder);

        int id = keyHolder.getKey().intValue();

        viagem.setId(id);

        return viagem;
    }

}
