package com.mendes.dslist.controllers;

import com.mendes.dslist.dto.GameListDTO;
import com.mendes.dslist.dto.GameMinDTO;
import com.mendes.dslist.dto.ReplacementDTO;
import com.mendes.dslist.services.GameListServices;
import com.mendes.dslist.services.GameServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping(value = "/{listId}/replacement")
    public void move(@PathVariable Long listId, @RequestBody ReplacementDTO body) {
        gameListServices.move(listId, body.getSourceIndex(), body.getDestinationIndex());
    }

}
