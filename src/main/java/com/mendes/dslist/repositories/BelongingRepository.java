package com.mendes.dslist.repositories;

import com.mendes.dslist.entities.Belonging;
import com.mendes.dslist.entities.BelongingPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BelongingRepository extends JpaRepository<Belonging, BelongingPK> {
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM tb_belonging where tb_belonging.list_id = :listId")
    void deleteByGameListId(Long listId);
}
