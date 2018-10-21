# fofx-cron

An input plugin for crontab-flavoured scheduled tasks for [fofx](https://github.com/functzia/fofx)

- **type:** `"cron"`
- **params (these go in your _plugins.json_):** none.
- **input params (these go in your _nano.json_ input key)**:
  - **cron [string]** the task's crontab syntax schedule.

## Sample _plugins.json_

```json
["fofx-cron"]
```

## Sample _nano.json_

```json
{
  "input": {
    "type": "cron",
    "cron": "*/20 * * * * *"
  }
}
```
