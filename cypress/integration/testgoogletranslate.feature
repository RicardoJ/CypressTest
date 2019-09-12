Feature: The Google translate

    i want translate a word in google translate

    Scenario: Translate word
        Given I opened Google translate
        When I write "approach"
        Then I see "enfoque" in the translation box