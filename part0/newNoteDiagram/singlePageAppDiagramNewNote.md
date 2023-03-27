```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: APPLICATION/JSON document
    deactivate server

    Note right of browser: Note content sent to server via POST. Server responds with updated webpage without refresh

```