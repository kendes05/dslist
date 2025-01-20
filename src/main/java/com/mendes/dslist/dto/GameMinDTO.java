package com.mendes.dslist.dto;


import com.mendes.dslist.entities.Game;

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
