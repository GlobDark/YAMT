<h1 align="center">
  <br>
  <a href="https://discord.gg/PBQrdJAzTS"><img src="https://cdn.discordapp.com/attachments/1049349877013954570/1050163521041748048/image.png" alt="YAMT Dashboard"></a>
  <br>
  YAMT Dashboard V1
  <br>
</h1>

All functions:

 * Resource Management (Use it to create servers, etc)
 * Coins (AFK Page earning, Linkvertise earning, Gift them away)
 * Renewal (Require coins for renewal)
 * Coupons (Gives resources & coins to a user)
 * Servers (create, view, edit servers)
 * Login Queue (prevent overload)
 * User System (auth, regen password, etc)
 * Store (buy resources with coins)
 * Dashboard (view resources)
 * Join for Resources (join discord servers for resources)
 * Admin (set/add/remove coins & resources, create/revoke coupons)
 * API (for bots & other things)

<hr>

## Install Guide

**Tip:** You need Pterodactyl already configured on a domain for the client to work.

**1.** Upload the file above onto a Pterodactyl NodeJS server Download the egg from Parkervcp's GitHub Repository

**2.** Unarchive the file and set the server to use NodeJS 17

**3.** Configure settings.json (specifically panel domain/apikey and discord auth settings for it to work)

**4.** Start the server (Ignore the 2 strange errors that might come up)

**5.** Login to your DNS manager, point the domain you want your dashboard to be hosted on to your VPS IP address. (Example: dashboard.domain.com 192.168.0.1)

**6.** Run apt install nginx && apt install certbot on the vps

**7.** Run ufw allow 80 and ufw allow 443 on the vps

**8.** Run certbot certonly -d <Your YAMT Domain> then do 1 and put your email

**9.** Run nano /etc/nginx/sites-enabled/YAMT.conf

**10.** Paste the configuration at the bottom of this and replace with the IP of the pterodactyl server including the port and with the domain you want your dashboard to be hosted on.

**11.** Run systemctl restart nginx and try open your domain.

<hr>

## Nginx Proxy config

```Nginx
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
location /afkwspath {
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_pass "http://localhost:<port>/afkwspath";
}
    
    server_name <domain>;
ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
location / {
      proxy_pass http://localhost:<port>/;
      proxy_buffering off;
      proxy_set_header X-Real-IP $remote_addr;
  }
}
```

<hr>

## Additional Configuration

The client configuration is found in the settings.json file.

By default, a series of plans is configured to use it as memberships. (You can delete, edit all these plans if you wish)

<hr>

## Updating

 New versions of **YAMT** will be temporarily notified in this GitHub repository. In future dashboard updates, a notification system will be added to it, where you will be notified of the most important YAMT updates.

<hr>

## Warning

 This project is in the experimental bases. If you get any bugs in client functions or design bugs, please let us know on our [Discord](https://discord.gg/PBQrdJAzTS)

<hr>

## Donate

[Invite a cafe](https://paypal.me/GproGamer12?country.x=VE&locale.x=es_XC) so that this project continues.

<hr>

## Credits

[Flaxeneel2](https://github.com/flaxeneel2), primary source, great help for this project.

[Zaicadia Hosting](https://www.zaicadiahost.xyz) Source of inspiration for the realization of this project.

**Who will it be?**: Thanks are given to the person who was the base source of the name **YAMT** for the Dashboard.

**あ↬ 𝐸𝓁 𝑀𝒶𝓈𝓉𝑒𝓇 𝟤.𝟢®**: Thanks to him I have the captures: v