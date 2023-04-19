package de.szut.lf12_backend.hello;

import de.szut.lf12_backend.hello.dto.HelloCreateDto;
import de.szut.lf12_backend.hello.dto.HelloGetDto;
import org.springframework.stereotype.Service;

@Service
public class HelloMapper {

    public HelloGetDto mapToGetDto(HelloEntity entity) {
        return new HelloGetDto(entity.getId(), entity.getMessage());
    }

    public HelloEntity mapCreateDtoToEntity(HelloCreateDto dto) {
        var entity = new HelloEntity();
        entity.setMessage(dto.getMessage());
        return entity;
    }
}
