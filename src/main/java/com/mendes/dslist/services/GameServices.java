package com.mendes.dslist.services;

import com.mendes.dslist.dto.GameDTO;
import com.mendes.dslist.dto.GameMinDTO;
import com.mendes.dslist.entities.Game;
import com.mendes.dslist.projections.GameMinProjection;
import com.mendes.dslist.repositories.BelongingRepository;
import com.mendes.dslist.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GameServices {

    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private BelongingRepository belongingRepository;

    @Transactional(readOnly = true)
    public List<GameMinDTO> findAll() {
        List<Game> result = gameRepository.findAll();
        List<GameMinDTO> dto = result.stream().map(GameMinDTO::new).toList();
        return dto;
    }

    @Transactional(readOnly = true)
    public List<GameMinDTO> findByList(Long listId) {
        List<GameMinProjection> result = gameRepository.searchByList(listId);
        List<GameMinDTO> dto = result.stream().map(GameMinDTO::new).toList();
        return dto;
    }

    @Transactional(readOnly = true)
    public GameDTO findById(Long id) {
        Game result = gameRepository.findById(id).get();
        return new GameDTO(result);
    }

    public void addGame(Game game, Long listId) {
        gameRepository.save(game);
        belongingRepository.addGame(game.getId(), listId);
    }


}
