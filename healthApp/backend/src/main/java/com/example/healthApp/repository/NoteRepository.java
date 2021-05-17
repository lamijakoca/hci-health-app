package com.example.healthApp.repository;

import com.example.healthApp.model.Note;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "note", path = "note")
public interface NoteRepository extends PagingAndSortingRepository<Note, Long> {
    List<Note> findAllByNoteId(@Param("noteId") Long noteId);
}
