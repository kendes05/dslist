package com.mendes.dslist.services;

import com.mendes.dslist.dto.GameListDTO;

import com.mendes.dslist.entities.GameList;
import com.mendes.dslist.projections.GameMinProjection;
import com.mendes.dslist.repositories.BelongingRepository;
import com.mendes.dslist.repositories.GameListRepository;
import com.mendes.dslist.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GameListServices {

    @Autowired
    private GameListRepository gameListRepository;
    @Autowired
    private GameRepository gameRepository;
    @Autowired
    private BelongingRepository belongingRepository;



    @Transactional(readOnly = true)
    public List<GameListDTO> findAll() {
        List<GameList> result = gameListRepository.findAll();
        return result.stream().map(x -> new GameListDTO(x)).toList();

    }

    @Transactional(readOnly = true)
    public GameListDTO findById(Long id){
       GameList result = gameListRepository.findById(id).get();
       return new GameListDTO(result);
    }

    @Transactional
    public void addGameList(GameList gameList){
        gameListRepository.save(gameList);
    }

    @Transactional
    public void deleteGameListById(Long id){
        belongingRepository.deleteByGameListId(id);
        gameListRepository.deleteById(id);
    }

    @Transactional
    public void move(Long listId, int sourceIndex, int destinationIndex) {

        List<GameMinProjection> list = gameRepository.searchByList(listId);

        GameMinProjection obj = list.remove(sourceIndex);
        list.add(destinationIndex, obj);

        int min = Math.min(sourceIndex, destinationIndex);
        int max = Math.max(sourceIndex, destinationIndex);

        for (int i = min; i <= max; i++) {
            gameListRepository.updateBelongingPosition(listId, list.get(i).getId(), i);
        }
    }

}