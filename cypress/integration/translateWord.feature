Feature: The Google translate

    I want translate a word in google translate

    @focus
    Scenario: Translate word
        Given I open Google translate
        Then I see "hello" in the translation box