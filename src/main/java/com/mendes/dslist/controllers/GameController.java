package com.mendes.dslist.controllers;

import com.mendes.dslist.dto.GameMinDTO;
import com.mendes.dslist.entities.Game;
import com.mendes.dslist.services.GameServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/games")
public class GameController {

    @Autowired
    private GameServices gameService;

    @GetMapping
    public List<GameMinDTO> findAll() {
        return gameService.findAll();
    }
}
