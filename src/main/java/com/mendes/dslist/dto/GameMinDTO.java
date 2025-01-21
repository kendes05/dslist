package com.mendes.dslist.dto;


import com.mendes.dslist.entities.Game;
import com.mendes.dslist.projections.GameMinProjection;

public class GameMinDTO {
    private Long id;
    private String title;
    private String shortDescription;
    private Integer year;
    private String imgUrl;

    public GameMinDTO() {
    }

    public GameMinDTO(Game game) {
        id = game.getId();
        title = game.getTitle();
        shortDescription = game.getShortDescription();
        imgUrl = game.getImageUrl();
        year = game.getYear();
    }

    public GameMinDTO(GameMinProjection gameMinProjection) {
        id = gameMinProjection.getId();
        title = gameMinProjection.getTitle();
        shortDescription = gameMinProjection.getShortDescription();
        imgUrl = gameMinProjection.getImgUrl();
        year = gameMinProjection.getYear();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public Integer getYear() {
        return year;
    }

    public String getImgUrl() {
        return imgUrl;
    }
}
