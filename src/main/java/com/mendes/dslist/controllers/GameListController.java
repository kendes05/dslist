package com.mendes.dslist.controllers;

import com.mendes.dslist.dto.GameListDTO;
import com.mendes.dslist.entities.GameList;
import com.mendes.dslist.services.GameListServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/lists")
public class GameListController {

    @Autowired
    GameListServices gameListServices;

    @GetMapping
    public List<GameListDTO> findAll() {
        return gameListServices.findAll();
    }

}
