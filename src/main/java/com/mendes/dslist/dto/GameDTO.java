package com.mendes.dslist.dto;

import com.mendes.dslist.entities.Game;
import org.springframework.beans.BeanUtils;

public class GameDTO {
    private Long id;
    private String title;
    private String shortDescription;
    private Integer year;
    private String genre;
    private String longDescription;
    private Double score;
    private String imgUrl;
    private String platforms;

    public GameDTO() {

    }
    public GameDTO(Game game){
        BeanUtils.copyProperties(game, this);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getPlatforms() {
        return platforms;
    }

    public void setPlatforms(String platforms) {
        this.platforms = platforms;
    }

    public Game dtoToGame(){
        Game game = new Game();
        game.setTitle(this.title);
        game.setYear(this.year);
        game.setLongDescription(this.longDescription);
        game.setGenre(this.genre);
        game.setScore(this.score);
        game.setImgUrl(this.imgUrl);
        game.setPlatforms(this.platforms);
        game.setShortDescription(this.shortDescription);
        game.setId(this.id);
        return game;
    }
}

