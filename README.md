# Genshin Character Builds API

<img src="https://i.ibb.co/d7dGPrF/logo.png" alt="logo" border="0" />

This API provides the latest Characters build according to this awesome spreadsheet made by "Genshin Impact Helper Team's"

https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI

This is only JSON API I'm not involved in making the builds, all the credits goes to the respective creators.

## Usage

```
    curl http://localhost:3000/pyro
```
sample:
```json
{
    "data": [
    {
        "name": "amber",
        "builds": [
        {
            "role": "dps",
            "equipment": [
                "1. Amos' Bow (5✩)",
                ".."
            ],
            "artifacts": [
                "1. Wanderer's Troupe (4)",
                ".."
            ],
            "optimal": false
        },
        ],
            "notes": [".."]
        },
    ],
    "updated": "2022-02-26T23:00:00.000Z"
}
```