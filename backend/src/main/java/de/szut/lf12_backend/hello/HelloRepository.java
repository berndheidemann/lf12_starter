package de.szut.lf12_backend.hello;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HelloRepository extends JpaRepository<HelloEntity, Long> {
    List<HelloEntity> findByMessage(String message);
}
