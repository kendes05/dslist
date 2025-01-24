package com.mendes.dslist.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "tb_game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String shortDescription;
    @Column(name = "game_year")
    private Integer year;
    private String genre;
    @Column(columnDefinition = "TEXT")
    private String longDescription;
    private Double score;
    private String imgUrl;
    private String platforms;
    public Game() {

    }

    public Game(Long id, String title, String shortDescription, Integer year, String genre, String longDescription, Double score, String imgUrl, String platforms) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.year = year;
        this.genre = genre;


        this.longDescription = longDescription;
        this.score = score;
        this.imgUrl = imgUrl;
        this.platforms = platforms;
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

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getPlatforms() {
        return platforms;
    }
    
    public void setPlatforms(String platforms) {
        this.platforms = platforms;
    }
    
    public String getImgUrl() {
        return imgUrl;
    }
    
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Game game = (Game) o;
        return Objects.equals(id, game.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
