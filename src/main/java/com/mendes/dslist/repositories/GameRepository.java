package com.mendes.dslist.repositories;

import com.mendes.dslist.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
 public interface GameRepository extends JpaRepository<Game, Long> {

}
