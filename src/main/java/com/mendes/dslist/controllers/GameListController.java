package com.mendes.dslist.controllers;

import com.mendes.dslist.dto.GameListDTO;
import com.mendes.dslist.dto.GameMinDTO;
import com.mendes.dslist.dto.ReplacementDTO;
import com.mendes.dslist.entities.GameList;
import com.mendes.dslist.services.GameListServices;
import com.mendes.dslist.services.GameServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping(value = "/lists")
public class GameListController {

    @Autowired
    GameListServices gameListServices;
    @Autowired
    private GameServices gameServices;

    @GetMapping
    public List<GameListDTO> findAll() {
        return gameListServices.findAll();
    }

    @GetMapping(value = "/{listId}/games")
    public List<GameMinDTO> findByList(@PathVariable Long listId) {
        List<GameMinDTO> result = gameServices.findByList(listId);
        return result;
    }

    @GetMapping(value = "/{listId}")
    public GameListDTO findById(@PathVariable Long listId) {
        return gameListServices.findById(listId);
    }

    @PostMapping
    public void addGameList(@RequestBody GameList gameList) {
        gameListServices.addGameList(gameList);
    }

    @DeleteMapping(value = "{id}")
    public void deleteGameListById(@PathVariable Long id) {
        gameListServices.deleteGameListById(id);
    }

    @PostMapping(value = "/{listId}/replacement")
    public void move(@PathVariable Long listId, @RequestBody ReplacementDTO body) {
        gameListServices.move(listId, body.getSourceIndex(), body.getDestinationIndex());
    }

    @PutMapping(value = "{id}")
    public void updateGameList(@PathVariable Long id, @RequestBody GameList gameList) {
        gameListServices.updateGameListById(id, gameList.getName());
    }

}
