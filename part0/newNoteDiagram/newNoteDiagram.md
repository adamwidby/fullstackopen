```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET asdf
    activate server
    server-->>browswer: HTML qwer
    deactivate server

    Note right of browser: this is the note right of the browser

```