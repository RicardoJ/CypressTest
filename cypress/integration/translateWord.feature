Feature: The Google translate

    I want translate a word in google translate

    @focus
    Scenario: Translate word
        Given I open Google translate
        When I write "Hola" and clean text after write again
        Then I see "hello" in the translation box