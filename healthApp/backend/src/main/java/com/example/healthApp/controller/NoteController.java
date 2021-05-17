package com.example.healthApp.controller;

import com.example.healthApp.model.Message;
import com.example.healthApp.model.Note;
import com.example.healthApp.repository.NoteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class NoteController {
    NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping(path = "note/{id}")
    ResponseEntity<?> getNoteById(@PathVariable Long id){
        Optional<Note> note = noteRepository.findById(id);
        return note.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(path = "/create/note")
    public Message createNote(@RequestBody Note note){
            noteRepository.save(note);
            return new Message("Successfully created!");
    }

    @DeleteMapping(path = "/delete/note/{id}")
    public Message deleteNote(@PathVariable Long id){
        noteRepository.deleteById(id);
        return new Message("Successfully deleted!");
    }
}
