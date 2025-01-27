package com.mendes.dslist.repositories;

import com.mendes.dslist.entities.Belonging;
import com.mendes.dslist.entities.BelongingPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface BelongingRepository extends JpaRepository<Belonging, BelongingPK> {
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM tb_belonging where tb_belonging.list_id = :listId")
    void deleteByGameListId(Long listId);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "INSERT INTO tb_belonging (position, game_id, list_id) " +
           "VALUES ((SELECT COALESCE(MAX(position), -1) + 1 FROM tb_belonging WHERE list_id = :list_id), :game_id, :list_id)")
            void addGame(Long game_id, Long list_id);

}
