# Features
- Friends list
- Receive email alerts
- Persistant storage
- Custom poll frequency
- Custom game tracking
- User authentication

# User Stories
- As a new developer beginning work on this app, I want the structure to be organized and well-documented so it doesn't take long to get up to speed on where the project is at and start making my own modifications.
- As a developer, I want the deployment process to be pain-free and rapid. I want it to be effortless to push small changes to production and I don't want to have to worry about breaking things.
- As a user, I want to be able to receive alerts when one of my friends logs into a game.
- As a user, I want my information to persist so that I don't have to re-type my friends list every time I log in.
- As the product owner, I want the code to be modularized so that I can re-use parts of it in different projects.

# Product Backlog
- Web worker
  - Run either as a cron job or javascript setInterval, either locally or on our servers.
  - Use either Steams API or a web-scraping library/regex.
- Alert module
  - email
  - other?
- Front end
  - Form to add friends
    - input for friends steam name
    - input for game name
    - ? input for polling interval?
    - input for email to send alerts
  - user login
  - notification bar
- Database
  - Mongo?
  - User table
    - id
    - email
    - username
  - Tracking table
    - Track item
      - id
      - target_user_id
      - steam_alert_user_id
      - game_name
      - polling interval
  - Target table
    - id
    - steam_username
- Deployment
  - docker containers
  - digitalocean
